import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import style from './words-list.style';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useWordContext} from '@contexts';

type WordsListProps = {
  onLoadMoreItems?(): void;
  words: string[];
  listEmptyText?: string;
};

type WordListNavigationProps = {
  WordDetailsModal: undefined;
};

export function WordsList({
  onLoadMoreItems,
  words,
  listEmptyText,
}: WordsListProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<WordListNavigationProps>>();
  const {setWord} = useWordContext();

  const onPress = (word: string) => {
    setWord(word);
    navigation.navigate('WordDetailsModal');
  };

  const hasInfiniteScroll = !!onLoadMoreItems;

  return (
    <FlatList
      data={words}
      keyExtractor={item => item}
      contentContainerStyle={style.container}
      testID="words-list"
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity
          style={style.containerText}
          onPress={() => onPress(item)}
          testID="words-list-item">
          <Text style={style.text}>{item}</Text>
        </TouchableOpacity>
      )}
      onEndReached={hasInfiniteScroll ? onLoadMoreItems : undefined}
      onEndReachedThreshold={hasInfiniteScroll ? 0.1 : undefined}
      ListFooterComponent={
        hasInfiniteScroll ? <ActivityIndicator /> : undefined
      }
      ListFooterComponentStyle={hasInfiniteScroll ? style.loader : undefined}
      numColumns={3}
      ListEmptyComponent={<Text style={style.emptyText}>{listEmptyText}</Text>}
    />
  );
}
