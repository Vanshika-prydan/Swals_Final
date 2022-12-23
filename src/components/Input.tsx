import React from 'react';
import {TextInput, StyleSheet, Text} from 'react-native';
import {colors} from '../constants';

const Input = ({value, onChangeText, secureTextEntry, readOnly = false}) => {
  return (
    <>
      <TextInput
        style={styles.inputContainer}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        editable={!readOnly}
      />
    </>
  );
};
export default Input;
const styles = StyleSheet.create({
  inputContainer: {
    borderColor: colors.blue,
    width: '100%',
    height: 50,
    marginBottom: 25,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    fontSize: 15,
    color: colors.black,
  },
  text: {
    fontSize: 18,
  },
});
