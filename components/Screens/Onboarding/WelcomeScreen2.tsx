import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../../constants';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const WelcomeScreen2: React.FC<{
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
      source={require('../../../assets/welcome2.png')}
      imageStyle={styles.backgroundImageContainer}
      style={styles.child}>
      <Image
        source={require('../../../assets/robot2.png')}
        style={styles.image}
      />

      <Animated.View style={[styles.textContainer, rStyle]}>
        <Text style={stylesConst.text_title_32_e}>
          Большой{'\n'}выбор{'\n'}инструментов
        </Text>
        <Text style={stylesConst.text_14_r}>
          за счет своих встроенных алгоритмов они увеличат ваш заработок
        </Text>
      </Animated.View>
    </ImageBackground>
  );
};
const {width} = Dimensions.get('window');
export default WelcomeScreen2;

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
    height: 265,
    width: 44,
    bottom: 92,
  },
});