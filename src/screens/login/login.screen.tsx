import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import style from './login.style';

export function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text>LoginScreen</Text>
      </View>
    </SafeAreaView>
  );
}
