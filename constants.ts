import {PixelRatio, StyleSheet} from 'react-native';

export const colors = {
  TEXT_TITLE: '#F5F7FF',
  WHITE: '#FFFFFF',
  INACTIVE_TEXT: '#A8C9F0',
  GREEN: '#5EC76F',
  BLACK: '#000000',
  INACTIVE_TEXT_2: '#767A98',
};

export const fonts = {
  100: 'Mulish-Thin',
  300: 'Mulish-Light',
  400: 'Mulish-Regular',
  500: 'Mulish-Medium',
  700: 'Mulish-Bold',
  800: 'Mulish-ExtraBold',
  900: 'Mulish-Black',
};

export const fonts2 = {
  100: 'Inter-Thin',
  300: 'Inter-Light',
  400: 'Inter-Regular',
  500: 'Inter-Medium',
  700: 'Inter-Bold',
  800: 'Inter-ExtraBold',
  900: 'Inter-Black',
};

export const normalize = (size: number): any => {
  return size / PixelRatio.getFontScale();
};

export const stylesConst = StyleSheet.create({
  shadow: {
    elevation: 1,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  text_title_32_e: {
    fontSize: normalize(32),
    fontFamily: fonts[800],
    color: colors.TEXT_TITLE,
    lineHeight: normalize(32),
  },
  text_14_r: {
    fontSize: normalize(14),
    fontFamily: fonts[500],
    color: colors.INACTIVE_TEXT,
    lineHeight: normalize(14),
  },
  text_14_e: {
    fontSize: normalize(14),
    fontFamily: fonts[800],
    color: colors.INACTIVE_TEXT,
    lineHeight: normalize(14),
  },
  text_12_r: {
    fontSize: normalize(12),
    fontFamily: fonts[500],
    color: colors.INACTIVE_TEXT,
    lineHeight: normalize(12),
  },
  text_12_e: {
    fontSize: normalize(12),
    fontFamily: fonts[800],
    color: colors.WHITE,
    lineHeight: normalize(12),
  },
  text_10_e: {
    fontSize: normalize(10),
    fontFamily: fonts[500],
    color: colors.WHITE,
    lineHeight: normalize(10),
  },
  text_10_b: {
    fontSize: normalize(10),
    fontFamily: fonts[900],
    color: colors.WHITE,
    lineHeight: normalize(10),
  },
  text_11_b: {
    fontSize: normalize(11),
    fontFamily: fonts[700],
    color: colors.TEXT_TITLE,
    lineHeight: normalize(11),
  },
  text_18_e: {
    fontSize: normalize(18),
    fontFamily: fonts[800],
    color: colors.TEXT_TITLE,
    lineHeight: normalize(18),
  },
  buttonVar2Style: {
    borderWidth: 1,
    zIndex: 4,
    borderColor: colors.WHITE,
  },
  buttonVar1Style: {
    zIndex: 4,
    backgroundColor: colors.GREEN,
  },
  text_13_r_2: {
    fontSize: normalize(13),
    fontFamily: fonts2[400],
    color: colors.WHITE,

    lineHeight: normalize(13),
  },
  text_11_b_2: {
    fontSize: normalize(11),
    fontFamily: fonts2[700],
    color: colors.WHITE,
    lineHeight: normalize(11),
  },
  text_9_r_2: {
    fontSize: normalize(9),
    fontFamily: fonts2[400],
    color: colors.INACTIVE_TEXT_2,
    lineHeight: normalize(9),
  },
  text_10_r_2: {
    fontSize: normalize(10),
    fontFamily: fonts2[400],
    color: colors.WHITE,
    lineHeight: normalize(10),
  },
  text_16_r_2: {
    fontSize: normalize(16),
    fontFamily: fonts2[700],
    color: colors.BLACK,
    lineHeight: normalize(16),
  },
});
