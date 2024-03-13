import {StyleProp, ViewStyle} from 'react-native';

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  rotate?: number;
  filled?: boolean;
  style?: StyleProp<ViewStyle>;
}
