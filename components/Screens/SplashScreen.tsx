import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {FC, useEffect} from 'react';

import {colors, normalize} from '../../constants';
import {scale} from '../../utils/Adaptive';
import {SplashScreenProps} from '../routes/MainNavigate';
import CookieManager from '@react-native-cookies/cookies';

const SplashScreen: FC<SplashScreenProps> = ({navigation}) => {
  const checkToken = async () => {
    await CookieManager.get('https://saleads.pro')
      .then(res => {
        if (res?.laravel_session) {
          setTimeout(
            () => navigation.replace('WebScreen', {type: 'token'}),
            800,
          );
        } else {
          setTimeout(() => navigation.replace('Onboarding'), 800);
        }
      })
      .catch(() => {
        setTimeout(() => navigation.replace('Onboarding'), 800);
      });
  };
  useEffect(() => {
    checkToken();
  }, []);

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
