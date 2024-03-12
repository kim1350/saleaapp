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
import {calculate} from '../../../functions';
import {verticalScale} from '../../../utils/Adaptive';
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
            maxHeight: verticalScale(298),
            position: 'absolute',
            height: calculate(312, 298).height,
            zIndex: 3,
            width: calculate(312, 298).width,
            left: 56,
            bottom: 116,
          },
          rStyle,
        ]}>
        <Image
          style={{height: '100%', width: '100%'}}
          resizeMode="contain"
          source={require('../../../assets/anal2.png')}
        />
      </Animated.View>
      <Animated.View style={rStyle}>
        <Image
          style={[
            {
              maxHeight: verticalScale(59),
              position: 'absolute',
              height: calculate(59, 59).height,
              zIndex: 0,
              width: calculate(59, 59).width,
              left: '40%',
              bottom: 148,
            },
          ]}
          resizeMode="contain"
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
