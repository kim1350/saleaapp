/* eslint-disable react-hooks/exhaustive-deps */
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Animated as AnimatedRN,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors, stylesConst} from '../../../constants';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {calculate} from '../../../functions';
import {verticalScale} from '../../../utils/Adaptive';

const WelcomeScreen4: React.FC<{
  animValue: SharedValue<number>;
  index: number;
  pagination: number;
}> = ({animValue, index, pagination}) => {
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

  const opacityImage = new AnimatedRN.Value(0);

  useEffect(() => {
    if (pagination === index) {
      AnimatedRN.timing(opacityImage, {
        toValue: 1,
        duration: 180,
        useNativeDriver: true,
      }).start();
    } else {
      opacityImage.setValue(0);
    }
  }, [pagination]);

  return (
    <ImageBackground
      source={require('../../../assets/welcome4.png')}
      imageStyle={styles.backgroundImageContainer}
      style={styles.child}>
      <Animated.View style={[styles.textContainer, rStyle]}>
        <Text style={stylesConst.text_title_32_e}>
          Моментальные{'\n'}выплаты
        </Text>
        <Text style={stylesConst.text_14_r}>
          на платежные реквизиты самозанятого, юр.лицо или рекламные кабинеты в
          течение 1-2 рабочих дней
        </Text>
      </Animated.View>

      <AnimatedRN.Image
        style={[
          {
            maxHeight: verticalScale(156),
            position: 'absolute',
            height: calculate(196, 156).height,
            zIndex: 3,
            width: calculate(196, 156).width,
            left: 26,
            bottom: 245,
            opacity: opacityImage,
          },
        ]}
        resizeMode="contain"
        source={require('../../../assets/messageMoney.png')}
      />
      <Image
        style={[
          {
            position: 'absolute',
            height: calculate(155, 320).height,
            zIndex: 1,
            width: calculate(155, 320).width,
            right: 0,
            bottom: 177,
            maxHeight: verticalScale(320),
          },
        ]}
        resizeMode="contain"
        source={require('../../../assets/money.png')}
      />
      <Image
        source={require('../../../assets/bottom4_2.png')}
        style={{
          width: width,
          position: 'absolute',
          height: (670 / 375) * width,
          bottom: 0,
          zIndex: 0,
        }}
      />
      <Image
        source={require('../../../assets/bottom4.png')}
        style={{
          width: width,
          position: 'absolute',
          height: (670 / 375) * width,
          bottom: 0,
          zIndex: 1,
        }}
      />
    </ImageBackground>
  );
};
const {width} = Dimensions.get('window');
export default WelcomeScreen4;

const styles = StyleSheet.create({
  container: {flex: 1},
  child: {width},
  text: {fontSize: 32, textAlign: 'left'},
  paginationStyle: {
    paddingLeft: 28,
    paddingRight: 72,
    flex: 1,
    gap: 4,
    top: 26,

    flexDirection: 'row',
    position: 'absolute',
    zIndex: 2,
  },
  paginationStyleItem: {
    height: 4,
    flex: 1,
  },
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
});
