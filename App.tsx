/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import MainNavigate from './components/routes/MainNavigate';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    let timer = setTimeout(() => SplashScreen.hide(), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <View style={{flex: 1}}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <MainNavigate />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </View>
  );
}

export default App;
