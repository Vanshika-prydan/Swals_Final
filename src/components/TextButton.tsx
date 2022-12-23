import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TextButton = ({text, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, {color: color}]}>{text}</Text>
    </TouchableOpacity>
  );
};
export default TextButton;
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
  },
});
