import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AutoTypingText from 'react-native-auto-typing-text';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={require('../assets/images/splash.jpg')}
      />
      <View style={{position: 'absolute', bottom: 20}}>
        <Text
          style={{
            fontSize: 50,
            color: '#FFFFF7',
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          TAKE YOUR STYLE EVERYWHERE WITH US.
        </Text>

        <AutoTypingText
          text={`The Products that are waiting for you.`}
          charMovingTime={100}
          delay={2}
          style={{
            alignSelf: 'center',
            fontSize: 20,
            color: 'black',
          }}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
