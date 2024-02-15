import React from 'react';
import {ColorsEnum} from '@constants';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';

type FavoriteButtonType = {
  isFavorite: boolean;
  onFavoriteWord(): void;
};

export function FavoriteButton({
  isFavorite,
  onFavoriteWord,
}: FavoriteButtonType) {
  return (
    <TouchableOpacity testID="favorite-button" onPress={onFavoriteWord}>
      <FontAwesome
        solid={isFavorite}
        name="heart"
        color={ColorsEnum.PRIMARY_FONT}
        size={24}
      />
    </TouchableOpacity>
  );
}
