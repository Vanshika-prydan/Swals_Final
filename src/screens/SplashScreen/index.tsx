import React, { useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onLoginResponse } from '../../redux/actions/loginActions';
import styles from './style';
import Images from '../../utils/Images';

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state?.loginReducer?.isLoggedIn);
  useEffect(() => {
    const firstFunCall = async () => {
      var isLogIn = await AsyncStorage.getItem('UserDetails');
      const finalUserDetails = JSON.parse(isLogIn);
      if (finalUserDetails) {
        dispatch(onLoginResponse(finalUserDetails));
      }
    };
    firstFunCall();
  }, []);

  useEffect(() => {
    // const firstFuncCall = async () => {
    // console.log('isLogIn', isLogIn);
    // if (
    //   finalUserDetails &&
    //   finalUserDetails?.access_token &&
    //   finalUserDetails?.access_token !== '' &&
    //   finalUserDetails?.access_token !== null &&
    //   finalUserDetails?.user &&
    //   finalUserDetails?.user !== '' &&
    //   finalUserDetails?.user !== null
    // ) {
    // console.log(isLoggedIn);
    if (isLoggedIn) {
      navigation.navigate('AppNavigator');
    } else {
      navigation.navigate('AuthNavigator');
    }

    // } else {
    //   navigation.navigate('AuthNavigator');
    // }
    // };
    // firstFuncCall();
  }, [isLoggedIn]);

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.SplashBG} style={styles.splashBG}>
        <Image source={Images.loginLogo} style={styles.splashLogo} />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
