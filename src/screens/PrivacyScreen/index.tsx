import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import styles from './style';
import {Spinner} from '../../components';
import {colors} from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {
  requestPrivacy,
  onPrivacyResponse,
} from '../../redux/actions/privacyAction';
import {WebView} from 'react-native-webview';

const PrivacyScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState([]);

  const privacyResponse = useSelector(
    state => state.privacyReducer.privacyResponse,
  );

  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setSpinner(true);
        dispatch(requestPrivacy());
      } else {
        setSpinner(false);
        Alert.alert('Please check your internet connection');
      }
    });
  }, []);

  useEffect(() => {
    const updatePrivacy = async () => {
      if (
        Object.keys(privacyResponse).length !== 0 &&
        privacyResponse.hasOwnProperty('status')
      ) {
        if (privacyResponse.status === 200) {
          setData(privacyResponse.data.data);
          var setResponse = {};
          dispatch(onPrivacyResponse(setResponse));
          setSpinner(false);
        } else if (privacyResponse?.status === 403) {
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
          navigation.navigate('Logout');
        } else {
          if (privacyResponse.message) {
            Alert.alert('Error', privacyResponse.message);
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again');
          }
        }
      }
    };
    updatePrivacy();
  }, [privacyResponse]);

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
              <Text style={styles.headerTextDash}>Privacy</Text>
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
export default PrivacyScreen;
