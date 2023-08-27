import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './search.style';
import * as Icon from 'react-native-feather';
import axios from 'axios';
import SearchTile from '../components/products/SearchTile';

const Search = () => {
  const [searchKey, setSearchKey] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (txt) => {
    try {
      const res = await axios.get(
        `http://192.168.100.65:3000/api/products/search/${searchKey}`,
      );
      setSearchResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{paddingTop: 10}}>
      <View style={styles.searchContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
          <TouchableOpacity>
            <Icon.Camera
              style={{marginLeft: 12}}
              stroke="gray"
              fill="#fff"
              width={22}
              height={22}
            />
          </TouchableOpacity>
          <View>
            <TextInput
              style={{color: 'black'}}
              placeholder="What are you looking for?"
              placeholderTextColor="gray"
              onChangeText={txt => setSearchKey(txt)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.filterIconContainer}
          onPress={() => handleSearch()}>
          <Icon.Search stroke="white" width={22} height={22} />
        </TouchableOpacity>
      </View>
      {searchResults.length == 0 ? (
        <View style={{flex: 1}}>
          <Image
            source={require('../assets/images/Pose23.png')}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <View>
          <FlatList
            data={searchResults}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
            <SearchTile item={item} />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Search;
