/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import MainNavigate from './components/routes/MainNavigate';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
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
