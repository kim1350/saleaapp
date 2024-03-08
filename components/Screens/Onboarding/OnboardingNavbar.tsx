import React from 'react';
import {
  I18nManager,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {horizontal, vertical} from 'react-native-swiper-flatlist/src/themes';

interface NavBarType {
  size: number;
  paginationIndex: number;
  scrollToIndex: (item: {index: number}) => void;
  onPaginationSelectedIndex: (() => void) | undefined;
}

export const OnboardingNavbar: React.FC<NavBarType> = ({
  size,
  paginationIndex = 0,
  scrollToIndex,
  onPaginationSelectedIndex,
}) => {
  return (
    <View>
      <ScrollView>
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
      </ScrollView>
    </View>
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
});
