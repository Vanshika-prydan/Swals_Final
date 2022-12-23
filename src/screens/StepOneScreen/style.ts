import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBGColour,
  },
  mainContainer: {
    // backgroundColor: colors.Bg,
    paddingTop: 20,
  },
  menuView: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  submitBtnView: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  iconView: {
    backgroundColor: colors.gray,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
  },
  headerTextDash: {
    color: colors.black,
    fontSize: 30,
    fontWeight: '700',
  },
  text: {
    fontSize: 17,
    marginLeft: 10,
    marginTop: 20,
    color: colors.black,
    opacity: 0.7,
  },
  input: {
    height: 55,
    margin: 10,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 5,
    color: colors.black,
    paddingLeft: 15,
    paddingRight: 15,
  },
  err: {
    color: 'red',
    marginTop: -7,
    marginLeft: 12,
    marginright: 12,
  },
  inputDD: {
    height: 55,
    margin: 10,
    padding: 0,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 5,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.blue,

    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 5,
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  modalViewContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    padding: 5,
  },
  modalTitle: {
    fontSize:18, fontWeight:'700'
  },
  modalClose: {
    fontSize:20, fontWeight:'700', paddingHorizontal:5
  },
  
});
