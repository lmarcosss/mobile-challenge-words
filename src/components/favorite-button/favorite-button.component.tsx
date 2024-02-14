import React from 'react';
import {colors} from '@constants';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';

export function FavoriteButton({isFavorite, onFavoriteWord}: any) {
  return (
    <TouchableOpacity onPress={onFavoriteWord}>
      <FontAwesome
        solid={isFavorite}
        name="heart"
        color={colors.PRIMARY_FONT}
        size={24}
      />
    </TouchableOpacity>
  );
}
