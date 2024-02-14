import React from 'react';
import {ColorsEnum} from '@constants';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export function GoBackButton({goBack}: any) {
  return (
    <TouchableOpacity onPress={goBack}>
      <Feather color={ColorsEnum.PRIMARY_FONT} name="x" size={28} />
    </TouchableOpacity>
  );
}
