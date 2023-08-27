import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './profile.style';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import {COLORS} from '../assets/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const navigation = useNavigation();

  const logout = () => {
    Alert.alert('Logout', 'are you sure you want to log out', [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('cancel');
        },
      },
      {
        text: 'Continue',
        onPress: () => {
          console.log('Continue');
        },
      },
      {
        defaultIndex: 1,
      },
    ]);
  };
  const clearCache = () => { 
    Alert.alert(
      'Logout',
      'are you sure you want to delete all the data on your device',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('cancel');
          },
        },
        {
          text: 'Continue',
          onPress: () => {
            console.log('Continue');
          },
        },
        {
          defaultIndex: 1,
        },
      ],
    );
  };
  const DeleteAccount = () => {
    Alert.alert(
      'Delete Account ',
      'are you sure you want to delete this account',
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('cancel');
          },
        },
        {
          text: 'Continue',
          onPress: () => {
            console.log('Continue');
          },
        },
        {
          defaultIndex: 1,
        },
      ],
    );
  };
  // useEffect(() => {
  //   checkExistingUser();
  // });
  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id');
    const useId = `user${JSON.parse(id)}`;
    try {
      const currentUser = await AsyncStorage.getItem(useId);
      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Image
        source={require('../assets/images/space.jpg')}
        style={{height: 250, width: '100%'}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -60,
        }}>
        <Image
          source={require('../assets/images/profile.jpeg')}
          style={{width: 120, height: 120, borderRadius: 60}}
        />
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 20,
          left: 15,
        }}
        onPress={() => navigation.goBack()}>
        <Icon.ChevronLeft stroke="white" width={30} height={32} />
      </TouchableOpacity>
      <View style={{paddingLeft: 12, paddingRight: 12, marginTop: 20}}>
        <View>
          {userLogin === false ? (
            <>
              <Text style={style.name}>Please login into your account</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}
                style={{
                  backgroundColor: '#7AA874',
                  borderRadius: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                }}>
                <Text style={{color: 'white'}}>Login</Text>
              </TouchableOpacity>
            </>
          ) : (
            <View style={style.menuWrapper}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Favourities');
                }}>
                <View style={style.menuItem(0.3)}>
                  <Icon.Heart stroke={COLORS.primary} width={26} />
                  <Text style={style.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={style.menuItem(0.3)}>
                  <Icon.Truck stroke={COLORS.primary} width={26} />
                  <Text style={style.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Cart');
                }}>
                <View style={style.menuItem(0.3)}>
                  <Icon.ShoppingBag stroke={COLORS.primary} width={26} />
                  <Text style={style.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  clearCache();
                }}>
                <View style={style.menuItem(0.3)}>
                  <Icon.Crosshair stroke={COLORS.primary} width={26} />
                  <Text style={style.menuText}>Cache</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  DeleteAccount();
                }}>
                <View style={style.menuItem(0.3)}>
                  <Icon.Delete stroke={COLORS.primary} width={26} />
                  <Text style={style.menuText}>Delete Account</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => logout()}>
                <View style={style.menuItem(0.3)}>
                  <Icon.LogOut stroke={COLORS.primary} width={26} />
                  <Text style={style.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
