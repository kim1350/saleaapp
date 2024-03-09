import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors, stylesConst} from '../../../constants';
import Button from '../../ui/Button';
import CompanyIcon from '../../../assets/icons/CompanyIcon';

const WelcomeScreen7 = () => {
  return (
    <ImageBackground
      source={require('../../../assets/welcome7.png')}
      imageStyle={styles.backgroundImageContainer}
      style={styles.child}>
      <View style={styles.signinScreenContainer}>
        <CompanyIcon />
        <View style={{marginTop: 63}}>
          <Text style={[stylesConst.text_title_32_e, {textAlign: 'center'}]}>
            Добро{'\n'}пожаловать в Saleads.pro
          </Text>
          <Text style={stylesConst.text_14_r}>
            Вы можете войти в личный кабинет
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button value="Войти" style={stylesConst.buttonVar1Style} />
          <Button
            value="Пройти регистрацию"
            style={stylesConst.buttonVar2Style}
          />
        </View>
      </View>
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
