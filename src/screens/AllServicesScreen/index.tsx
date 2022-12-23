import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './style';
import {colors} from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import {Spinner} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {
  requestServices,
  onServicesResponse,
} from '../../redux/actions/servicesAction';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AllServicesScreen = ({route, navigation}: {navigation: any}) => {
  const userFrom = route?.params?.userFrom ? route.params.userFrom : '';
  const dispatch = useDispatch();
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState([]);

  const servicesResponse = useSelector(
    state => state.servicesReducer.servicesResponse,
  );
  const numColumns = 2;

  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setSpinner(true);
        dispatch(requestServices());
      } else {
        setSpinner(false);
        Alert.alert('Please check your internet connection');
      }
    });
  }, []);

  useEffect(() => {
    // console.log('servicesResponse : ', JSON.stringify(servicesResponse));

    const updateServices = async () => {
      if (
        servicesResponse &&
        Object.keys(servicesResponse).length !== 0 &&
        servicesResponse.hasOwnProperty('status')
      ) {
        if (servicesResponse?.status === 200) {
          setData(servicesResponse.data.data);
          var setResponse = {};
          dispatch(onServicesResponse(setResponse));
          setSpinner(false);
        } else if (servicesResponse?.status === 403) {
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
          navigation.navigate('Logout');
        } else {
          if (servicesResponse.message) {
            Alert.alert('Error', servicesResponse.message);
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again');
          }
        }
      }
    };
    updateServices();
  }, [servicesResponse]);

  const renderListItem = ({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.BoxContainer} key={index}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailServicesScreen', {item});
            }}>
            <Image source={{uri: item.icon}} style={styles.BoxImage} />
            <Text style={styles.BoxText}>{item.title}</Text>
            <Feather name="arrow-right" size={17} color={colors.blue} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        {!spinner && userFrom === 'dashboard' ? (
          <View style={styles.menuView}>
            <MaterialIcons
              name="arrow-back"
              size={35}
              color={colors.black}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <View style={styles.titleView}>
              <Text style={styles.headerTextDash}>Services</Text>
            </View>
          </View>
        ) : !spinner ? (
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
              <Text style={styles.headerTextDash}>Services</Text>
            </View>
          </View>
        ) : null}

        {data.length > 0 ? (
          <FlatList
            numColumns={numColumns}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderListItem}
          />
        ) : (
          <View style={styles.nodataView}>
            <Text style={styles.nodata}>No data found</Text>
          </View>
        )}
        <Spinner isLoading={spinner} color={colors.black} />
      </>
    </SafeAreaView>
  );
};
export default AllServicesScreen;
