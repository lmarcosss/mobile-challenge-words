import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '@screens';
import {MainNavigator} from './main.navigator';
import {RootStackParamListType} from '@types';

export const RootStack = createNativeStackNavigator<RootStackParamListType>();

export function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="MainStack"
        component={MainNavigator}
      />
      <RootStack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
    </RootStack.Navigator>
  );
}
