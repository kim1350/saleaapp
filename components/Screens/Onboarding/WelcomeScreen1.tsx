import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors, normalize, stylesConst} from '../../../constants';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');
const WelcomeScreen1: React.FC<{
  animValue: SharedValue<number>;
  index: number;
}> = ({animValue, index}) => {
  const rStyle = useAnimatedStyle(() => {
    const inter = interpolate(
      animValue.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
    );
    return {
      opacity: inter,
    };
  });
  return (
    <ImageBackground
      source={require('../../../assets/welcome1.png')}
      imageStyle={styles.backgroundImageContainer}
      style={styles.child}>
      <Animated.View style={[styles.textContainer, rStyle]}>
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
          пользователей{'\n'}работают с нами
        </Text>
        <Text style={stylesConst.text_title_32_e}>22</Text>
        <Text style={stylesConst.text_12_r}>бесплатных{'\n'}инструмента</Text>
      </Animated.View>

      {/* <Image
        source={require('../../../assets/robot1.png')}
        style={styles.image}
      /> */}

      <Image
        source={require('../../../assets/bottom1.png')}
        style={{
          width: width,
          position: 'absolute',
          height: (670 / 375) * width,
          bottom: 0,
          zIndex: 0,
        }}
      />
    </ImageBackground>
  );
};

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
    position: 'absolute',
    zIndex: 3,
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
    height: 265,
    width: 216,
    position: 'absolute',
    bottom: 92,
    right: -44,
    zIndex: 3,
  },
});
