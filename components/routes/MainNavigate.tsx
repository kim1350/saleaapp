import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import OnboardingMain from '../Screens/Onboarding/OnboardingMain';
import WebScreen from '../WebScreen';
import CookieManager from '@react-native-cookies/cookies';
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
const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  const [loadToken, setLoadToken] = useState(true);
  const checkToken = async () => {
    await CookieManager.get('https://saleads.pro')
      .then(res => {
        if (res?.laravel_session) {
          setLoadToken(false);
        }
      })
      .catch(() => {
        setLoadToken(false);
      });
  };
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
