import React from 'react';
import {I18nManager, ScrollView, StyleSheet, View} from 'react-native';
import {horizontal, vertical} from 'react-native-swiper-flatlist/src/themes';
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
  onPaginationSelectedIndex: (() => void) | undefined;
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
  onPaginationSelectedIndex,
}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{flexDirection: 'row', gap: 4}}>
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
            onPaginationSelectedIndex?.();
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

  paginationStyleItemActive: {},
  paginationStyleItemInactive: {},
});
