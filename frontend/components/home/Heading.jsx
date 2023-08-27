import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './heading.style';
import * as Icon from 'react-native-feather';
import {COLORS} from '../../assets/constants';
import { useNavigation } from '@react-navigation/native';

const Heading = ({}) => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("NewRivals")}>
          <Icon.Grid
            stroke="green"
            fill="#fff"
            width={26}
            height={24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
