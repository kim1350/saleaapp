import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../../constants';

const WelcomeScreen1 = () => {
  return (
    <ImageBackground
      source={require('../../../assets/welcome1.png')}
      imageStyle={styles.backgroundImageContainer}
      style={styles.child}>
      <View style={styles.textContainer}>
        <Text style={stylesConst.text_title_32_e}>
          Saleads.pro мультисервисная CPA сеть
        </Text>
        <Text style={styles.text_14_margin}>
          широким выбором офферов, включающая в себя множество встроенных
          бесплатных сервисов и инструментов для работы с трафиком.
        </Text>

        <Text style={stylesConst.text_18_e}>
          Более{'\n'}
          <Text style={stylesConst.text_title_32_e}>50 000</Text>
        </Text>
        <Text style={[stylesConst.text_12_r]}>
          пользователей работают с нами
        </Text>
        <Text style={stylesConst.text_title_32_e}>22</Text>
        <Text style={stylesConst.text_12_r}>бесплатных инструмента</Text>
      </View>
      <Image
        source={require('../../../assets/robot1.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};
const {width} = Dimensions.get('window');
export default WelcomeScreen1;

const styles = StyleSheet.create({
  container: {flex: 1},
  child: {width},
  text: {fontSize: 32, textAlign: 'left'},
  backgroundImageContainer: {
    flex: 1,
    resizeMode: 'stretch',
  },

  textContainer: {
    flex: 1,
    gap: 16,
    paddingTop: 88,
    paddingLeft: 34,
    paddingRight: 45,
  },
  profileStyle: {
    position: 'absolute',
    right: 11,
    zIndex: 3,
    marginTop: 9,
    width: 40,
    height: 40,
    backgroundColor: colors.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 50,
  },
  text_14_margin: {
    ...stylesConst.text_14_r,
    marginBottom: 18,
  },
  containerAbsolute: {
    position: 'absolute',
  },
  buttonsContainer: {
    paddingVertical: 10,
    gap: 8,
    width: '100%',
    paddingHorizontal: 32,
  },
  signinScreenContainer: {
    paddingTop: 167,
    alignItems: 'center',
    gap: 16,
  },
  image: {
    position: 'absolute',
    right: -4,
    width: 172,
    height: 265,
    bottom: 92,
  },
});
