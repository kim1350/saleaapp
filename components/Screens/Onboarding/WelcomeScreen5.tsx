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
const WelcomeScreen5: React.FC<{
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

  const transformY1 = new AnimatedRN.Value(-40);
  const transformY2 = new AnimatedRN.Value(-40);
  const transformY3 = new AnimatedRN.Value(-40);
  const opacity1 = new AnimatedRN.Value(0);
  const opacity2 = new AnimatedRN.Value(0);
  const opacity3 = new AnimatedRN.Value(0);
  useEffect(() => {
    if (pagination === index) {
      AnimatedRN.timing(transformY1, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        AnimatedRN.timing(transformY2, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          AnimatedRN.timing(transformY3, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        });
      });
      AnimatedRN.timing(opacity1, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        AnimatedRN.timing(opacity2, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          AnimatedRN.timing(opacity3, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        });
      });
    } else {
      transformY1.setValue(-40);
      transformY2.setValue(-40);
      transformY3.setValue(-40);
    }
  }, [pagination]);
  return (
    <ImageBackground
      source={require('../../../assets/welcome5.png')}
      imageStyle={styles.backgroundImageContainer}
      style={styles.child}>
      <Animated.View style={[styles.textContainer, rStyle]}>
        <Text style={stylesConst.text_title_32_e}>
          Быстрая{'\n'}техподдержка
        </Text>
        <Text style={stylesConst.text_14_r}>
          оперативно решит любую вашу ситуацию, связанную с работой в
          Saleads.pro и найдет решение
        </Text>
      </Animated.View>

      <AnimatedRN.View
        style={[
          styles.container1,
          {
            transform: [
              {
                translateY: transformY1,
              },
            ],
            opacity: opacity1,
          },
        ]}>
        <Text style={stylesConst.text_11_b_2}>Команда Saleads</Text>
        <Text style={stylesConst.text_13_r_2}>
          Доброго дня! Чем я могу{'\n'}помочь?
        </Text>
        <Text style={stylesConst.text_10_r_2}>1 мин</Text>
      </AnimatedRN.View>

      <AnimatedRN.View
        style={[
          styles.container2,
          {
            transform: [
              {
                translateY: transformY2,
              },
            ],
            opacity: opacity2,
          },
        ]}>
        <Text style={stylesConst.text_11_b_2}>Команда Saleads</Text>
        <Text style={stylesConst.text_13_r_2}>
          Я запросил выплату.{'\n'}Как скоро я получу деньги?
        </Text>
        <Text style={stylesConst.text_10_r_2}>1 мин</Text>
      </AnimatedRN.View>

      <AnimatedRN.View
        style={[
          styles.container3,
          {
            transform: [
              {
                translateY: transformY3,
              },
            ],
            opacity: opacity3,
          },
        ]}>
        <Text style={stylesConst.text_11_b_2}>Команда Saleads</Text>
        <Text style={stylesConst.text_13_r_2}>В течение 1 дня!</Text>
        <Text style={stylesConst.text_10_r_2}>15 секунд</Text>
      </AnimatedRN.View>
      <Image
        source={require('../../../assets/bottom5.png')}
        style={{
          width: width,
          position: 'absolute',
          height: (670 / 375) * width,
          bottom: 0,
        }}
      />
    </ImageBackground>
  );
};
const {width} = Dimensions.get('window');
export default WelcomeScreen5;

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
  container1: {
    backgroundColor: 'rgba(146, 253, 119, 0.26)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.19)',
    paddingVertical: 34,
    paddingHorizontal: 21,
    gap: 12,
    left: 31,
    bottom: (294 * (670 / 375) * width) / 670 + 10,
    width: 214,
  },
  container2: {
    position: 'absolute',
    backgroundColor: 'rgba(152, 175, 255, 0.27)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.19)',
    paddingVertical: 34,
    paddingHorizontal: 21,
    gap: 12,
    right: 24,
    bottom: (196 * (670 / 375) * width) / 670 + 10,
  },
  container3: {
    position: 'absolute',
    backgroundColor: 'rgba(146, 253, 119, 0.26)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.19)',
    paddingVertical: 34,
    paddingHorizontal: 21,
    gap: 12,
    width: 214,
    left: 31,
    bottom: (122 * (670 / 375) * width) / 670 + 10,
  },
});
