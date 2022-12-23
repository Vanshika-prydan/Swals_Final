import {StyleSheet} from 'react-native';
import { FlipInEasyX } from 'react-native-reanimated';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBGColour,
  },
  docView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainView: {
    borderColor: colors.blue,
    borderWidth: 2,
    height: 110,
    width: 110,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuView: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  submitBtnView: {},
  img: {
    height: 110,
    width: 110,
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
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    margin: 10,
  },
  mainText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.1,
    color: colors.black,
    marginVertical: 10,
  },
  iconView: {
    opacity: 0.8,
  },
  docTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
   },
   rowContainer: {
    alignItems: 'center'
   },
});
