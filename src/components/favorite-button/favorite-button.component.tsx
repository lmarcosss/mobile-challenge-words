import React from 'react';
import {ColorsEnum} from '@constants';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';

export function FavoriteButton({isFavorite, onFavoriteWord}: any) {
  return (
    <TouchableOpacity onPress={onFavoriteWord}>
      <FontAwesome
        solid={isFavorite}
        name="heart"
        color={ColorsEnum.PRIMARY_FONT}
        size={24}
      />
    </TouchableOpacity>
  );
}
