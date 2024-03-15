import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import OnboardingMain from '../Screens/Onboarding/OnboardingMain';
import WebScreen from '../WebScreen';
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <Stack.Screen name="Onboarding" component={OnboardingMain} />
      <Stack.Screen name="WebScreen" component={WebScreen} />
    </Stack.Navigator>
  );
};

const MainNavigate = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default MainNavigate;
