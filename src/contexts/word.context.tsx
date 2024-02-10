import React, {useContext} from 'react';
import {createContext, useState} from 'react';

type DefaultValueType = {
  word: string;
  setWord(word: string): void;
};

const defaultValue = {} as DefaultValueType;

const WordContext = createContext(defaultValue);

type HistoryContextProviderProps = {
  children: JSX.Element;
};

export function WordContextProvider({children}: HistoryContextProviderProps) {
  const [word, setWord] = useState('');

  return (
    <WordContext.Provider
      value={{
        word,
        setWord,
      }}>
      {children}
    </WordContext.Provider>
  );
}

export function useWordContext() {
  const context = useContext(WordContext);

  if (!context) {
    throw new Error(
      'useWordContext must be used within the scope of WordContextProvider',
    );
  }

  return context;
}
