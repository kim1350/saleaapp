import {PaginationProps} from 'react-native-swiper-flatlist';
import React from 'react';
import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  colors,
  horizontal,
  vertical,
} from 'react-native-swiper-flatlist/src/themes';
import {OnboardingNavbar} from './OnboardingNavbar';

export const PaginationComponent: React.FC<PaginationProps> = ({
  size,
  paginationIndex = 0,
  scrollToIndex,
  paginationDefaultColor = colors.gray,
  paginationActiveColor = colors.white,
  paginationStyle = {},
  paginationStyleItem = {},
  paginationStyleItemActive = {},
  paginationStyleItemInactive = {},
  onPaginationSelectedIndex,
  paginationTapDisabled = false,
  e2eID = '',
}) => {
  return (
    <>
      <View style={[styles.container, paginationStyle]}>
        {Array.from({length: size}).map((_, index) => (
          <TouchableOpacity
            testID={`${e2eID}_pagination_${index}`}
            style={[
              styles.pagination,
              paginationStyleItem,
              paginationIndex === index
                ? {backgroundColor: paginationActiveColor}
                : {backgroundColor: paginationDefaultColor},
              paginationIndex === index
                ? paginationStyleItemActive
                : paginationStyleItemInactive,
            ]}
            key={index}
            onPress={() => {
              scrollToIndex({index});

              onPaginationSelectedIndex?.();
            }}
            disabled={paginationTapDisabled}
          />
        ))}
      </View>
      <View style={styles.navbarBottom}>
        <OnboardingNavbar
          scrollToIndex={scrollToIndex}
          paginationIndex={paginationIndex}
          onPaginationSelectedIndex={onPaginationSelectedIndex}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    marginVertical: vertical.xxSmall,
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 0,
    height: horizontal.small,
  },
  pagination: {
    width: horizontal.small,
    height: horizontal.small,
    borderRadius: 40,
  },
  navbarBottom: {
    position: 'absolute',
    bottom: 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
});
