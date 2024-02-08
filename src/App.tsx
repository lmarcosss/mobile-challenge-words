import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigation} from './navigation/tab-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TabNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
