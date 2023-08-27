import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './product.style';
import useFetch from '../../hook/useFetch';
import {COLORS} from '../../assets/constants';
import ProductCardView from './ProductCardView';

const ProductList = () => {
  const {data, isLoading, error} = useFetch();
  return (
    <>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <ScrollView style={[styles.container, {marginBottom: 90}]}>
          <FlatList
            data={data}
            numColumns={2}
            contentContainerStyle={{
              marginLeft:10,
            }}
            ItemSeparatorComponent={() => <View style={styles.sep} />}
            renderItem={({item}) => <ProductCardView item={item} key={item._id} />}
          />
        </ScrollView>
      )}
    </>
  );
};

export default ProductList;
