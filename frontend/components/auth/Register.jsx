import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS} from '../../assets/constants';

validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Passwords must be at least 8 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  name: Yup.string().min(3, 'Invalid name').required('Required'),
  location: Yup.string()
    .min(4, 'Invalid Location address')
    .required('Required'),
});
const Register = () => {
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
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={require('../../assets/images/bk.png')}
        style={{width: '100%', height: 330}}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={{position: 'absolute', top: 20, left: 15}}
        onPress={() => navigation.navigate('Profile')}>
        <Icon.ChevronLeft stroke="#7AA874" fill="#fff" width={26} height={32} />
      </TouchableOpacity>
      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 25,
            color: '#7AA874',
            marginTop: 2,
            alignSelf: 'center',
          }}>
          Sign up and start shopping
        </Text>
        <Formik
          initialValues={{email: '', password: '', location: '', name: ''}}
          onSubmit={values => console.log(values)}
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
              <View style={{marginTop: 12}}>
                <View
                  style={{
                    backgroundColor: '#FAF3F0',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    borderRadius: 8,
                  }}>
                  <Icon.User
                    stroke="#7AA874"
                    width={22}
                    height={32}
                    style={{marginLeft: 12}}
                  />
                  <TextInput
                    placeholder="Enter Name "
                    placeholderTextColor="gray"
                    style={{color: 'black'}}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#FAF3F0',
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    borderRadius: 8,
                    marginTop: 30,
                  }}>
                  <Icon.MapPin
                    stroke="#7AA874"
                    width={22}
                    height={32}
                    style={{marginLeft: 12}}
                  />
                  <TextInput
                    placeholder="Enter Location "
                    placeholderTextColor="gray"
                    style={{color: 'black'}}
                  />
                </View>
                {touched.location && errors.location && (
                  <Text style={{color: 'red'}}>{errors.location}</Text>
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
                  }}>
                  <Icon.Mail
                    stroke="#7AA874"
                    width={22}
                    height={32}
                    style={{marginLeft: 12}}
                  />
                  <TextInput
                    placeholder="Enter Email"
                    placeholderTextColor="gray"
                    style={{color: 'black'}}
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
                {touched.password && errors.password && (
                  <Text style={{color: 'red'}}>{errors.password}</Text>
                )}
                <TouchableOpacity
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
                  <Text
                    style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                    R E G I S T E R
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontSize: 16, color: '#080202'}}>
            Already have an Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{fontSize: 16, color: '#080202'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
