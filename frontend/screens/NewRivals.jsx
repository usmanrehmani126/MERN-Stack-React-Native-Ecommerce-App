import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './newRivals.style';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';
import ProductList from '../components/products/ProductList';
const NewRivals = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon.ChevronLeft stroke="white" width={30} height={30} />
            </TouchableOpacity>
            <Text style={styles.heading}>Products</Text>
          </View>
          <ProductList />
        </View>
      </View>
  );
};
export default NewRivals;
