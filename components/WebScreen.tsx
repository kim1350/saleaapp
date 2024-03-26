import React, {FC, useEffect, useRef} from 'react';
import {WebView} from 'react-native-webview';
import {
  ActivityIndicator,
  BackHandler,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import MyStatusBar from './MyStatusBar';
import {colors, stylesConst} from '../constants';
import {WebScreenProps} from './routes/MainNavigate';
import ErrorIcon from '../assets/icons/ErrorIcon';

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
  const reloadWebView = () => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };
  const webViewRef = useRef<WebView>(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <MyStatusBar barStyleT="dark-content" colorStatus={colors.WHITE} />
      <WebView
        onError={() => {
          console.log('asds');
          setTimeout(() => reloadWebView(), 5000);
        }}
        ref={webViewRef}
        renderError={() => (
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: colors.WHITE,
            }}>
            <ErrorIcon color={colors.GREEN} />
            <Text style={stylesConst.text_14_r}>
              Проверьте интернет соединение
            </Text>
          </View>
        )}
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
