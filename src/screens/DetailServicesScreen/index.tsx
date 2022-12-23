import React from 'react';
import {Text, View, ScrollView, Image, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './style';
import {Button} from '../../components';
import {colors} from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DetailServicesScreen = ({route, navigation}) => {
  const {id, title, description, image} = route.params.item;
  const isLoggedIn = useSelector(state => state?.loginReducer?.isLoggedIn);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
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
        <ScrollView style={styles.scrContainer}>
          <View style={styles.container1}>
            <Image
              source={{uri: image}}
              style={styles.BoxImage}
              resizeMode="cover"
            />
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.BoxText}>{title}</Text>
            <Text style={styles.smallText}>{description}</Text>
          </View>
        </ScrollView>
        <View style={styles.submitBtnView}>
          {!route.params.item.hasOwnProperty('enroll_status') ||
          route.params.item?.enroll_status === 'expired' ||
          route.params.item?.enroll_status === 'none' ? (
            <Button
              color={colors.white}
              buttonText={'ENROLL NOW'}
              style={styles.btnEnroll}
              onPress={() => {
                if (isLoggedIn) {
                  navigation.navigate('StepOneScreen', {service_id: id});
                } else {
                  navigation.navigate('AuthLogin');
                }
              }}
            />
          ) : (
            <Button
              color={colors.white}
              buttonText={'ENROLL NOW'}
              bgColor={colors.lightGrey}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DetailServicesScreen;
