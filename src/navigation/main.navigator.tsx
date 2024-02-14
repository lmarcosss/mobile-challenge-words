import React from 'react';
import {RootStack as MainStack} from './root.navigator';

import {WordDetailsModalScreen} from '@screens';
import {TabNavigator} from './tab-navigator';
import {
  WordContextProvider,
  FavoritesContextProvider,
  HistoryContextProvider,
} from '@contexts';

import style from './navigator.style';

export function MainNavigator() {
  return (
    <WordContextProvider>
      <FavoritesContextProvider>
        <HistoryContextProvider>
          <MainStack.Navigator
            screenOptions={{
              contentStyle: style.backgroundStyle,
              statusBarStyle: 'light',
            }}>
            <MainStack.Screen
              name="TabNavigator"
              options={{
                headerShown: false,
              }}
              component={TabNavigator}
            />
            <MainStack.Screen
              name="WordDetailsModal"
              component={WordDetailsModalScreen}
              options={{
                presentation: 'modal',
                headerStyle: style.headerStyle,
                headerTitleAlign: 'center',
              }}
            />
          </MainStack.Navigator>
        </HistoryContextProvider>
      </FavoritesContextProvider>
    </WordContextProvider>
  );
}
