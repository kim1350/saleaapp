import React, {FC, useEffect, useRef} from 'react';
import {WebView} from 'react-native-webview';
import {ActivityIndicator, BackHandler, SafeAreaView, View} from 'react-native';
import MyStatusBar from './MyStatusBar';
import {colors} from '../constants';
import {WebScreenProps} from './routes/MainNavigate';

const types = {
  signin: 'https://saleads.pro/login?mobile=1',
  registartion: 'https://saleads.pro/register?mobile=1',
  token: 'https://saleads.pro/lk/webmaster/dashboard',
};

const WebScreen: FC<WebScreenProps> = ({route}) => {
  useEffect(() => {
    const backAction = () => {
      if (webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const webViewRef = useRef<WebView>(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar barStyleT="dark-content" colorStatus={colors.WHITE} />
      <WebView
        ref={webViewRef}
        renderLoading={() => (
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: colors.WHITE,
            }}>
            <ActivityIndicator size="large" color={colors.GREEN} />
          </View>
        )}
        onMessage={e => {
          console.log(e);
        }}
        sharedCookiesEnabled
        startInLoadingState
        javaScriptEnabled={true}
        domStorageEnabled={true}
        thirdPartyCookiesEnabled={true}
        source={{
          uri: types[route.params.type],
        }}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default WebScreen;
