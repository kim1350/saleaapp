import {
  StyleSheet,
  Text,
  type TextStyle,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';
import React, {type FC} from 'react';
import {colors, stylesConst} from '../../constants';

interface ButtonProps extends TouchableOpacityProps {
  value: string;
  textStyle?: TextStyle;
  radius?: number;
}

const Button: FC<ButtonProps> = props => {
  const {
    disabled,
    style,
    value,
    textStyle,
    radius = 8,

    ...rest
  } = props;

  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.button,
        radius ? {borderRadius: radius} : {},
        radius ? {borderRadius: radius} : {},
        style,
        disabled && styles.disabled,
      ]}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]} numberOfLines={1}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 19,
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    ...stylesConst.text_14_e,
    textAlign: 'center',
    color: colors.WHITE,
  },
});

export default Button;
