import {PixelRatio, StyleSheet} from 'react-native';

export const colors = {
  TEXT_TITLE: '#F5F7FF',
  INACTIVE_TEXT: '#A8C9F0',
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
  },
  text_14_r: {
    fontSize: normalize(14),
    fontFamily: fonts[500],
    color: colors.INACTIVE_TEXT,
  },
  text_12_r: {
    fontSize: normalize(12),
    fontFamily: fonts[500],
    color: colors.INACTIVE_TEXT,
  },
  text_18_e: {
    fontSize: normalize(18),
    fontFamily: fonts[800],
    color: colors.TEXT_TITLE,
  },
});
