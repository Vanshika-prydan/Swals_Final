import React, {useState, useEffect} from 'react';
import Autocomplete from 'react-native-autocomplete-input';
import {
  Text,
  View,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableNativeFeedback,
} from 'react-native';
import {Button, Spinner} from '../../components';

import {colors} from '../../constants';
import styles from './style';
import {requestEn, onEnResponse} from '../../redux/actions/enAction';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  requestCountry,
  onCountryResponse,
} from '../../redux/actions/countryAction';

const StepOneScreen = ({navigation, route}: {navigation: any}) => {
  const {service_id} = route.params;
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');

  const [CompanyName, setCompanyName] = useState('');
  const [CompanyNameErr, setCompanyNameErr] = useState('');

  const [countryName, setCountryName] = useState('');
  const [countryNameErr, setCountryNameErr] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryFilterData, setCountryFilterData] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  const EnResponse = useSelector(state => state.enReducer.enResponse);
  const countryResponse = useSelector(
    state => state.countryReducer.countryResponse,
  );
  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setSpinner(true);
        dispatch(requestCountry());
      } else {
        setSpinner(false);
        Alert.alert('Please check your internet connection');
      }
    });
  }, []);
  useEffect(() => {
    const getCountry = async () => {
      if (
        countryResponse &&
        Object.keys(countryResponse).length !== 0 &&
        countryResponse.hasOwnProperty('status')
      ) {
        if (countryResponse?.status === 200) {
          // const countries = countryResponse.data.data.map((item: any) => {
          //   return {id: item.id, name: item.name};
          // });
          // console.log(countryResponse.data.data);
          setCountryData(countryResponse.data.data);
          setCountryFilterData(countryResponse.data.data);
          var setResponse = {};
          dispatch(onCountryResponse(setResponse));
          setSpinner(false);
        } else if (countryResponse?.status === 403) {
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
          navigation.navigate('Logout');
        } else {
          if (countryResponse.message) {
            Alert.alert('Error', countryResponse.message);
          } else {
            Alert.alert('Error', 'Something went wrong. Please try again');
          }
        }
      }
    };
    getCountry();
  }, [countryResponse]);

  useEffect(() => {
    const getEnUpdate = async () => {
      // console.log('EnResponse : ', JSON.stringify(EnResponse));

      if (
        EnResponse &&
        Object.keys(EnResponse).length !== 0 &&
        EnResponse.hasOwnProperty('success')
      ) {
        if (EnResponse?.success) {
          Alert.alert(
            'Success',
            EnResponse?.message,
            [
              {
                text: 'OK',
                onPress: () =>
                  navigation.navigate('StepTwoScreen', {
                    enrollment_id: EnResponse?.data?.id,
                  }),
              },
            ],
            {cancelable: false},
          );
          var setResponse = {};
          dispatch(onEnResponse(setResponse));
        } else if (EnResponse?.status === 403) {
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
          navigation.navigate('Logout');
        } else {
          const updateEnResponse = JSON.parse(EnResponse);
          if (updateEnResponse.message) {
            Alert.alert('Error', EnResponse.message);
          } else {
            if (EnResponse.message) {
              Alert.alert('Error', EnResponse.message);
            }
          }
        }
      }
      setSpinner(false);
    };
    getEnUpdate();
  }, [EnResponse]);

  const validateRequest = () => {
    let isValid = true;
    if (name === '') {
      setNameErr('Please enter valid name');
      isValid = false;
    } else {
      setNameErr('');
    }

    if (CompanyName === '') {
      setCompanyNameErr('Please enter valid Company Name');
      isValid = false;
    } else {
      setCompanyNameErr('');
    }

    if (countryName === '') {
      setCountryNameErr('Please select Country');
      isValid = false;
    } else {
      setCountryNameErr('');
    }

    if (phone === '' || phone.length < 8) {
      setPhoneErr('Please enter valid Phone');
      isValid = false;
    } else {
      setPhoneErr('');
    }

    return isValid;
  };

  const onEnSubmit = () => {
    if (validateRequest()) {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          // Dispatch login request
          dispatch(
            requestEn(name, countryName, CompanyName, service_id, phone),
          );
        } else {
          Alert.alert('Error', 'connection.errorMessage');
        }
      });
    }
  };
  const handleSelectCountry = ctitem => {
    setCountryName(ctitem.name);
    setSelectedCountry(ctitem);
    setModalVisible(false);
  };

  const filterData = text => {
    const filtData = countryData.filter(
      item =>
        item.name.toLowerCase().startsWith(text.toLowerCase()) ||
        item.isd_code.startsWith(text),
    );
    setCountryFilterData(filtData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <>
        <Spinner isLoading={spinner} color={colors.blue} />
        <ScrollView style={styles.container}>
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
              <Text style={styles.headerTextDash}>Step-1</Text>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setName(text.replace(/[^0-9a-zA-z ]/g, ''))}
              value={name}
              maxLength={50}
            />
            {nameErr !== '' && <Text style={styles.err}>{nameErr}</Text>}
            <Text style={styles.text}>Company Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={text =>
                setCompanyName(text.replace(/[^0-9a-zA-z ]/g, ''))
              }
              value={CompanyName}
              maxLength={50}
            />
            {CompanyNameErr !== '' && (
              <Text style={styles.err}>{CompanyNameErr}</Text>
            )}

            <Text style={styles.text}>Country</Text>
            <View style={styles.inputDD}>
              <TouchableNativeFeedback
                style={styles.input}
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Text
                  style={{
                    paddingVertical: 11,
                    paddingHorizontal: 5,
                    fontSize: 16,
                  }}>
                  {countryName ? countryName : 'Select Country'}
                </Text>
              </TouchableNativeFeedback>
            </View>
            {/* <TextInput
              editable={false}
              on
              onTouchStart={() => {
                console.log("Touched");
                setModalVisible(true);
              }}
              style={styles.input}
              value={countryName}
              placeholder="Select Country"
            /> */}

            {/* <Autocomplete
                data={countryFilterData}
                value={countryName}
                onChangeText={(text: any) => filterData(text)}
                flatListProps={{
                  keyExtractor: (_, idx: any) => idx,
                  renderItem: ({item}: any) => <Text>{item.name}</Text>,
                }}
              /> */}
            {/* <Picker
                selectedValue={countryName}
                onValueChange={(itemValue, itemIndex) =>
                  setCountryName(itemValue)
                }>
                <Picker.Item label="Select Country" value="" />
                {countryData.map((cntItem: any) => {
                  return (
                    <Picker.Item label={cntItem.name} value={cntItem.name} />
                  );
                })}
              </Picker> */}
            {/* </View> */}
            {countryNameErr !== '' && (
              <Text style={styles.err}>{countryNameErr}</Text>
            )}

            <Text style={styles.text}>Contact Number</Text>
            <View style={{position:'relative'}}>
            <TextInput
              style={[styles.input, {paddingLeft: 50}]}
              keyboardType="number-pad"
              onChangeText={text => setPhone(text.replace(/[^0-9]/g, ''))}
              maxLength={12}
              value={phone}
            />
            <Text style={{position:'absolute', paddingVertical:17, paddingHorizontal:5, top:10, left: 12, borderRightWidth:1, borderRightColor:'#00000011'}}>{selectedCountry?.isd_code ?selectedCountry?.isd_code:''}</Text>
            </View>
            {phoneErr !== '' && <Text style={styles.err}>{phoneErr}</Text>}

            <View style={styles.submitBtnView}>
              <Button
                color={colors.white}
                buttonText="Next"
                onPress={() => onEnSubmit()}
                // onPress={() => navigation.navigate('StepTwoScreen')}
              />
            </View>
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalView}>
            <View style={styles.modalViewContainer}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableNativeFeedback
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={styles.modalClose}>X</Text>
              </TouchableNativeFeedback>
            </View>
            <Autocomplete
              data={countryFilterData}
              inputContainerStyle={{paddingHorizontal: 5}}
              // value={countryName}

              onChangeText={(text: any) => filterData(text)}
              flatListProps={{
                keyExtractor: (_, idx: any) => idx,
                renderItem: ({item}: any) => (
                  <TouchableNativeFeedback
                    onPress={() => {
                      handleSelectCountry(item);
                    }}>
                    <View
                      style={{
                        borderBottomColor: '#00000011',
                        borderBottomWidth: 1,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          paddingVertical: 10,
                          paddingHorizontal: 5,
                        }}>
                        {item.name} ({item.isd_code})
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                ),
              }}
            />
          </View>
        </Modal>
      </>
    </SafeAreaView>
  );
};
export default StepOneScreen;
