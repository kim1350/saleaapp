import {
  StyleSheet,
  Text,
  type TextStyle,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from 'react-native';
import React, {type FC, type ReactNode} from 'react';
import {stylesConst} from '../../constants';

type ButtonVariant = 'primary' | 'tertiary' | 'secondary' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  value: string;
  textStyle?: TextStyle;
  size?: ButtonSize;
  variant?: ButtonVariant;
  radius?: number;
  icon?: ReactNode;
}

const NavbarButton: FC<ButtonProps> = props => {
  const {disabled, style, value, textStyle, icon, ...rest} = props;
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.button, style, disabled && styles.disabled]}
      disabled={disabled}>
      {icon && <View style={styles.icon}>{icon}</View>}
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
    flexDirection: 'column',
    height: 90,
    width: 70,
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    ...stylesConst.text_11_b,
    textAlign: 'center',
  },
  icon: {
    marginBottom: 14,
  },
});

export default NavbarButton;
