import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import MyStatusBar from '../../MyStatusBar';
import {PaginationComponent} from './PaginationComponent';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const OnboardingMain = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        showPagination
        paginationStyle={styles.paginationStyle}
        paginationStyleItem={styles.paginationStyleItem}
        PaginationComponent={PaginationComponent}>
        <MyStatusBar barStyleT="light-content" colorStatus={'transparent'} />
        <ImageBackground
          source={require('../../../assets/welcome1.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <Text style={styles.text}>1</Text>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/welcome1.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <Text style={styles.text}>1</Text>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/welcome1.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <Text style={styles.text}>1</Text>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/welcome1.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <Text style={styles.text}>1</Text>
        </ImageBackground>
      </SwiperFlatList>
    </View>
  );
};

export default OnboardingMain;
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
  paginationStyle: {
    paddingHorizontal: 28,
    flex: 1,
    gap: 4,

    top: STATUSBAR_HEIGHT,
    width: '100%',
  },
  paginationStyleItem: {
    height: 4,
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    resizeMode: 'stretch',
  },
});
