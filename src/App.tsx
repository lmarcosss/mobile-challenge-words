import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './navigation/tab-navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WordDetailsModalScreen} from '@screens';
import {WordDetailsContextProvider} from '@contexts';

const RootStack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <WordDetailsContextProvider>
          <RootStack.Navigator>
            <RootStack.Group>
              <RootStack.Screen
                name="TabNavigator"
                options={{headerShown: false}}
                component={TabNavigator}
              />
              <RootStack.Screen
                name="WordDetailsModal"
                component={WordDetailsModalScreen}
                options={{
                  presentation: 'modal',
                }}
              />
            </RootStack.Group>
          </RootStack.Navigator>
        </WordDetailsContextProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
