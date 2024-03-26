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
import Button from '../../ui/Button';
import CompanyIcon from '../../../assets/icons/CompanyIcon';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {verticalScale} from '../../../utils/Adaptive';
import {useNavigation} from '../../../hooks/hooks';

const WelcomeScreen7: React.FC<{
  animValue: SharedValue<number>;
  index: number;
}> = ({animValue, index}) => {
  const navigation = useNavigation();
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

  const onNavToSignin = () => {
    navigation.navigate('WebScreen', {type: 'signin'});
  };
  const onNavToRegistration = () => {
    navigation.navigate('WebScreen', {type: 'registartion'});
  };
  return (
    <ImageBackground
      source={require('../../../assets/welcome7.png')}
      imageStyle={styles.backgroundImageContainer}
      style={styles.child}>
      <Animated.View style={[styles.signinScreenContainer, rStyle]}>
        <CompanyIcon />
        <View style={{marginTop: verticalScale(63), gap: 16}}>
          <Text style={[stylesConst.text_title_32_e, {textAlign: 'center'}]}>
            Добро{'\n'}пожаловать в Saleads.pro
          </Text>
          <Text style={stylesConst.text_14_r}>
            Вы можете войти в личный кабинет
          </Text>
        </View>
      </Animated.View>
      <View style={styles.buttonsContainer}>
        <Button
          value="Войти"
          style={stylesConst.buttonVar1Style}
          onPress={onNavToSignin}
        />
        <Button
          value="Пройти регистрацию"
          style={stylesConst.buttonVar2Style}
          onPress={onNavToRegistration}
        />
      </View>
      <Image
        source={require('../../../assets/bottom7.png')}
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
export default WelcomeScreen7;

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
    position: 'absolute',
    paddingVertical: 10,
    bottom: verticalScale(132),
    gap: 8,
    zIndex: 9,
    width: '100%',
    paddingHorizontal: 32,
  },
  signinScreenContainer: {
    position: 'absolute',
    width: '100%',
    bottom: verticalScale(264),
    alignItems: 'center',
    gap: 16,
  },
});
