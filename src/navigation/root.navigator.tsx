import React from 'react';
import {TabNavigator} from './tab-navigator';
import {WordDetailsModalScreen} from '@screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import style from './navigator.style';

const RootStack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          contentStyle: style.backgroundStyle,
          statusBarStyle: 'light',
        }}>
        <RootStack.Screen
          name="TabNavigator"
          options={{
            headerShown: false,
          }}
          component={TabNavigator}
        />
        <RootStack.Screen
          name="WordDetailsModal"
          component={WordDetailsModalScreen}
          options={{
            presentation: 'modal',
            headerStyle: style.backgroundStyle,
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
