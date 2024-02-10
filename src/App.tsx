import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  WordContextProvider,
  FavoritesContextProvider,
  HistoryContextProvider,
} from '@contexts';
import {RootNavigator} from './navigation/root.navigator';

export function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <WordContextProvider>
          <HistoryContextProvider>
            <FavoritesContextProvider>
              <RootNavigator />
            </FavoritesContextProvider>
          </HistoryContextProvider>
        </WordContextProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
