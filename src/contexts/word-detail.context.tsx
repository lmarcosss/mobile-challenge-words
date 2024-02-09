import React, {useCallback, useContext} from 'react';
import {createContext, useState} from 'react';

const defaultValue = {} as {
  word: string;
  setWord(word: string): void;
  history: string[];
  addWordToHistory(word: string): void;
};

export const WordDetailsContext = createContext(defaultValue);

type WordDetailsContextProviderProps = {
  children: JSX.Element;
};

export function WordDetailsContextProvider({
  children,
}: WordDetailsContextProviderProps) {
  const [word, setWord] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const addWordToHistory = useCallback(
    (newWord: string) => {
      const newHistory = history.filter(item => item !== newWord);
      newHistory.unshift(newWord);

      setHistory(newHistory);
    },
    [history],
  );

  return (
    <WordDetailsContext.Provider
      value={{word, setWord, history, addWordToHistory}}>
      {children}
    </WordDetailsContext.Provider>
  );
}

export function useWordDetailsContext() {
  const context = useContext(WordDetailsContext);

  if (!context) {
    throw new Error(
      'useWordDetailsContext must be used within the scope of WordDetailsContextProvider',
    );
  }

  return context;
}
