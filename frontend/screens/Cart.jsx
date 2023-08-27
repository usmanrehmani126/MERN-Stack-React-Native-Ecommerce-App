import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {COLORS, SIZES} from '../assets/constants';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const Cart = () => {
  const navigation = useNavigation();
  const item = useSelector(state => state.cart);
  console.log('Cart data', item);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.ChevronLeft stroke="black" width={30} height={30} />
        </TouchableOpacity>
        <Text style={styles.heading}>CART</Text>
      </View>
      {item.length > 0 ? (
         <View style={styles.cartWrapper}>
         <FlatList
           data={item}
           style={{marginBottom: 270}}
           renderItem={({}) => {
             return (
               <View style={styles.cartChildrenWapper}>
                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
                   <Image
                     source={{
                       uri: 'https://usmandotdev.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecom.272a2424.png&w=1920&q=75',
                     }}
                     style={{width: 70, height: 70, borderRadius: 8,marginRight:8}}
                   />
                   <View>
                     <Text
                       style={{
                         color: COLORS.primary,
                         fontWeight: 'bold',
                         fontSize: 18,
                         marginBottom: 4,
                       }}>
                       Hji Usman Pic
                     </Text>
                     <Text
                       style={{color: 'gray', fontWeight: '500', fontSize: 16}}>
                       $99.99
                     </Text>
                   </View>
                 </View>
                 <TouchableOpacity>
                   <Icon.Delete stroke="red" width={30} height={30} />
                 </TouchableOpacity>
               </View>
             );
           }}
         />
       </View>
      ) : (
        <>
          <Text
            style={{
              color: 'red',
              fontSize: 22,
              textAlign: 'center',
              marginTop: 50,
            }}>
            Nothing in the cart
          </Text>
        </>
      )}
      <View style={styles.orderModal}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            paddingTop: 6,
            fontWeight: 'bold',
          }}>
          Order Info
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 6,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>SubTotal</Text>
          <Text style={{color: 'white'}}>$ 2000.00</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 6,
          }}>
          <Text style={{color: 'white', fontSize: 18}}>Total</Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            $ 3000.00
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: '100%',
            borderRadius: 8,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            height: 50,
          }}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Check Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  orderModal: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    height: 200,
    width: '100%',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  upperRow: {
    marginHorizontal: SIZES.large,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  heading: {
    color: 'black',
    fontWeight: '600',
    marginLeft: 110,
    fontSize: 17,
  },
  cartWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 6,
  },
  cartChildrenWapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 12,
    height: 90,
    marginBottom: 8,
  },
});
