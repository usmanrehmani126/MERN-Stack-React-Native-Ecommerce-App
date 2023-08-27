import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import ProductDetails from '../screens/ProductDetails';
import NewRivals from '../screens/NewRivals';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Order from '../screens/Order';
import Favourities from '../screens/Favourities';
import Cart from '../screens/Cart';
const Stack = createNativeStackNavigator();
import {Provider} from 'react-redux';
import store from '../redux/store/store';
const AppRouteNavigation = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="NewRivals" component={NewRivals} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Favourities" component={Favourities} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default AppRouteNavigation;
