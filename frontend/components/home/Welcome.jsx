import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import styles from './welcome.style';
import * as Icon from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

const Welcome = ({}) => {
  const navigation = useNavigation();

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.welcomeText}>Find The Most</Text>
          <TouchableOpacity style={{marginRight: 12, marginTop: 14}}>
            <Icon.Menu stroke={'gray'} fill="#fff" width={22} height={22} />
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText1}>Luxurious Furniture</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
          <TouchableOpacity>
            <Icon.Search
              style={{marginLeft: 8}}
              stroke={'gray'}
              fill="#fff"
              width={22}
              height={22}
            />
          </TouchableOpacity>
          <View>
            <TextInput
              style={{color: 'black'}}
              placeholder="What are you looking for?"
              onPressIn={() => {
                navigation.navigate('Search');
              }}
              placeholderTextColor="gray"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.filterIconContainer}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-prjqf42Em-I4Lmn2ykOodNf_VO0yIfiELxDxBRzdLzlMUA4BmG1gQMAwvRR28gnyrw&usqp=CAU',
            }}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
