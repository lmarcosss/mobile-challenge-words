import React from 'react';
import {colors} from '@constants';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export function GoBackButton({goBack}: any) {
  return (
    <TouchableOpacity onPress={goBack}>
      <Feather color={colors.PRIMARY_FONT} name="x" size={28} />
    </TouchableOpacity>
  );
}
