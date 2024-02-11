import {WordsList} from '@components';
import {useFavoritesContext} from '@contexts';
import React from 'react';
import {View} from 'react-native';

import style from './favorites.style';

export function FavoritesScreen() {
  const {favorites} = useFavoritesContext();

  return (
    <View style={style.container}>
      <WordsList words={favorites} listEmptyText="No favorite items" />
    </View>
  );
}
