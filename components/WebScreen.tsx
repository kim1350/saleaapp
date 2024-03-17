import React, {useEffect, useRef} from 'react';
import {WebView} from 'react-native-webview';
import CookieManager from '@react-native-cookies/cookies';
import {ActivityIndicator, BackHandler, SafeAreaView, View} from 'react-native';
import MyStatusBar from './MyStatusBar';
import {colors} from '../constants';

const WebScreen = () => {
  // useEffect(() => {
  //   CookieManager.set('https://saleads.pro', {
  //     name: 'XSRF-TOKEN',
  //     value:
  //       'eyJpdiI6ImlaRTRiUDdQVVpkS1Z1bnBCbWs1b3c9PSIsInZhbHVlIjoiU1ZTYVd1MEREOFU3alVBY1NXdlVlaFIzL2FmaU95WUpOTUdvS1VXRXZSQzc0ZytEYmVDdzZacSs2dVhGNExNYmFYenR1MmlHM3lKSFVMcmRscGRxVFRxeElvdUNndGMrcVBPdTlmejFmbEhibUlGVERXV2ZUdDBuK1VvTHFwbzgiLCJtYWMiOiIwNzRmMzQ5MmQwMTIxMjI0ZjE1NTY3NDNjMDUzNjg4MWQyNmE3ODA0YWY5NmJhYmUzYTYxMjA0NjcwOGVkYjY5In0%3D',
  //   }).then(done => {
  //     console.log('CookieManager.set =>', done);
  //   });
  //   CookieManager.set('https://saleads.pro', {
  //     name: 'laravel_session',
  //     value:
  //       'eyJpdiI6IjBIbUVvUWJqN2tzeitYQUdSQVlXTEE9PSIsInZhbHVlIjoiV2ZiNGtpaDg0eHdvZ0pKazBlVWlXOTFOT2ExZHJjTG4yN3VqTFRkZThyc0tFOHVoZzlseHdKQSs0VjYvZk9EZTM5Uy9JUWJxUWhjMmhPZ2c3S0JlcTZqdWsvZ2h6VnZzd0x0bnQrK3ZaSnNQbFpEYUFHVWlmRnBGb3VZOWRuUHEiLCJtYWMiOiIxYzkzYjE3MDgyMTQ1MjM0MDFkNTQ5MjE5NGE1YjIwNTRkYTk1ZTMzNjdlY2NhOWYzOTkxOGNkYmM2NDFhMTQxIn0%3D',
  //   }).then(done => {
  //     console.log('CookieManager.set =>', done);
  //   });
  // }, []);
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
          uri: 'https://saleads.pro',
        }}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

export default WebScreen;
