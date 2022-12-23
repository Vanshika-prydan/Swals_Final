import React, {useRef} from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import styles from './style';

const CodeScreen = ({setCodeOne, setCodeTwo, setCodeThree, setCodeFour}) => {
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={val => {
            setCodeOne(val.replace(/[^0-9]/g, ''));
            if (val) {
              ref_input2.current.focus();
            }
          }}
          secureTextEntry={false}
          maxLength={1}
          keyboardType="numeric"
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
        />
        <TextInput
          style={styles.input}
          onChangeText={val => {
            setCodeTwo(val.replace(/[^0-9]/g, ''));
            if (val) {
              ref_input3.current.focus();
            }
          }}
          secureTextEntry={false}
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => ref_input3.current.focus()}
          ref={ref_input2}
        />
        <TextInput
          style={styles.input}
          onChangeText={val => {
            setCodeThree(val.replace(/[^0-9]/g, ''));
            if (val) {
              ref_input4.current.focus();
            }
          }}
          secureTextEntry={false}
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => ref_input4.current.focus()}
          ref={ref_input3}
        />
        <TextInput
          style={styles.input}
          onChangeText={val => {
            setCodeFour(val.replace(/[^0-9]/g, ''));
          }}
          secureTextEntry={false}
          maxLength={1}
          keyboardType="numeric"
          ref={ref_input4}
        />
      </View>
    </SafeAreaView>
  );
};

export default CodeScreen;
