import React from 'react';
import {View} from 'react-native';
import {WordsList} from '@components';
import {useWordDetailsContext} from '@contexts';

import style from './history.style';

export function HistoryScreen() {
  const {history} = useWordDetailsContext();

  return (
    <View style={style.container}>
      <WordsList words={history} />
    </View>
  );
}
