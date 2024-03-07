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
import {stylesConst} from '../../../constants';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const OnboardingMain = () => {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute'}}>
        <MyStatusBar barStyleT="dark-content" colorStatus="transparent" />
      </View>
      <SwiperFlatList
        renderAll={true}
        showPagination
        paginationStyle={styles.paginationStyle}
        paginationStyleItem={styles.paginationStyleItem}
        PaginationComponent={PaginationComponent}>
        <ImageBackground
          source={require('../../../assets/welcome1.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <View style={styles.textContainer}>
            <Text style={stylesConst.text_title_32_e}>
              Saleads.pro мультисервисная CPA сеть
            </Text>
            <Text style={[stylesConst.text_14_r, {marginBottom: 18}]}>
              широким выбором офферов, включающая в себя множество встроенных
              бесплатных сервисов и инструментов для работы с трафиком.
            </Text>

            <Text style={stylesConst.text_18_e}>
              Более{'\n'}
              <Text style={stylesConst.text_title_32_e}>50 000</Text>
            </Text>
            <Text style={[stylesConst.text_12_r]}>
              пользователей работают с нами
            </Text>
            <Text style={stylesConst.text_title_32_e}>22</Text>
            <Text style={stylesConst.text_12_r}>бесплатных инструмента</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/welcome2.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <View style={styles.textContainer}>
            <Text style={stylesConst.text_title_32_e}>
              Большой{'\n'}выбор{'\n'}инструментов
            </Text>
            <Text style={stylesConst.text_14_r}>
              за счет своих встроенных алгоритмов они увеличат ваш заработок
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/welcome3.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <View style={styles.textContainer}>
            <Text style={stylesConst.text_title_32_e}>
              Удобный{'\n'}личный{'\n'}кабинет
            </Text>
            <Text style={stylesConst.text_14_r}>
              с возможностью управления{'\n'}через бота в Telegram
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/welcome4.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <View style={styles.textContainer}>
            <Text style={stylesConst.text_title_32_e}>
              Моментальные{'\n'}выплаты
            </Text>
            <Text style={stylesConst.text_14_r}>
              на платежные реквизиты самозанятого, юр.лицо или рекламные
              кабинеты в течение 1-2 рабочих дней
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/welcome5.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <View style={styles.textContainer}>
            <Text style={stylesConst.text_title_32_e}>
              Быстрая{'\n'}техподдержка
            </Text>
            <Text style={stylesConst.text_14_r}>
              оперативно решит любую вашу ситуацию, связанную с работой в
              Saleads.pro и найдет решение
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/welcome6.png')}
          imageStyle={styles.backgroundImageContainer}
          style={styles.child}>
          <View style={styles.textContainer}>
            <Text style={stylesConst.text_title_32_e}>Офферы</Text>
            <Text style={[stylesConst.text_14_r, {marginBottom: 18}]}>
              Финансы (Займы/Кредиты/Карты), РКО, HR-работа, Онлайн курсы,
              Страхование, Инвестиции, Игры, Туризм, E-commerce
            </Text>

            <Text style={stylesConst.text_18_e}>Более 300</Text>
            <Text style={[stylesConst.text_12_r]}>офферов с нами работают</Text>
            <Text style={stylesConst.text_title_32_e}>7 стран</Text>
            <Text style={stylesConst.text_12_r}>
              Россия, Казахстан, Беларусь, Узбекистан, Шри-Ланка, Вьетнам,
              Филиппины
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          source={require('../../../assets/welcome7.png')}
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
  child: {width},
  text: {fontSize: 32, textAlign: 'left'},
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

  textContainer: {
    flex: 1,
    gap: 16,
    paddingTop: 88,
    paddingLeft: 34,
    paddingRight: 45,
  },
});
