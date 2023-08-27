import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../assets/constants';
import Swiper from 'react-native-swiper';
const Slider = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper style={{height: 200}} autoplay>
        <View>
          <Image
            source={require('../../assets/bannerImages/banner1.jpg')}
            style={{width: '100%', height: 200, borderRadius: 10}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Image
            source={require('../../assets/bannerImages/banner2.jpg')}
            style={{width: '100%', height: 200, borderRadius: 10}}
            resizeMode="contain"
          />
        </View>

        <View>
          <Image
            source={require('../../assets/images/fn5.jpg')}
            style={{width: '100%', height: 200, borderRadius: 10}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Image
            source={require('../../assets/images/fn1.jpg')}
            style={{width: '100%', height: 200, borderRadius: 10}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Image
            source={require('../../assets/images/fn3.jpg')}
            style={{width: '100%', height: 200, borderRadius: 10}}
            resizeMode="contain"
          />
        </View>
      </Swiper>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    alignItems: 'center',
    marginTop: 12,
  },
});
