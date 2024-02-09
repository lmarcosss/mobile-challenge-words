import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import style from './words-list.style';

type WordsListProps = {
  onLoadMoreItems(): void;
  words: string[];
};

export function WordsList({onLoadMoreItems, words}: WordsListProps) {
  return (
    <FlatList
      data={words}
      keyExtractor={item => item}
      contentContainerStyle={style.container}
      testID="words-list"
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity testID="words-list-item">
          <Text style={style.text}>{item}</Text>
        </TouchableOpacity>
      )}
      onEndReached={onLoadMoreItems}
      onEndReachedThreshold={0.1}
      ListFooterComponent={<ActivityIndicator />}
      ListFooterComponentStyle={style.loader}
      numColumns={3}
    />
  );
}
