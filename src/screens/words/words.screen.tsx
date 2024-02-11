import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {WordsList} from '@components';
import {newWords} from '@constants';

import style from './words.style';

const itemsPerPage = 50;

export function WordsScreen() {
  const [words, setWords] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const loadMoreItems = () => {
    const nextItems = newWords.slice(words.length, page * itemsPerPage);

    setWords(prevWords => {
      setPage(previousPage => previousPage + 1);

      return [...prevWords, ...nextItems];
    });
  };

  useEffect(() => {
    loadMoreItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={style.container}>
      <WordsList onLoadMoreItems={loadMoreItems} words={words} />
    </View>
  );
}
