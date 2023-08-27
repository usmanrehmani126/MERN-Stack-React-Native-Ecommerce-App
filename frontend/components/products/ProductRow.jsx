import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './product.style';
import {COLORS, SIZES} from '../../assets/constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';

const ProductRow = () => {
  const {data, isLoading, error} = useFetch();
  return (
    <View>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : error ? (
        <Text style={{color: 'black'}}>Something went wrong</Text>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{columnGap: SIZES.medium}}
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => <ProductCardView item={item} />}
        />
      )}
    </View>
  );
};

export default ProductRow;
