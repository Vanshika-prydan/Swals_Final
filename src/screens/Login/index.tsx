import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  Modal,
  BackHandler,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {Input, Button, Spinner} from '../../components';
import {colors} from '../../constants';
import CodeScreen from '../CodeScreen';
import styles from './style';
import Images from '../../utils/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {requestLogin, onLoginResponse} from '../../redux/actions/loginActions';
import NetInfo from '@react-native-community/netinfo';
import {
  requestForgotPassword,
  onForgotPasswordResponse,
  requestOTP,
  requestPasswordReset,
  onRequestPasswordResetResponse,
  onRequestOTPResponse,
} from '../../redux/actions/forgotPasswordActions';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = React.useState();
  const [ShowForgotCode, setShowForgotCode] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confrimPassword, setconfrimPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [password, setPassword] = useState();
  const [spinner, setSpinner] = useState(false);
  const [showModalIndex, setShowModalIndex] = useState(0);

  const [codeOne, setCodeOne] = useState('');
  const [codeTwo, setCodeTwo] = useState('');
  const [codeThree, setCodeThree] = useState('');
  const [codeFour, setCodeFour] = useState('');
  const [otp, setOtp] = useState('');
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dispatch = useDispatch();

  const forgotPasswordResponse = useSelector(
    state => state.forgotPasswordReducer.forgotPasswordResponse,
  );

  const loginResponse = useSelector(state => state.loginReducer.loginResponse);

  const requestOTPResponse = useSelector(
    state => state.forgotPasswordReducer.requestOTPResponse,
  );
  const requestPasswordResetResponse = useSelector(
    state => state.forgotPasswordReducer.requestPasswordReset,
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
    const updateAfterLogin = async () => {
      if (
        Object.keys(loginResponse).length !== 0 &&
        loginResponse.hasOwnProperty('status')
      ) {
        if (loginResponse?.status === 200) {
          await AsyncStorage.setItem(
            'UserDetails',
            JSON.stringify(loginResponse?.data),
          );
          navigation.navigate('AppNavigator');
          setEmail('');
          setPassword('');
          var setResponse = {};
          dispatch(onLoginResponse(setResponse));
        } else {
          if (loginResponse.message) {
            Alert.alert('Error', loginResponse.message);
          }
        }
      }

      setSpinner(false);
    };
    updateAfterLogin();
  }, [loginResponse]);

  const validateRequest = () => {
    if (email === '' || !regex.test(email)) {
      Alert.alert('Error', 'Invalid email');
      return false;
    } else if (password === '' || password.length < 6) {
      Alert.alert('Error', 'Password must contain at least 6 characters.');
      return false;
    } else {
      return true;
    }
  };

  const onLoginSubmit = () => {
    if (validateRequest()) {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          // Dispatch login request
          dispatch(requestLogin(email, password));
        } else {
          Alert.alert('Error', 'Please check your internet connection.');
        }
      });
    }
  };

  useEffect(() => {
    const updateForgotPass = async () => {
      if (
        Object.keys(forgotPasswordResponse).length !== 0 &&
        forgotPasswordResponse.hasOwnProperty('status')
      ) {
        if (forgotPasswordResponse?.status === 200) {
          setShowForgotCode(false);
          if (forgotPasswordResponse?.data?.IsSusccess) {
            Alert.alert(
              'Success',
              forgotPasswordResponse.data.message,
              [
                {
                  text: 'OK',
                  onPress: () => {
                    setShowModalIndex(1);
                    setShowForgotCode(true);
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert(
              'Fail',
              forgotPasswordResponse.data.message,
              [
                {
                  text: 'OK',
                  onPress: () => {
                    setShowModalIndex(0);
                    setShowForgotCode(true);
                  },
                },
              ],
              {cancelable: false},
            );
          }

          var setResponse = {};
          dispatch(onForgotPasswordResponse(setResponse));
        } else {
          Alert.alert(
            'Fail',
            'Unfortunately, an error occurred resetting your password.',
          );
        }
        setSpinner(false);
      }
    };
    updateForgotPass();
  }, [forgotPasswordResponse]);

  const onForgotSubmit = () => {
    if (regex.test(forgotPasswordEmail.trim())) {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          // Dispatch forgot password request
          dispatch(requestForgotPassword(forgotPasswordEmail.trim()));
        } else {
          Alert.alert('Error', 'Please check your internet connection.');
        }
      });
    } else {
      Alert.alert('Error', 'Invalid email');
    }
  };

  useEffect(() => {
    const updateAfterOTP = async () => {
      if (
        Object.keys(requestOTPResponse).length !== 0 &&
        requestOTPResponse.hasOwnProperty('status')
      ) {
        setShowForgotCode(false);
        if (
          requestOTPResponse?.status === 200 &&
          requestOTPResponse?.data.status === 1
        ) {
          Alert.alert(
            'Success',
            requestOTPResponse.data.message,
            [
              {
                text: 'OK',
                onPress: () => {
                  setShowModalIndex(2);
                  setShowForgotCode(true);
                },
              },
            ],
            {cancelable: false},
          );
          var setResponse = {};
          dispatch(onRequestOTPResponse(setResponse));
        } else {
          Alert.alert(
            'Error',
            requestOTPResponse?.data?.message,
            [
              {
                text: 'OK',
                onPress: () => {
                  setShowModalIndex(1);
                  setShowForgotCode(true);
                },
              },
            ],
            {cancelable: false},
          );
        }
      }

      setSpinner(false);
    };
    updateAfterOTP();
  }, [requestOTPResponse]);

  const validateOTP = () => {
    if (
      codeOne !== '' &&
      codeOne !== null &&
      codeTwo !== '' &&
      codeTwo !== null &&
      codeThree !== '' &&
      codeThree !== null &&
      codeFour !== '' &&
      codeFour !== null
    ) {
      return true;
    } else {
      return false;
    }
  };

  const verifyOTP = () => {
    if (validateOTP()) {
      const finalOTP =
        codeOne.toString() +
        codeTwo.toString() +
        codeThree.toString() +
        codeFour.toString();
      setOtp(finalOTP);
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          // Dispatch forgot password request
          dispatch(requestOTP(forgotPasswordEmail, Number(finalOTP)));
        } else {
          Alert.alert('Error', 'Please check your internet connection.');
        }
      });
    } else {
      Alert.alert('Error', 'Please enter OTP');
    }
  };

  useEffect(() => {
    const updatePasswordReset = async () => {
      if (
        Object.keys(requestPasswordResetResponse).length !== 0 &&
        requestPasswordResetResponse.hasOwnProperty('status')
      ) {
        setShowForgotCode(false);
        if (
          requestPasswordResetResponse?.status === 200 &&
          requestPasswordResetResponse?.data.status === 1
        ) {
          Alert.alert(
            'Success',
            requestPasswordResetResponse.data.message,
            [
              {
                text: 'OK',
                onPress: () => {
                  setForgotPasswordEmail('');
                  setconfrimPassword('');
                  setNewPassword('');
                  setShowModalIndex(0);
                },
              },
            ],
            {cancelable: false},
          );
          var setResponse1 = {};
          dispatch(onRequestPasswordResetResponse(setResponse1));
        } else {
          Alert.alert(
            'Error',
            requestPasswordResetResponse?.data?.message,
            [
              {
                text: 'OK',
                onPress: () => {
                  setShowModalIndex(0);
                },
              },
            ],
            {cancelable: false},
          );
        }
        var setResponse1 = {};
        dispatch(onRequestPasswordResetResponse(setResponse1));
      }

      setSpinner(false);
    };
    updatePasswordReset();
  }, [requestPasswordResetResponse]);

  const updatePasswordRequest = () => {
    if (newPassword === '' || newPassword.length === 0) {
      Alert.alert('Error', 'Missing new password');
      return false;
    } else if (newPassword !== '' && newPassword.length < 6) {
      Alert.alert('Error', 'New password must be at least 6 characters');
      return false;
    } else if (confrimPassword === '' || confrimPassword.length === 0) {
      Alert.alert('Error', 'Missing confrim password');
      return false;
    } else if (confrimPassword !== '' && confrimPassword.length < 6) {
      Alert.alert('Error', 'Confirm password must be at least 6 characters');
      return false;
    } else if (confrimPassword !== newPassword) {
      Alert.alert('Error', 'Password does not match');
      return false;
    } else {
      return true;
    }
  };
  const onPasswordResetSubmit = () => {
    if (updatePasswordRequest()) {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestPasswordReset(newPassword, forgotPasswordEmail, otp));
        } else {
          Alert.alert('Error', 'Please check your internet connection.');
        }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {spinner ? ( */}
      <>
        <Spinner isLoading={spinner} color={colors.blue} />
        {/* ) : ( */}
        <View style={styles.mainContainer}>
          <View style={styles.userInputView}>
            <Image style={styles.image} source={Images.loginLogo} />
          </View>

          <View style={styles.userInputView}>
            <Text style={styles.text}>Email</Text>
            <View style={styles.mainView}>
              <Input
                onChangeText={setEmail}
                value={email}
                secureTextEntry={undefined}
              />
            </View>
            <Text style={styles.text}>Password</Text>
            <View style={styles.mainView}>
              <Input
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <View style={styles.submitBtnView}>
              <Button
                color={colors.white}
                buttonText={'LOGIN'}
                onPress={() => onLoginSubmit()}
              />
            </View>

            <View style={styles.centeredView}>
              <TouchableOpacity onPress={() => setShowForgotCode(true)}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centeredView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUpScreen');
                }}>
                <Text style={styles.forgotText}>
                  Don't have an account yet? SignUp
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centeredView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Services');
                }}>
                <Text style={styles.forgotText}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={ShowForgotCode}
              onRequestClose={() => {
                setShowModalIndex(0);
                setShowForgotCode(!ShowForgotCode);
              }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setShowModalIndex(0);
                  setShowForgotCode(!ShowForgotCode);
                }}>
                <View style={styles.centeredView123}>
                  <View style={styles.modalView}>
                    <View style={styles.lineView} />

                    {showModalIndex === 0 ? (
                      <View>
                        <Text style={styles.boxText}>Forget Password</Text>
                        <Text style={styles.BoxSmallText}>
                          Enter your email for the verification process,we will
                          send 4 digits code to your emails.
                        </Text>
                        <View style={styles.forgotDetailView}>
                          <Text style={styles.text}>Email</Text>
                          <Input
                            onChangeText={setForgotPasswordEmail}
                            value={forgotPasswordEmail.trim()}
                            secureTextEntry={false}
                          />
                          <Button
                            color={colors.white}
                            buttonText={'CONTINUE'}
                            onPress={() => onForgotSubmit()}
                          />
                        </View>
                      </View>
                    ) : showModalIndex === 1 ? (
                      <View>
                        <Text style={styles.boxText}>
                          Enter the 4 digits code
                        </Text>
                        <Text style={styles.BoxSmallText}>
                          Enter the 4 digits code that you received on your
                          email.
                        </Text>
                        <CodeScreen
                          setCodeOne={setCodeOne}
                          setCodeTwo={setCodeTwo}
                          setCodeThree={setCodeThree}
                          setCodeFour={setCodeFour}
                        />
                        <Button
                          color={colors.white}
                          buttonText={'CONTINUE'}
                          onPress={() => verifyOTP()}
                        />
                      </View>
                    ) : (
                      <View>
                        <Text style={styles.boxText}>Reset Password</Text>
                        <Text style={styles.BoxSmallText}>
                          Set the new password for your account so you can login
                          and access all the features.
                        </Text>
                        <View style={styles.forgotDetailView}>
                          <Text style={styles.text}>New Password</Text>
                          <Input
                            onChangeText={setNewPassword}
                            value={newPassword}
                            secureTextEntry={true}
                          />

                          <Text style={styles.text}>Confirm new Password</Text>
                          <Input
                            onChangeText={setconfrimPassword}
                            value={confrimPassword}
                            secureTextEntry={true}
                          />
                        </View>
                        <Button
                          color={colors.white}
                          buttonText={'RESET PASSWORD'}
                          onPress={() => onPasswordResetSubmit()}
                        />
                      </View>
                    )}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};
export default LoginScreen;
