import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import style from './words-list.style';

type WordListItemProps = {
  item: string;
  onPress(item: string): void;
};

function WordListItemComponent({item, onPress}: WordListItemProps) {
  return (
    <TouchableOpacity
      style={style.containerText}
      onPress={() => onPress(item)}
      testID="words-list-item">
      <Text style={style.text}>{item}</Text>
    </TouchableOpacity>
  );
}

export const WordListItem = memo(WordListItemComponent);
