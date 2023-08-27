import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './product.style';
import * as Icon from 'react-native-feather';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SIZES} from '../assets/constants';

const ProductDetails = () => {
const route=useRoute()
const {item}=route.params
console.log(item)
  const [count, setcount] = useState(1);
  const [isRed, setIsRed] = useState(false);
  const navigation = useNavigation();
  const inc = () => {
    setcount(count + 1);
  };
  const dec = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{uri:item?.imageUrl}}
        style={{height: 300, width: '100%',marginTop:50,borderRadius:30}}
        resizeMode="contain"
      />
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.ChevronLeft width={28} height={28} stroke="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsRed(!isRed)}>
          <Icon.Heart
            width={23}
            height={23}
            stroke={isRed ? 'red' : 'gray'}
            fill={isRed ? 'red' : 'gray'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item?.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item?.price}</Text>
          </View>
        </View>
      </View>
      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          {[1, 2, 3, 4, 5].map((rating, index) => {
            return (
              <>
                <Icon.Star
                  key={index}
                  width={18}
                  height={18}
                  stroke={'gold'}
                  fill={'gold'}
                />
              </>
            );
          })}
          <Text style={styles.textRating}>(3.4)</Text>
        </View>
        <View style={styles.rating}>
          <TouchableOpacity style={{marginRight: 3}} onPress={inc}>
            <Icon.PlusCircle stroke="gray" width={20} height={20} />
          </TouchableOpacity>
          <Text style={styles.textRating}>{count}</Text>
          <TouchableOpacity style={{marginLeft: 3}} onPress={dec}>
            <Icon.MinusCircle stroke="gray" width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.decWrapper}>
        <Text style={styles.dec}>Description</Text>
        {/* <Text style={styles.descText}>
          The Arctis Pro headset features premium speaker drivers with
          high-density neodymium magnets that reproduce Hi-Res audio out to
          40,000 Hz, nearly double what most standard headsets are capable of
          (22,000 Hz).
        </Text> */}
        <Text style={styles.descText}>
        Revamp your living space with our sensational Sofa Sale! Discover the perfect blend of style, comfort, and affordability as you explore a curated selection of exquisite sofas. From sleek modern designs to timeless classics, our collection caters to every taste and preference. Elevate your relaxation and entertainment experience with a brand-new sofa from our sale – where comfort meets savings. Hurry, as this limited-time offer is your gateway to redefining your living room with sophistication and panache.
        </Text>
      </View> 
      <View style={{marginBottom: SIZES.small}}>
        <View style={styles.location}>
          <View style={{flexDirection: 'row',paddingLeft:12,paddingRight:12 }}>
          <Icon.MapPin stroke="black" width={20} height={20} />
          <Text style={{color:"black",marginLeft:6}}>{item?.product_location}</Text>
          </View>
          <View style={{flexDirection: 'row',paddingLeft:12,paddingRight:12 }}>
          <Icon.Truck  stroke="black" width={20} height={20} />
            <Text style={{color:"black",marginLeft:6}}>Free Delivery</Text>
          </View>
        </View>
      </View>
      <View style={styles.cartRow}>
         <TouchableOpacity style={styles.cartBtn  }>
          <Text style={styles.cartTitle}>Buy Now</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.addCart  }>
          <Text style={{fontSize:11,color:"white"}}>Add to Cart</Text>
          <Icon.ShoppingBag stroke="white" width={16} height={16}  />
         </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
