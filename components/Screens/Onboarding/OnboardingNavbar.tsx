import React, {useEffect, useRef} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import NavBarIcon1 from '../../../assets/icons/NavBarIcon1';
import NavBarIcon3 from '../../../assets/icons/NavBarIcon3';
import NavBarIcon2 from '../../../assets/icons/NavBarIcon2';
import NavBarIcon4 from '../../../assets/icons/NavBarIcon4';
import NavBarIcon5 from '../../../assets/icons/NavBarIcon5';
import NavBarIcon6 from '../../../assets/icons/NavBarIcon6';
import NavBarIcon7 from '../../../assets/icons/NavBarIcon7';
import NavbarButton from '../../ui/NavbarButton';
interface NavBarType {
  paginationIndex: number;
  scrollToIndex: (item: {index: number}) => void;
}

const Data = [
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

export const OnboardingNavbar: React.FC<NavBarType> = ({
  paginationIndex = 0,
  scrollToIndex,
}) => {
  const ref = useRef<ScrollView>(null);
  useEffect(() => {
    ref.current?.scrollTo({x: 94 * paginationIndex, animated: true});
  }, [paginationIndex]);

  return (
    <ScrollView
      ref={ref}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.contentContainer}>
      {Data.map((item, index) => (
        <NavbarButton
          value={item.text}
          style={[
            paginationIndex === index
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
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
