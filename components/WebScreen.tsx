import React, {FC, useEffect, useRef} from 'react';
import {WebView} from 'react-native-webview';
import {
  ActivityIndicator,
  BackHandler,
  View,
  Text,
  Alert,
  Linking,
  SafeAreaView,
  Platform,
} from 'react-native';
import {colors, stylesConst} from '../constants';
import {WebScreenProps} from './routes/MainNavigate';
import ErrorIcon from '../assets/icons/ErrorIcon';
import {downloadFile} from '../utils/downloadFile';
import MyStatusBar from './MyStatusBar';

const types = {
  signin: 'https://saleads.pro/login?mobile=1',
  registartion: 'https://saleads.pro/register?mobile=1',
  token: 'https://saleads.pro/lk/webmaster/dashboard',
};
const WebScreen: FC<WebScreenProps> = ({route}) => {
  const INJECTEDJAVASCRIPT =
    "const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); ";

  useEffect(() => {
    const backAction = () => {
      console.log('back');
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

  const reloadWebView = () => {
    if (webViewRef?.current) {
      webViewRef.current.reload;
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#2B3143'}}>
      <View style={{flex: 1, backgroundColor: colors.WHITE}}>
        <MyStatusBar barStyleT="light-content" colorStatus="#2B3143" />
        <WebView
          setBuiltInZoomControls={false}
          onFileDownload={({nativeEvent: {downloadUrl}}) => {
            Alert.alert(
              'Скачать',
              'Вы хотите скачать файл ?',
              [
                {
                  text: 'Download',
                  onPress: () => {
                    downloadFile(downloadUrl);
                  },
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
              ],
              {cancelable: false},
            );
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
          onLoadStart={() => {
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
            </View>;
          }}
          onShouldStartLoadWithRequest={e => {
            if (Platform.OS === 'ios' && e.url.includes('.png')) {
              Alert.alert(
                'Скачать',
                'Вы хотите скачать файл ?',
                [
                  {
                    text: 'Download',
                    onPress: () => {
                      downloadFile(e.url);
                    },
                  },
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                ],
                {cancelable: false},
              );
              return false;
            }
            if (
              e.url.includes('pro.selfwork.ru') ||
              e.url.includes('webmaster/cpaider')
            ) {
              Linking.openURL(e.url);
              return false;
            } else {
              return true;
            }
          }}
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
          onError={() => {
            reloadWebView();
          }}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          sharedCookiesEnabled
          startInLoadingState
          javaScriptEnabled={true}
          domStorageEnabled={true}
          thirdPartyCookiesEnabled={true}
          source={{
            headers: {
              'X-Device-Type': 'saleads-app',
            },
            uri: types[route.params.type],
          }}
          style={{flex: 1}}
        />
      </View>
    </SafeAreaView>
  );
};

export default WebScreen;
