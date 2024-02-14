import React, {useCallback, useContext, useEffect} from 'react';
import {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeysEnum} from '@constants';

type DefaultValueType = {
  history: string[];
  addWordToHistory(word: string): void;
};

const defaultValue = {} as DefaultValueType;

const HistoryContext = createContext(defaultValue);

type HistoryContextProviderProps = {
  children: JSX.Element;
};

export function HistoryContextProvider({
  children,
}: HistoryContextProviderProps) {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    async function getData() {
      const historyList = await AsyncStorage.getItem(
        StorageKeysEnum.HISTORY_LIST,
      );

      if (historyList) {
        setHistory(JSON.parse(historyList));
      } else {
        AsyncStorage.setItem(
          StorageKeysEnum.HISTORY_LIST,
          JSON.stringify(history),
        );
      }
    }

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addWordToHistory = useCallback(
    (newWord: string) => {
      const newHistory = history.filter(item => item !== newWord);
      newHistory.unshift(newWord);

      setHistory(newHistory);
      AsyncStorage.setItem(
        StorageKeysEnum.HISTORY_LIST,
        JSON.stringify(newHistory),
      );
    },
    [history],
  );

  return (
    <HistoryContext.Provider
      value={{
        history,
        addWordToHistory,
      }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistoryContext() {
  const context = useContext(HistoryContext);

  if (!context) {
    throw new Error(
      'useHistoryContext must be used within the scope of HistoryContextProvider',
    );
  }

  return context;
}
