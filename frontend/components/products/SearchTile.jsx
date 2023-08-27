import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './searchTile.style';
import {useNavigation} from '@react-navigation/native';
const SearchTile = ({item}) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <TouchableOpacity
        style={[styles.container, {backgroundColor: 'white'}]}
        onPress={() =>
          navigation.navigate('ProductDetails', {
            item,
          })
        }>
        <View style={styles.image}>
          <Image source={{uri: item?.imageUrl}} style={styles.productImage} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{item?.title}</Text>
          <Text style={styles.textSupplier}>{item?.supplier}</Text>
          <Text style={styles.textProductLocation}>
            Location:{item?.product_location}
          </Text>
        </View>
        <Text style={styles.textPrice}>{item?.price}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SearchTile;
