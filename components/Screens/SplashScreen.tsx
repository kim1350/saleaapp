import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Defs, RadialGradient, Rect, Stop, Svg} from 'react-native-svg';
import CompanyIcon from '../../assets/icons/CompanyIcon';
import {colors, normalize} from '../../constants';
import {scale} from '../../utils/Adaptive';
const win = Dimensions.get('window');

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Svg width={win.width + 10} height={win.height}>
        <Rect
          width={win.width + 10}
          height={win.height}
          fill="url(#paint0_radial_1_107)"
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_1_107"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(187.5 335.5) scale(618.5 345.659)">
            <Stop stopColor="#68CC19" />
            <Stop offset="1" stopColor="#0DA000" />
            <Stop offset="1" stopColor="#0DA000" />
          </RadialGradient>
        </Defs>
      </Svg>
      <CompanyIcon style={styles.companyLogo} />
      <Text style={styles.text}>Saleads.pro</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    bottom: scale(26),
    alignSelf: 'center',
    fontFamily: 'Mulish-Bold',
    fontSize: normalize(26),
    color: colors.WHITE,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  companyLogo: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
