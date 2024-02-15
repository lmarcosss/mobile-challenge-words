import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import style from './words-list-item.style';

type WordsListItemProps = {
  item: string;
  onPress(item: string): void;
};

function WordsListItemComponent({item, onPress}: WordsListItemProps) {
  return (
    <TouchableOpacity
      style={style.containerText}
      onPress={() => onPress(item)}
      testID="words-list-item">
      <Text style={style.text}>{item}</Text>
    </TouchableOpacity>
  );
}

export const WordsListItem = memo(WordsListItemComponent);
