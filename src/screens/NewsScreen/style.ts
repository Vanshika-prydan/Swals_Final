import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBGColour,
  },
  menuView: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
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
  BoxText: {
    color: colors.blue,
    fontSize: 17,
    fontWeight: '800',
    marginVertical: 10,
  },
  smallText: {
    color: colors.black,
    marginVertical: 20,
  },
  textView: {
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});
