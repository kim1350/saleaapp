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
import {verticalScale} from '../../../utils/Adaptive';
import {calculate} from '../../../functions';

const WelcomeScreen6: React.FC<{
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

  const transformY1 = new AnimatedRN.Value(0);

  useEffect(() => {
    if (pagination === index) {
      AnimatedRN.timing(transformY1, {
        toValue: -60,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        AnimatedRN.timing(transformY1, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }).start();
      });
    } else {
      transformY1.setValue(0);
    }
  }, [pagination]);
  return (
    <ImageBackground
      source={require('../../../assets/welcome6.png')}
      imageStyle={styles.backgroundImageContainer}
      style={styles.child}>
      <Animated.View style={[styles.textContainer, rStyle]}>
        <Text style={stylesConst.text_title_32_e}>Офферы</Text>
        <Text style={styles.text_14_margin}>
          Финансы (Займы/Кредиты/Карты), РКО, HR-работа, Онлайн курсы,
          Страхование, Инвестиции, Игры, Туризм, E-commerce
        </Text>

        <Text style={stylesConst.text_18_e}>Более 300</Text>
        <Text style={[stylesConst.text_12_r]}>офферов с нами работают</Text>
        <Text style={stylesConst.text_title_32_e}>7 стран</Text>
        <Text style={stylesConst.text_12_r}>
          Россия, Казахстан, Беларусь, Узбекистан, Шри-Ланка, Вьетнам, Филиппины
        </Text>
      </Animated.View>
      <Image
        style={[
          {
            maxHeight: verticalScale(224),
            position: 'absolute',
            height: calculate(268, 224).height,
            zIndex: 0,
            width: calculate(268, 224).width,
            alignSelf: 'center',
            bottom: 40,
          },
        ]}
        resizeMode="contain"
        source={require('../../../assets/cardRectangle3.png')}
      />
      <Image
        style={[
          {
            maxHeight: verticalScale(236),
            position: 'absolute',
            height: calculate(287, 236).height,
            zIndex: 0,
            width: calculate(287, 236).width,
            alignSelf: 'center',
            bottom: 20,
          },
        ]}
        resizeMode="contain"
        source={require('../../../assets/cardRectangle2.png')}
      />
      <AnimatedRN.Image
        style={[
          {
            maxHeight: verticalScale(223),
            position: 'absolute',
            height: calculate(313, 223).height,
            zIndex: 0,
            width: calculate(313, 223).width,
            alignSelf: 'center',
            bottom: 20,
            transform: [
              {
                translateY: transformY1,
              },
            ],
          },
        ]}
        resizeMode="contain"
        source={require('../../../assets/cardRectangle.png')}
      />
      <Image
        source={require('../../../assets/bottom6.png')}
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
export default WelcomeScreen6;

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
