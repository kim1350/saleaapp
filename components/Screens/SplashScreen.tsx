import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';

import {colors, normalize} from '../../constants';
import {scale} from '../../utils/Adaptive';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/launch_screen.png')}>
        <View style={{height: STATUSBAR_HEIGHT}}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
        </View>
        <SafeAreaView style={{flex: 1}}>
          <Text style={styles.text}>Saleads.pro</Text>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export default SplashScreen;

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    bottom: scale(26),
    alignSelf: 'center',
    fontFamily: 'Mulish-Bold',
    fontSize: normalize(26),
    color: colors.WHITE,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  companyLogo: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
