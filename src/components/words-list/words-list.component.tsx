import React from 'react';
import {ActivityIndicator, FlatList, Text} from 'react-native';
import style from './words-list.style';
import {useNavigation} from '@react-navigation/native';
import {WordListItem} from './words-list-item.component';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamListType} from '@types';

type WordsListProps = {
  onLoadMoreItems?(): void;
  words: string[];
  listEmptyText?: string;
};

export function WordsList({
  onLoadMoreItems,
  words,
  listEmptyText,
}: WordsListProps) {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamListType, 'WordDetailsModal'>
    >();

  const onPress = (word: string) => {
    navigation.navigate('WordDetailsModal', {word});
  };

  const hasInfiniteScroll = !!onLoadMoreItems;

  return (
    <FlatList
      data={words}
      keyExtractor={item => item}
      contentContainerStyle={style.container}
      testID="words-list"
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <WordListItem item={item} onPress={onPress} />}
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
