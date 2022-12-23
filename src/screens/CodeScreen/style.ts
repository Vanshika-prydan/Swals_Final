import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    height: 55,
    margin: 13,
    width: 55,
    borderWidth: 1,
    borderColor: '#0074c3',
    borderRadius: 5,
    textAlign: 'center',
    color: colors.black,
    fontSize: 25,
  },
});
