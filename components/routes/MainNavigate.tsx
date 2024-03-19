import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import OnboardingMain from '../Screens/Onboarding/OnboardingMain';
import WebScreen from '../WebScreen';

import SplashScreen from '../Screens/SplashScreen';

type RootStackParamList = {
  SplashScreen: undefined;
  Onboarding: undefined;
  WebScreen: {type: 'signin' | 'registartion' | 'token'};
};
export type WebScreenProps = StackScreenProps<RootStackParamList, 'WebScreen'>;
export type OnboardingProps = StackScreenProps<
  RootStackParamList,
  'Onboarding'
>;
export type SplashScreenProps = StackScreenProps<
  RootStackParamList,
  'SplashScreen'
>;
const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingMain} />

      <Stack.Screen
        name="WebScreen"
        component={WebScreen}
        initialParams={{type: 'token'}}
      />
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
