import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {
  requestLogout,
  onLogoutResponse,
} from '../../redux/actions/logoutAction';
import {logOut} from '../../redux/actions/loginActions';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const logoutResponse = useSelector(
    state => state.logoutReducer.logoutResponse,
  );

  useEffect(() => {
    return navigation.addListener('focus', () => {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          dispatch(requestLogout());
        } else {
          Alert.alert('Please check your internet connection');
        }
      });
    });
  }, []);

  useEffect(() => {
    // console.log('logoutResponse :', JSON.stringify(logoutResponse));

    const updateLogout = async () => {
      if (
        logoutResponse &&
        Object.keys(logoutResponse).length !== 0 &&
        logoutResponse.hasOwnProperty('status')
      ) {
        if (logoutResponse.status === 200) {
          await AsyncStorage.setItem('UserDetails', '');
          Alert.alert('Success', logoutResponse.data.message);
          navigation.reset({
            index: 0,
            routes: [{name: 'AuthNavigator'}],
          });
          var setResponse = {};
          dispatch(onLogoutResponse(setResponse));
          dispatch(logOut());
        } else if (logoutResponse.status === 403) {
          await AsyncStorage.setItem('UserDetails', '');
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
          navigation.reset({
            index: 0,
            routes: [{name: 'AuthNavigator'}],
          });
        } else {
          if (logoutResponse.message) {
            Alert.alert('Error', logoutResponse.message);
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again');
          }
        }
      }
    };
    updateLogout();
  }, [logoutResponse]);

  return <View style={styles.container} />;
};

export default SplashScreen;
