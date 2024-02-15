import React from 'react';
import {ColorsEnum} from '@constants';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

type GoBackButtonProps = {
  goBack(): void;
};

export function GoBackButton({goBack}: GoBackButtonProps) {
  return (
    <TouchableOpacity testID="go-back-button" onPress={goBack}>
      <Feather color={ColorsEnum.PRIMARY_FONT} name="x" size={28} />
    </TouchableOpacity>
  );
}
