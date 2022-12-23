import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBGColour,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  userInputView: {
    marginHorizontal: 20,
  },
  mainView: {
    marginTop: 7,
  },
  image: {
    tintColor: colors.authBtn,
    height: 100,
    width: 140,
  },
  forgotText: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.1,
    color: colors.authBtn,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 0.1,
    color: colors.lightGrey,
    marginBottom: 5,
  },
  input: {
    height: 55,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  submitBtnView: {},
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
  button1: {
    backgroundColor: colors.blue,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    margin: 15,
    borderRadius: 5,
    color: colors.white,
    fontSize: 17,
  },
  boxText: {
    fontSize: 20,
    color: colors.black,
    letterSpacing: 0.1,
    fontWeight: '800',
  },
  BoxSmallText: {
    fontSize: 15,
    marginTop: 5,
    color: colors.lightGrey,
  },
  centeredView: {
    marginTop: 15,
  },
  forgotPassModal: {
    flex: 1,
    backgroundColor: colors.green,
  },

  centeredView123: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.transformColor,
  },
  modalView123: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  forgotDetailView: {
    marginTop: 20,
  },
  button123: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen123: {
    backgroundColor: '#F194FF',
  },
  buttonClose123: {
    backgroundColor: '#2196F3',
  },
  textStyle123: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText123: {
    marginBottom: 15,
    textAlign: 'center',
  },
  lineView: {
    height: 5,
    width: '50%',
    backgroundColor: colors.gray,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 5,
    opacity: 0.7,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 20,
    paddingBottom: 40,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
