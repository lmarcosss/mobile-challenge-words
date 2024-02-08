import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import wordsData from '../../core/words';
import {WordsList} from '@components';

import style from './words.style';

const itensPerPage = 15;

export function WordsScreen() {
  const [words, setWords] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const loadMoreItems = () => {
    const nextItems = wordsData.slice(words.length, page * itensPerPage);

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
