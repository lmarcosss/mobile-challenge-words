import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {WordsScreen, FavoritesScreen, HistoryScreen} from '@screens';

const Tab = createMaterialTopTabNavigator();

export function TabNavigation() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Tab.Screen name="Words" component={WordsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}