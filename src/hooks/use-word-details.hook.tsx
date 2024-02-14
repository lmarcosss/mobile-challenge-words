import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useHistoryContext} from '@contexts';
import axios from 'axios';
import {WordType} from '@types';

export const api = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
});

const WORDS_DETAILS_STORAGE_ITEM_KEY = 'words-details';

export function useWordDetails(word: string) {
  const {addWordToHistory} = useHistoryContext();
  const [wordDetails, setWordDetails] = useState<WordType | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        addWordToHistory(word);

        const words = await AsyncStorage.getItem(
          WORDS_DETAILS_STORAGE_ITEM_KEY,
        );
        const wordsList = JSON.parse(words || '[]') as WordType[];

        const wordDetailsIndex = wordsList.findIndex(w => w.word === word);

        if (wordDetailsIndex >= 0) {
          setWordDetails(wordsList[wordDetailsIndex]);

          return;
        }

        const {data: apiData} = await api.get(`/${word}`);
        const [newWord] = apiData;

        setWordDetails(newWord);

        const newWordsDetails = [newWord, ...wordsList];
        AsyncStorage.setItem(
          WORDS_DETAILS_STORAGE_ITEM_KEY,
          JSON.stringify(newWordsDetails),
        );
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  return {wordDetails, isLoading, isError};
}
