import React, {useEffect, useState} from 'react';
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
import {Spinner} from '../../components';
import {colors} from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {requestNews, onNewsResponse} from '../../redux/actions/newsAction';
import moment from 'moment';

const AllNewsScreen = ({navigation}: {navigation: any}) => {
  const [spinner, setSpinner] = useState(true);
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState([]);
  const newsResponse = useSelector(state => state.newsReducer.newsResponse);

  const numColumns = 2;

  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setSpinner(true);
        dispatch(requestNews());
      } else {
        setSpinner(false);
        Alert.alert('Please check your internet connection');
      }
    });
  }, []);

  useEffect(() => {
    const updateNews = async () => {
      if (
        Object.keys(newsResponse).length !== 0 &&
        newsResponse.hasOwnProperty('status')
      ) {
        if (newsResponse.status === 200) {
          setDataList(newsResponse.data.data);
          var setResponse = {};
          dispatch(onNewsResponse(setResponse));
          setSpinner(false);
        } else if (newsResponse?.status === 403) {
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
          navigation.navigate('Logout');
        } else {
          if (newsResponse.message) {
            Alert.alert('Error', newsResponse.message);
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again');
          }
        }
      }
    };
    updateNews();
  }, [newsResponse]);

  const renderListItem = ({item, index}) => {
    return (
      <View style={styles.viewContainer} key={index}>
        <View style={styles.viewBox}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewsScreen', {item});
            }}>
            <View style={styles.imageBoxContainer}>
              <Image source={{uri: item.image}} style={styles.imageView} />
            </View>
            <View style={styles.overlay}></View>
            <View style={styles.firstBox}>
              <Text style={styles.firstText}>{item.description}</Text>
              <Text style={styles.firstSmallText}>{moment(item.date).format('DD/MM/YYYY')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
              <Text style={styles.headerTextDash}>News</Text>
            </View>
          </View>
          {dataList.length > 0 ? (
            <FlatList
              numColumns={numColumns}
              data={dataList}
              keyExtractor={item => item.id.toString()}
              renderItem={renderListItem}
            />
          ) : (
            <View style={styles.nodataView}>
              <Text style={styles.nodata}>No data found</Text>
            </View>
          )}
        </View>
      </>
    </SafeAreaView>
  );
};
export default AllNewsScreen;
