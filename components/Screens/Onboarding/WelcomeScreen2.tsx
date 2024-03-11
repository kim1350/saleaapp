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
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
const {width} = Dimensions.get('window');
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
  const yStyle = useAnimatedStyle(() => {
    const inter = interpolate(
      animValue.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
    );

    const interY = interpolate(
      animValue.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [1, 0, 1],
    );

    return {
      transform: [{translateY: interY * -100}],
      opacity: inter,
    };
  });
  return (
    <ImageBackground
      source={require('../../../assets/welcome2.png')}
      imageStyle={styles.backgroundImageContainer}
      style={styles.child}>
      {/* <Image
        source={require('../../../assets/robot2.png')}
        style={styles.image}
        resizeMode="contain"
      /> */}

      <Animated.View style={[styles.textContainer, rStyle]}>
        <Text style={stylesConst.text_title_32_e}>
          Большой{'\n'}выбор{'\n'}инструментов
        </Text>
        <Text style={stylesConst.text_14_r}>
          за счет своих встроенных алгоритмов они увеличат ваш заработок
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          {
            position: 'absolute',
            height: (670 / 375) * width * 0.46,
            zIndex: 3,
            width: (312 * width) / 375,
            left: 56,
            bottom: 116,
          },

          rStyle,
        ]}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={require('../../../assets/anal2.png')}
        />
      </Animated.View>
      <Animated.View style={rStyle}>
        <Image
          style={[
            {
              position: 'absolute',
              height: (670 / 375) * width * 0.12,
              zIndex: 0,
              width: (59 * width) / 375,
              left: '40%',
              bottom: 135,
            },
          ]}
          resizeMode="contain"
          resizeMethod="scale"
          source={require('../../../assets/anal3.png')}
        />
      </Animated.View>

      <Image
        source={require('../../../assets/bottom2.png')}
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
    zIndex: 3,
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
    left: 0,
    width: (51 * width) / 375,
    bottom: 0,
  },
});
