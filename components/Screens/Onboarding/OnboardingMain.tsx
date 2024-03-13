import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
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

import NavbarButton from '../../ui/NavbarButton';
import NavBarIcon1 from '../../../assets/icons/NavBarIcon1';
import NavBarIcon2 from '../../../assets/icons/NavBarIcon2';
import NavBarIcon3 from '../../../assets/icons/NavBarIcon3';
import NavBarIcon4 from '../../../assets/icons/NavBarIcon4';
import NavBarIcon5 from '../../../assets/icons/NavBarIcon5';
import NavBarIcon6 from '../../../assets/icons/NavBarIcon6';
import NavBarIcon7 from '../../../assets/icons/NavBarIcon7';
import MyStatusBar from '../../MyStatusBar';

const Data2 = [
  {
    icon: NavBarIcon1,
    text: 'Saleads',
  },
  {
    icon: NavBarIcon2,
    text: 'Инструменты',
  },
  {
    icon: NavBarIcon3,
    text: 'Кабинет',
  },
  {
    icon: NavBarIcon4,
    text: 'Выплаты',
  },
  {
    icon: NavBarIcon5,
    text: 'Техроддержка',
  },

  {
    icon: NavBarIcon6,
    text: 'Офферы',
  },
  {
    icon: NavBarIcon7,
    text: 'Вход',
  },
];
const Data = [
  {Item: WelcomeScreen1},
  {Item: WelcomeScreen2},
  {Item: WelcomeScreen3},
  {Item: WelcomeScreen4},
  {Item: WelcomeScreen5},
  {Item: WelcomeScreen6},
  {Item: WelcomeScreen7},
];
const OnboardingMain: FC<ScreenProps> = () => {
  const ref = useRef<ScrollView>(null);
  const refScroll = useRef<Animated.ScrollView>(null);
  const [pagination, setPagination] = useState(0);

  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const scrollHandler2 = (event: any) => {
    const {contentOffset} = event.nativeEvent;

    let currentIndex = contentOffset.x / width;
    const remainder = currentIndex % 1;
    if (remainder > 0.8) {
      setPagination(Math.ceil(currentIndex));
    } else {
      setPagination(Math.floor(currentIndex));
    }
  };

  function scrollToIndex(item: {index: number}): void {
    refScroll.current?.scrollTo({x: item.index * width, y: 0, animated: true});
    setPagination(item.index);
  }

  useEffect(() => {
    ref.current?.scrollTo({x: pagination * 94, y: 0, animated: true});
  }, [pagination]);

  return (
    <View style={{flex: 1}}>
      <MyStatusBar barStyleT="light-content" colorStatus="#143976" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profileStyle}
          onPress={() => {
            refScroll.current?.scrollToEnd();
            setPagination(6);
          }}>
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
          ref={refScroll}
          onScroll={scrollHandler}
          onMomentumScrollEnd={scrollHandler2}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}>
          {Data.map((item, index) => (
            <item.Item
              key={index}
              animValue={translateX}
              index={index}
              pagination={pagination}
            />
          ))}
        </Animated.ScrollView>

        <View style={styles.navbarBottom}>
          <ScrollView
            ref={ref}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.contentContainer}>
            {Data2.map((item, index) => (
              <NavbarButton
                value={item.text}
                style={[
                  pagination === index
                    ? styles.paginationStyleItemActive
                    : styles.paginationStyleItemInactive,
                ]}
                icon={<item.icon />}
                key={index}
                onPress={() => {
                  scrollToIndex({index});
                }}
              />
            ))}
          </ScrollView>
        </View>
      </View>
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
  navbarBottom: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  paginationStyleItemActive: {
    backgroundColor: 'rgba(79, 199, 98, 1)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(156, 248, 123, 1)',
  },
  paginationStyleItemInactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.24)',
  },
});
