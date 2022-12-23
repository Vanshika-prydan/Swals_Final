import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../constants';

const Button = ({buttonText, onPress, color, bgColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: bgColor ? bgColor : colors.authBtn},
      ]}>
      <Text style={[styles.text, {color: color}]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    color: colors.gray,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.1,
  },
});
