import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBGColour,
  },
  headerView: {
    marginVertical: 10,
  },
  headerText: {
    fontSize: 50,
    color: colors.black,
  },
  mainContainer: {
    marginHorizontal: 20,
  },
  userInputView: {},
  mainView: {
    marginTop: 7,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.1,
    color: colors.lightGrey,
    marginBottom: 5,
  },
  submitBtnView: {},
  input: {
    height: 55,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: colors.blue,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    margin: 15,
    borderRadius: 5,
    color: colors.white,
    fontSize: 17,
  },
  newPassword: {
    fontSize: 16,
    color: colors.black,
    opacity: 0.7,
  },
  loginButton: {
    fontSize: 16,
    color: colors.blue,
    fontWeight: '500',
    marginStart: 10,
  },
  textView: {
    marginTop: 30,
  },
});
