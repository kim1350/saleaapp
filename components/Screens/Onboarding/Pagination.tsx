import * as React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../constants';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
const win = Dimensions.get('window');
export const Pagination: React.FC<{
  index: number;
  length: number;
  animValue: SharedValue<number>;
}> = props => {
  const {animValue, index, length} = props;
  const width = (win.width - 4 * length - 100) / length;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [
      (index - 1) * win.width,
      index * win.width,
      (index + 1) * win.width,
    ];
    let outputRange = [-width, 0, width];

    return {
      transform: [
        {
          translateX: interpolate(
            animValue.value,
            inputRange,
            outputRange,
            'clamp',
          ),
        },
      ],
    };
  }, [animValue, index, length]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animContainer, animStyle, {width}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.24)',
    height: 4,
    borderRadius: 40,
    overflow: 'hidden',
  },
  animContainer: {
    borderRadius: 40,
    flex: 1,
    backgroundColor: colors.GREEN,
  },
});
