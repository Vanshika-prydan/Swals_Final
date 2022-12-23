import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignUpScreen} from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
  </Stack.Navigator>
);
export default AuthNavigator;
