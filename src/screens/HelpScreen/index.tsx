import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Alert} from 'react-native';
import styles from './style';
import {Spinner} from '../../components';
import {colors} from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {requestHelp, onHelpResponse} from '../../redux/actions/helpAction';
import {WebView} from 'react-native-webview';

const HelpScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState([]);

  const helpResponse = useSelector(state => state.helpReducer.helpResponse);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setSpinner(true);
        dispatch(requestHelp());
      } else {
        setSpinner(false);
        Alert.alert('Please check your internet connection');
      }
    });
  }, []);

  useEffect(() => {
    // console.log('helpResponse : ', JSON.stringify(helpResponse));

    const updateHelp = async () => {
      if (
        helpResponse &&
        Object.keys(helpResponse).length !== 0 &&
        helpResponse.hasOwnProperty('status')
      ) {
        if (helpResponse.status === 200) {
          setData(helpResponse.data.data);
          var setResponse = {};
          dispatch(onHelpResponse(setResponse));
          setSpinner(false);
        } else if (helpResponse?.status === 403) {
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
          navigation.navigate('Logout');
        } else {
          if (helpResponse.message) {
            Alert.alert('Error', helpResponse.message);
          } else {
            Alert.alert('Error', 'Something went to wrong. Please try again');
          }
        }
      }
    };
    updateHelp();
  }, [helpResponse]);

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
              <Text style={styles.headerTextDash}>Help</Text>
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
export default HelpScreen;
