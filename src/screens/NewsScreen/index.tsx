import React from 'react';
import {Text, View, ScrollView, Image, SafeAreaView} from 'react-native';
import styles from './style';
import {colors} from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DetailServicesScreen = ({route, navigation}) => {
  const {title, description, image} = route.params.item;
  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.headerTextDash}>News</Text>
          </View>
        </View>
        <View>
          <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.BoxText}>{title}</Text>
          <Text style={styles.smallText}>{description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DetailServicesScreen;
