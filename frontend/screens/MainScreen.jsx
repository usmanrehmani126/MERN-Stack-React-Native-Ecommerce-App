import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import * as Icon from 'react-native-feather';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const [isDay, setIsDay] = useState(true);
  const [selected, setSelected] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      {selected == 0 ? (
        <Home isDay={isDay} setIsDay={setIsDay} />
      ) : selected == 1 ? (
        <Search />
      ) : selected == 2 ? (
        <Profile />
      ) : null}
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => {
            setSelected(0);
          }}>
          <Icon.Home
            stroke={selected == 0 ? '#00C135' : '#83829A'}
            fill="#fff"
            width={selected == 0 ? 26 : 22}
            height={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(1);
          }}>
          <Icon.Search
            stroke={selected == 1 ? '#00C135' : '#83829A'}
            fill="#fff"
            width={selected == 1 ? 26 : 22}
            height={24}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(2);
          }}>
          <Icon.User
            stroke={selected == 2 ? '#00C135' : '#83829A'}
            fill="#fff"
            width={selected == 2 ? 26 : 22}
            height={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    position: 'absolute',
    bottom: -70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
  },
});
