import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants';
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBGColour,
    height: windowHeight,
  },
  scrContainer: {
    backgroundColor: colors.appBGColour,
    height: windowHeight-250,
  },
  menuView: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  iconView: {
    flex: 0.2,
    backgroundColor: colors.gray,
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
  },
  submitBtnView: {marginVertical: 5},
  headerTextDash: {
    color: colors.black,
    fontSize: 30,
    fontWeight: '700',
  },
  mainContainer: {
    marginHorizontal: 10,
  },
  BoxText: {
    color: colors.blue,
    fontSize: 17,
    fontWeight: '800',
    marginVertical: 5,
  },
  container1: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: colors.black,
    marginVertical: 10,
  },
  BoxImage: {
    width: '100%',
    height: 260,
  },
  btnEnroll: {
    position: 'absolute',
    bottom: 0,
  },
});
