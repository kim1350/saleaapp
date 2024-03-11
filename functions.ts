import {Dimensions} from 'react-native';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

export const calculate = (
  width: number,
  height: number,
): {width: number; height: number} => {
  return {
    width: (width * widthScreen) / 375,
    height: (((width * widthScreen) / 375) * height) / width,
  };
};
