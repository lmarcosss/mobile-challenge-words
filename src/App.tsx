import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/root.navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
