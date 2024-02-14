import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FavoritesScreen, HistoryScreen, WordsScreen} from '@screens';

import style from './navigator.style';

const Tab = createMaterialTopTabNavigator();

export function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      sceneContainerStyle={style.backgroundStyle}
      screenOptions={{
        tabBarStyle: style.backgroundStyle,
        tabBarLabelStyle: style.tabBarLabelStyle,
        tabBarIndicatorStyle: style.tabBarIndicatorStyle,
      }}>
      <Tab.Screen
        name="Words"
        component={WordsScreen}
        options={{title: 'Words'}}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{title: 'History'}}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{title: 'Favorites'}}
      />
    </Tab.Navigator>
  );
}
