import {Image, Text, TouchableOpacity, View, Pressable} from 'react-native';
import React from 'react';
import styles from './productCardView.style';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
const ProductCardView = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{marginLeft: 3}}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          item,
        })
      }>
      <View style={styles.container}>
        <Image
          source={{uri: item?.imageUrl}}
          style={{
            width: 170,
            height: 130,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 5,
          }}
          resizeMode="contain"
        />
        <View style={styles.details}>
          <Text style={styles.textTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            {item?.supplier}
          </Text>
          <Text style={styles.price}>{item?.price}</Text>
          <TouchableOpacity style={styles.adddBtn}>
            <Icon.PlusCircle stroke="white" width={16} height={16} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
