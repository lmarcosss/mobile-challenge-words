import React from 'react';
import {View} from 'react-native';
import {WordsList} from '@components';
import {useHistoryContext} from '@contexts';

import style from './history.style';

export function HistoryScreen() {
  const {history} = useHistoryContext();

  return (
    <View style={style.container}>
      <WordsList words={history} listEmptyText="No history items" />
    </View>
  );
}
