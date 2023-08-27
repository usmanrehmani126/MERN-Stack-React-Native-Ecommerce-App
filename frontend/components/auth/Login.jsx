import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS} from '../../assets/constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Passwords must be at least 8 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const isValidForm = () => {
    Alert.alert('invalid Form', 'Please enter  data in all required fields', [
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
    ]);
  };
  const loginFunction = async values => {
    setIsLoading(true);
    try {
      const endpoint = 'http://192.168.100.65:3000/api/login';
      const data = values;
      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        setIsLoading(false);
        console.log(response.data);
      } else {
        Alert.alert('Error Logging in', 'Please provide valid credentials', [
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
        ]);
      }
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Error', 'Opps! please enter valid credentials');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          source={require('../../assets/images/bk.png')}
          style={{width: '100%', height: 400}}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={{position: 'absolute', top: 20, left: 15}}
          onPress={() => navigation.navigate('Profile')}>
          <Icon.ChevronLeft
            stroke="#7AA874"
            fill="#fff"
            width={26}
            height={32}
          />
        </TouchableOpacity>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => loginFunction(values)}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            setFieldTouched,
            touched,
          }) => (
            <View>
              <View style={{paddingLeft: 20, paddingRight: 20}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: '#7AA874',
                    marginTop: 2,
                  }}>
                  Unlimited Luxurious Products
                </Text>
                <View style={{marginTop: 12}}>
                  <View
                    style={{
                      backgroundColor: '#FAF3F0',
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                      borderRadius: 8,
                      borderColor: touched.email ? '#7AA874' : 'transparent',
                      borderWidth: 0.7,
                    }}>
                    <Icon.Mail
                      stroke="#7AA874"
                      width={22}
                      height={32}
                      style={{marginLeft: 12}}
                    />
                    <TextInput
                      style={{color: 'black'}}
                      placeholder="Enter Email"
                      placeholderTextColor="gray"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onFocus={() => setFieldTouched('email')}
                      onBlur={() => setFieldTouched('email', '')}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={{color: 'red'}}>{errors.email}</Text>
                  )}
                  <View
                    style={{
                      backgroundColor: '#FAF3F0',
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 10,
                      borderRadius: 8,
                      marginTop: 30,
                      borderColor: touched.password ? '#7AA874' : 'transparent',
                      borderWidth: 0.7,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon.Lock
                        stroke="#7AA874"
                        width={22}
                        height={32}
                        style={{marginLeft: 12}}
                      />
                      <TextInput
                        style={{color: 'black', marginLeft: 12}}
                        placeholder="Enter Password"
                        placeholderTextColor="gray"
                        onBlur={() => {
                          setFieldTouched('password', '');
                        }}
                        onFocus={() => {
                          setFieldTouched('password');
                        }}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={showPassword ? true : false}
                      />
                    </View>
                    {touched.password && errors.password && (
                      <Text
                        style={{
                          color: 'red',
                          position: 'absolute',
                          bottom: -22,
                        }}>
                        {errors.password}
                      </Text>
                    )}
                    <TouchableOpacity
                      style={{marginRight: 10}}
                      onPress={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <Icon.Eye
                          stroke="#7AA874"
                          width={22}
                          height={32}
                          style={{marginLeft: 12}}
                        />
                      ) : (
                        <Icon.EyeOff
                          stroke="#7AA874"
                          width={22}
                          height={32}
                          style={{marginLeft: 12}}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={isValid ? handleSubmit : isValidForm}
                    style={{
                      backgroundColor: '#7AA874',
                      width: '100%',
                      borderRadius: 8,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 30,
                      height: 50,
                    }}>
                    {isLoading ? (
                      <View>
                        <ActivityIndicator size="large" color="white" />
                      </View>
                    ) : (
                      <>
                        <Text
                          style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 16,
                          }}>
                          L O G I N
                        </Text>
                      </>
                    )}
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Text style={{fontSize: 16, color: '#080202'}}>
                    Don't have an Account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={{fontSize: 16, color: '#080202'}}>
                      {' '}
                      Register
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
// 3:46:36 / 4:19:43