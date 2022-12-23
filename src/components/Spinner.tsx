import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Spinner = ({color, isLoading = false}) => {
  return (
    <View style={[styles.container, {display: isLoading ? 'flex' : 'none'}]}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};
export default Spinner;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    zIndex: 9999,
    backgroundColor: '#00000044',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
