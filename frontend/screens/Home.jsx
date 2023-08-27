import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import styles from './home.styles';
import * as Icon from 'react-native-feather';
import Welcome from '../components/home/Welcome';
import Slider from '../components/home/Slider';
import Heading from '../components/home/Heading';
import ProductRow from '../components/products/ProductRow';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const [isDay, setIsDay] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={[styles.appTopBarWrapper]}>
      {/* Top Header Section */}
      <View style={styles.appBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Icon.User stroke={'#83829A'} width={26} height={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 85,
            height: 29,
            borderRadius: 50,
            borderWidth: 0.4,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 2,
            paddingRight: 2,
            borderColor: '#080202',
            backgroundColor: isDay ? 'black' : 'white',
            justifyContent: 'space-between',
          }}
          onPress={() => setIsDay(!isDay)}>
          {isDay ? (
            <>
              <View
                style={[
                  {
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    borderColor: 'black',
                    alignSelf: 'flex-start',
                    paddingBottom: 1,
                  },
                ]}>
                <Image
                  source={require('../assets/themes/day.webp')}
                  style={{
                    width: '85%',
                    height: '85%',
                    borderRadius: 50,
                    marginTop: 2,
                  }}
                />
              </View>
            </>
          ) : (
            <>
              <View
                style={[
                  {
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    borderColor: 'white',
                    alignSelf: 'flex-end',
                    alignContent: 'flex-end',
                    paddingBottom: 1,
                    position: 'absolute',
                    right: 0,
                  },
                ]}>
                <Image
                  source={require('../assets/themes/night.webp')}
                  style={{
                    width: '85%',
                    height: '85%',
                    borderRadius: 50,
                    marginTop: 2,
                  }}
                />
              </View>
            </>
          )}
        </TouchableOpacity>
        <View style={{ alignItems: 'flex-end' }}>
          <View style={styles.cartCount}>
            <Text style={styles.cartNo}>2</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon.ShoppingBag
              stroke="#000000"
              fill="#fff"
              width={26}
              height={24}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Top Header Section */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <Slider />
        <Heading />
        <ProductRow />
      </ScrollView>
    </View>
  );
};

export default Home;
