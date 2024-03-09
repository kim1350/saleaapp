import {Dimensions, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {colors, stylesConst} from '../../../constants';
import ProfileIcon from '../../../assets/icons/ProfileIcon';

import {ScreenProps} from '../../../models/Navigation';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {Pagination} from './Pagination';
import WelcomeScreen1 from './WelcomeScreen1';
import WelcomeScreen2 from './WelcomeScreen2';
import WelcomeScreen7 from './WelcomeScreen7';
import WelcomeScreen6 from './WelcomeScreen6';
import WelcomeScreen5 from './WelcomeScreen5';
import WelcomeScreen4 from './WelcomeScreen4';
import WelcomeScreen3 from './WelcomeScreen3';

const OnboardingMain: FC<ScreenProps> = () => {
  const Data = [
    {Item: WelcomeScreen1},
    {Item: WelcomeScreen2},
    {Item: WelcomeScreen3},
    {Item: WelcomeScreen4},
    {Item: WelcomeScreen5},
    {Item: WelcomeScreen6},
    {Item: WelcomeScreen7},
  ];

  const translateX = useSharedValue(0);
  const scrolLHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileStyle}>
        <ProfileIcon />
      </TouchableOpacity>

      <View style={styles.paginationStyle}>
        {Array.from({length: 7}).map((_, index) => (
          <Pagination
            key={index}
            animValue={translateX}
            index={index}
            length={7}
          />
        ))}
      </View>

      <Animated.ScrollView
        onScroll={scrolLHandler}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {Data.map((item, index) => (
          <item.Item key={index} animValue={translateX} index={index} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default OnboardingMain;
const {width} = Dimensions.get('window');

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
