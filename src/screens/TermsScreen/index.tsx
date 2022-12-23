import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import styles from './style';
import {Spinner} from '../../components';
import {colors} from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {requestTerms, onTermsResponse} from '../../redux/actions/termsAction';
import {WebView} from 'react-native-webview';

const TermsScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState({});

  const termsResponse = useSelector(state => state.termsReducer.termsResponse);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setSpinner(true);
        dispatch(requestTerms());
      } else {
        setSpinner(false);
        Alert.alert('Please check your internet connection');
      }
    });
  }, []);

  useEffect(() => {
    const updateTerms = async () => {
      if (
        termsResponse &&
        Object.keys(termsResponse).length !== 0 &&
        termsResponse.hasOwnProperty('status')
      ) {
        if (termsResponse.status === 200) {
          setData(termsResponse?.data?.data);
          var setResponse = {};
          dispatch(onTermsResponse(setResponse));
          setSpinner(false);
        } else if (termsResponse?.status === 403) {
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
          navigation.navigate('Logout');
        } else {
          if (termsResponse.message) {
            Alert.alert('Error', termsResponse.message);
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again');
          }
        }
      }
    };
    updateTerms();
  }, [termsResponse]);

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Spinner isLoading={spinner} color={colors.blue} />
        <View style={styles.container}>
          <View style={styles.menuView}>
            <Entypo
              name="menu"
              size={35}
              color={colors.black}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
            <View style={styles.titleView}>
              <Text style={styles.headerTextDash}>Terms & Conditions</Text>
            </View>
          </View>
          <View style={styles.container}>
            {Object.keys(data).length !== 0 ? (
              <WebView
                originWhitelist={['*']}
                source={{html: data?.text}}
                style={{backgroundColor: 'transparent'}}
              />
            ) : (
              <View style={styles.nodataView}>
                <Text style={styles.nodata}>No data found</Text>
              </View>
            )}
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};
export default TermsScreen;
