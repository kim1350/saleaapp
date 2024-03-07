import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TestScreen from '../TestScreen';
import WebScreen from '../WebScreen';
const Tab = createBottomTabNavigator();

export const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Инструменты',
        }}
        name="ServicesScreen"
        component={WebScreen}
      />

      <Tab.Screen
        options={{
          headerShown: true,
          title: 'Аналитика',
        }}
        name="AnalScreen"
        component={TestScreen}
      />
      <Tab.Screen
        options={{
          title: 'Профиль',
        }}
        name="ProfileScreen"
        component={TestScreen}
      />
    </Tab.Navigator>
  );
};

const MainNavigate = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigate;
