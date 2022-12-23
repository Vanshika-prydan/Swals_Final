import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button, Spinner } from '../../components';
import { colors } from '../../constants';
import styles from './style';
import DocumentPicker from 'react-native-document-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  requestEnSubmit,
  onEnSubmitResponse,
} from '../../redux/actions/enSubmitActions';
import { useDispatch, useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

const StepTwoScreen = ({ route, navigation }: { navigation: any }) => {
  const enrollment_id = route?.params?.enrollment_id
    ? route.params.enrollment_id
    : 10;
  const dispatch = useDispatch();

  const [singleFileOne, setSingleFileOne] = useState(null);
  const [singleFileTwo, setSingleFileTwo] = useState(null);
  const [singleFileThree, setSingleFileThree] = useState(null);
  const [singleFileFour, setSingleFileFour] = useState(null);
  const [singleFileFive, setSingleFileFive] = useState(null);
  const [singleFileSix, setSingleFileSix] = useState(null);
  const [selectedleFileList, setSelectedleFileList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const enSubmitResponse = useSelector(
    state => state.enSubmitReducer.enSubmitResponse,
  );

  useEffect(() => {
    const getEnsubmitUpdate = async () => {
      if (
        enSubmitResponse &&
        Object.keys(enSubmitResponse).length !== 0 &&
        enSubmitResponse.hasOwnProperty('success')
      ) {
        if (enSubmitResponse?.success) {
          Alert.alert('Success', enSubmitResponse?.data);
          var setResponse = {};
          dispatch(onEnSubmitResponse(setResponse));
        } else if (enSubmitResponse?.status === 403) {
          Alert.alert(
            'Alert',
            'The access token has expired and the user signs out successfully.',
          );
          navigation.navigate('Logout');
        } else {
          const updateEnResponse = JSON.parse(enSubmitResponse);
          if (updateEnResponse.message) {
            Alert.alert('Error', enSubmitResponse.message);
          } else {
            if (enSubmitResponse.message) {
              Alert.alert('Error', enSubmitResponse.message);
            }
          }
        }
      }
      setSpinner(false);
    };
    getEnsubmitUpdate();
  }, [enSubmitResponse]);

  const validateRequest = () => {
    if (
      singleFileOne === null &&
      singleFileTwo === null &&
      singleFileThree === null &&
      singleFileFour === null &&
      singleFileFive === null &&
      singleFileSix === null
    ) {
      Alert.alert('Error', 'Please select any file');
      return false;
    } else if (selectedleFileList.length < 4) {
      Alert.alert('Error', 'Please select minmum 4 files');
      return false;
    } else {
      return true;
    }
  };
  const validateFinalRequest = () => {
    // if (selectedleFileList.length < 4) {
    //   Alert.alert('Error', 'Please select minmum 4 files');
    //   return false;
    // } else {
    return true;
    // }
  };
  const isValidRequest = (name, upload, enrollment_id) => {
    if (
      name !== '' &&
      name !== null &&
      upload !== '' &&
      upload !== null &&
      enrollment_id
    ) {
      return true;
    } else {
      return false;
    }
  };

  const uploadImage = async (name, upload) => {
    if (isValidRequest(name, upload, enrollment_id)) {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestEnSubmit(name, upload, enrollment_id));
        } else {
          Alert.alert('Error', 'connection.errorMessage');
        }
      });
    }
  };

  const selectFile = async selectNumber => {
    try {
      const fileResp = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });
      // console.log('Selected File : ' + JSON.stringify(fileResp));
      if (fileResp && fileResp.length > 0) {
        const updateFileList = [...selectedleFileList];
        updateFileList.push(fileResp);
        setSelectedleFileList(updateFileList);
        await uploadImage(fileResp[0]?.name, fileResp);
      }
      if (selectNumber === 1) {
        setSingleFileOne(fileResp);
      } else if (selectNumber === 2) {
        setSingleFileTwo(fileResp);
      } else if (selectNumber === 3) {
        setSingleFileThree(fileResp);
      } else if (selectNumber === 4) {
        setSingleFileFour(fileResp);
      } else if (selectNumber === 5) {
        setSingleFileFive(fileResp);
      } else if (selectNumber === 6) {
        setSingleFileSix(fileResp);
      } else {
      }
    } catch (err) {
      setSingleFileOne(null);
      setSingleFileTwo(null);
      setSingleFileThree(null);
      setSingleFileFour(null);
      setSingleFileFive(null);
      setSingleFileSix(null);
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const finalUploadData = () => {
    if (validateFinalRequest()) {
      Alert.alert('Success', 'Files upload Successfully');
      navigation.goBack();
      navigation.goBack();
      navigation.goBack();
      navigation.navigate('DashBoard');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {spinner ? (
        <Spinner color={colors.blue} />
      ) : (
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
              <Text style={styles.headerTextDash}>Step - 2</Text>
            </View>
          </View>
          <View style={styles.mainContainer}>
            {/* style={styles.viewContainer} */}
            <Text style={styles.text}>Upload Documents</Text>
            <View style={styles.viewContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.docTitle}>1. ID Proof</Text>
                {singleFileOne != null ? (
                  <TouchableOpacity onPress={() => selectFile(1)}>
                    {singleFileOne[0]?.type == 'application/pdf' ? (
                      <View style={styles.mainView}>
                        <FontAwesome5
                          name="file-pdf"
                          size={35}
                          style={styles.iconView}
                          color={colors.venetianRed}
                        />
                      </View>
                    ) : (
                      <Image
                        source={{ uri: singleFileOne[0].uri }}
                        style={styles.img}
                        borderRadius={5}
                      />
                    )}
                  </TouchableOpacity>
                ) : (
                  <View style={styles.mainView}>
                    <TouchableOpacity onPress={() => selectFile(1)}>
                      <FontAwesome5
                        name="file-upload"
                        size={28}
                        style={styles.iconView}
                        color={colors.black}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.docTitle}>2. Address Proof</Text>
                {singleFileTwo != null ? (
                  <TouchableOpacity onPress={() => selectFile(2)}>
                    {singleFileTwo[0]?.type == 'application/pdf' ? (
                      <View style={styles.mainView}>
                        <FontAwesome5
                          name="file-pdf"
                          size={35}
                          style={styles.iconView}
                          color={colors.venetianRed}
                        />
                      </View>
                    ) : (
                      <Image
                        source={{ uri: singleFileTwo[0].uri }}
                        style={styles.img}
                        borderRadius={5}
                      />
                    )}
                  </TouchableOpacity>
                ) : (
                  <View style={styles.mainView}>
                    <TouchableOpacity onPress={() => selectFile(2)}>
                      <FontAwesome5
                        name="file-upload"
                        size={28}
                        style={styles.iconView}
                        color={colors.black}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.viewContainer}>
              <View style={styles.rowContainer}>
                <Text style={styles.docTitle}>3. Company License</Text>
                {singleFileThree != null ? (
                  <TouchableOpacity onPress={() => selectFile(3)}>
                    {singleFileThree[0]?.type == 'application/pdf' ? (
                      <View style={styles.mainView}>
                        <FontAwesome5
                          name="file-pdf"
                          size={35}
                          style={styles.iconView}
                          color={colors.venetianRed}
                        />
                      </View>
                    ) : (
                      <Image
                        source={{ uri: singleFileThree[0].uri }}
                        style={styles.img}
                        borderRadius={5}
                      />
                    )}
                  </TouchableOpacity>
                ) : (
                  <View style={styles.mainView}>
                    <TouchableOpacity onPress={() => selectFile(3)}>
                      <FontAwesome5
                        name="file-upload"
                        size={28}
                        style={styles.iconView}
                        color={colors.black}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            {/* <View style={styles.viewContainer}>
              {singleFileFour != null ? (
                <TouchableOpacity onPress={() => selectFile(4)}>
                  {singleFileFour[0]?.type == 'application/pdf' ? (
                    <View style={styles.mainView}>
                      <FontAwesome5
                        name="file-pdf"
                        size={35}
                        style={styles.iconView}
                        color={colors.venetianRed}
                      />
                    </View>
                  ) : (
                    <Image
                      source={{ uri: singleFileFour[0].uri }}
                      style={styles.img}
                      borderRadius={5}
                    />
                  )}
                </TouchableOpacity>
              ) : (
                <View style={styles.mainView}>
                  <TouchableOpacity onPress={() => selectFile(4)}>
                    <FontAwesome5
                      name="file-upload"
                      size={28}
                      style={styles.iconView}
                      color={colors.black}
                    />
                  </TouchableOpacity>
                </View>
              )}

              {singleFileFive != null ? (
                <TouchableOpacity onPress={() => selectFile(5)}>
                  {singleFileFive[0]?.type == 'application/pdf' ? (
                    <View style={styles.mainView}>
                      <FontAwesome5
                        name="file-pdf"
                        size={35}
                        style={styles.iconView}
                        color={colors.venetianRed}
                      />
                    </View>
                  ) : (
                    <Image
                      source={{ uri: singleFileFive[0].uri }}
                      style={styles.img}
                      borderRadius={5}
                    />
                  )}
                </TouchableOpacity>
              ) : (
                <View style={styles.mainView}>
                  <TouchableOpacity onPress={() => selectFile(5)}>
                    <FontAwesome5
                      name="file-upload"
                      size={28}
                      style={styles.iconView}
                      color={colors.black}
                    />
                  </TouchableOpacity>
                </View>
              )}

              {singleFileSix != null ? (
                <TouchableOpacity onPress={() => selectFile(6)}>
                  {singleFileSix[0]?.type == 'application/pdf' ? (
                    <View style={styles.mainView}>
                      <FontAwesome5
                        name="file-pdf"
                        size={35}
                        style={styles.iconView}
                        color={colors.venetianRed}
                      />
                    </View>
                  ) : (
                    <Image
                      source={{ uri: singleFileSix[0].uri }}
                      style={styles.img}
                      borderRadius={5}
                    />
                  )}
                </TouchableOpacity>
              ) : (
                <View style={styles.mainView}>
                  <TouchableOpacity onPress={() => selectFile(6)}>
                    <FontAwesome5
                      name="file-upload"
                      size={28}
                      color={colors.black}
                      style={styles.iconView}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View> */}
            <View style={styles.submitBtnView}>
              <Button
                color={colors.white}
                buttonText="SUBMIT"
                onPress={finalUploadData}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default StepTwoScreen;
