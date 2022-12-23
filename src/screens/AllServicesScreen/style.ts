import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBGColour,
  },
  menuView: {
    flexDirection: 'row',
    height: 60,
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
  headerTextDash: {
    color: colors.black,
    fontSize: 30,
    fontWeight: '700',
  },
  BoxContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    height: 180,
    marginVertical: 15,
    width: windowWidth / 2 - 30,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 9.11,
  },
  BoxText: {
    marginBottom: 10,
    color: colors.black,
    fontSize: 18,
  },
  BoxImage: {
    height: 60,
    width: 60,
    marginVertical: 10,
  },
  firstIconView: {
    color: colors.white,
  },
  nodataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodata: {
    fontSize: 16,
    color: colors.black,
  },
});
