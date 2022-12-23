import React, {useEffect, useState} from 'react';
import {
  View,
  Alert,
  Text,
  SafeAreaView,
  BackHandler,
  ScrollView,
  Keyboard,
} from 'react-native';
import {Input, Button, Spinner} from '../../components';
import {colors} from '../../constants';
import styles from './style';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch, useSelector} from 'react-redux';

import {
  requestSignUp,
  onSignUpResponse,
} from '../../redux/actions/signUpActions';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const [spinner, setSpinner] = useState(false);
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const signUpResponse = useSelector(
    state => state.signUpReducer.signUpResponse,
  );

  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    // console.log('signUpResponse : ', JSON.stringify(signUpResponse));

    const updateSignUp = async () => {
      if (
        signUpResponse &&
        Object.keys(signUpResponse).length !== 0 &&
        signUpResponse.hasOwnProperty('status')
      ) {
        if (signUpResponse.status === 201) {
          Alert.alert('Success', signUpResponse.data.message);
          navigation.navigate('Login');
          var setResponse = {};
          dispatch(onSignUpResponse(setResponse));
        } else {
          if (signUpResponse.message) {
            Alert.alert('Error', signUpResponse.message);
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again');
          }
        }
      } else {
        const updateSignUpResponse = JSON.parse(signUpResponse);
        if (updateSignUpResponse?.email) {
          Alert.alert(
            'Error',
            updateSignUpResponse?.email[0],
            [{text: 'OK', onPress: () => setSpinner(false)}],
            {cancelable: false},
          );
          var setResponse = {};
          dispatch(onSignUpResponse(setResponse));
        }
      }
      setSpinner(false);
    };
    updateSignUp();
  }, [signUpResponse]);

  const validateRequest = () => {
    if (Name === '') {
      Alert.alert('Error', 'Invalid Name');
      return false;
    }
    if (email === '' || !regex.test(email)) {
      Alert.alert('Error', 'Invalid email');
      return false;
    } else if (Password === '') {
      Alert.alert('Error', 'Missing password');
      return false;
    } else if (Password.length < 6) {
      Alert.alert('Error', 'Password must contain at least 6 characters.');
      return false;
    } else if (conformPassword === '') {
      Alert.alert('Error', 'Missing confirm password');
      return false;
    } else if (conformPassword.length < 6) {
      Alert.alert(
        'Error',
        'Confirm password must contain at least 6 characters.',
      );
      return false;
    } else if (conformPassword !== Password) {
      Alert.alert('Error', 'Password does not match');
      return false;
    } else {
      return true;
    }
  };

  const onSignUpSubmit = () => {
    Keyboard.dismiss();
    if (validateRequest()) {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestSignUp(Name, email, Password));
        } else {
          Alert.alert('Please check your internet connection');
        }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {spinner ? (
        <Spinner color={colors.blue} />
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>Create</Text>
              <Text style={styles.headerText}>Account</Text>
            </View>
            <View style={styles.userInputView}>
              <Text style={styles.text}>Full Name</Text>
              <View style={styles.mainView}>
                <Input
                  value={Name}
                  onChangeText={setName}
                  secureTextEntry={undefined}
                />
              </View>
              <Text style={styles.text}>Email</Text>
              <View style={styles.mainView}>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  secureTextEntry={undefined}
                />
              </View>
              <Text style={styles.text}>Password</Text>
              <View style={styles.mainView}>
                <Input
                  onChangeText={setPassword}
                  value={Password}
                  secureTextEntry={true}
                />
              </View>
              <Text style={styles.text}>Confirm Password</Text>
              <View style={styles.mainView}>
                <Input
                  onChangeText={setConformPassword}
                  value={conformPassword}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.submitBtnView}>
                <Button
                  color={colors.white}
                  buttonText={'SIGN UP'}
                  onPress={() => onSignUpSubmit()}
                />
              </View>
              <View style={styles.textView}>
                <Text style={styles.newPassword}>
                  Already have a Account?
                  <Text
                    style={styles.loginButton}
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    Login
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default SignUpScreen;
