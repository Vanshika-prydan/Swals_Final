import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler,
  SafeAreaView,
  SectionList,
  Alert,
} from 'react-native';
import styles from './style';
import { colors } from '../../constants';
import { Spinner } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {
  requestDashboard,
  onDashboardResponse,
} from '../../redux/actions/dashboardAction';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';

const DashBoardScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(false);
  const [finalDataList, setFinalDataList] = useState([]);
  const dashboardResponse = useSelector(
    state => state.dashboardReducer.dashboardResponse,
  );
  const isLoggedIn = useSelector(state => state?.loginReducer?.isLoggedIn);

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

  const loadDashboardData = async () => {
    // const isLogIn = await AsyncStorage.getItem('UserDetails');
    // const finalUserDetails = JSON.parse(isLogIn);
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        if (isLoggedIn) {
          setSpinner(true);
          dispatch(requestDashboard());
        }
      } else {
        setSpinner(false);
        Alert.alert('Please check your internet connection');
      }
    });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadDashboardData();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation, isLoggedIn]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  useEffect(() => {
    const updateDashboard = async () => {
      if (
        dashboardResponse &&
        Object.keys(dashboardResponse).length !== 0 &&
        dashboardResponse.hasOwnProperty('status')
      ) {
        if (dashboardResponse.status === 200) {
          if (dashboardResponse?.data?.data) {
            const respData = dashboardResponse?.data?.data;
            // console.log('dashboardResponse : ', JSON.stringify(respData));
            let DATA = [
              {
                title: 'Pending Approval',
                data: respData.pending,
              },
              {
                title: 'Enrolled Services',
                data: respData.approved,
              },
              {
                title: 'Expired Services',
                data: respData.expired,
              },
            ];
            setFinalDataList(DATA);

            var setResponse = {};
            dispatch(onDashboardResponse(setResponse));
            setSpinner(false);
          } else {
            setSpinner(false);
          }
        } else if (dashboardResponse?.status === 403) {
          Alert.alert(
            'Alert',
            'The access token has expired and please login again.',
          );
          navigation.navigate('Logout');
        } else {
          if (dashboardResponse.message) {
            Alert.alert('Error', dashboardResponse.message);
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again');
          }
          setSpinner(false);
        }
      }
    };
    updateDashboard();
  }, [dashboardResponse]);

  const Item = ({ item, index }) => (
    <View style={styles.BoxContainer} key={index}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AllServicesScreen', { userFrom: 'dashboard' });
        }}>
        <View style={styles.detailView}>
          <View style={styles.imgView}>
            <Image
              source={{ uri: item.service_icon }}
              tintColor={colors.black}
              style={styles.BoxImage}
            />
          </View>
          <View style={styles.textView}>
            <Text
              style={[
                styles.BoxText2,
                {
                  color:
                    item.status === 'pending'
                      ? colors.authBtn
                      : item.status === 'approved'
                        ? colors.apple
                        : colors.venetianRed,
                },
              ]}>
              {item.name}
            </Text>
            <Text style={styles.dateText}>{item.service.title}</Text>
            <Text style={styles.dateText}>
              {item.status === 'pending' &&
                moment(item.created_at).format('DD/MM/YYYY')}
              {item.status !== 'pending' && (
                <>
                  {moment(item.created_at).isValid()
                    ? moment(item.start_date).format('DD/MM/YYYY') + ' to '
                    : ''}
                  {moment(item.updated_at).isValid()
                    ? moment(item.end_date).format('DD/MM/YYYY')
                    : ''}
                </>
              )}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Spinner isLoading={spinner} color={colors.black} />
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
              <Text style={styles.headerTextDash}>Dashboard</Text>
            </View>
          </View>
          <View style={styles.container}>
            {finalDataList.length > 0 ? (
              <View style={styles.mainView}>
                <SectionList
                  sections={finalDataList}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item, index }) => (
                    <Item item={item} index={index} />
                  )}
                  renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.title}>{title}</Text>
                  )}
                />
              </View>
            ) : isLoggedIn ? (
              <>
                <View style={styles.nodataView}>
                  <Text style={styles.nodata}>
                    {!spinner && 'No data found'}
                  </Text>
                </View>
              </>
            ) : (
              <>
                <View style={styles.nodataView}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('AuthLogin')
                    }}>
                      <>
                    <Text style={styles.nodata}>
                      Login Require
                    </Text>
                    <Text style={styles.nodata}>
                      Tap here to Login
                    </Text>
                    </>
                    </TouchableOpacity>
                </View>
              
              </>
            )}
        </View>
      </View>
    </>
    </SafeAreaView >
  );
};
export default DashBoardScreen;
