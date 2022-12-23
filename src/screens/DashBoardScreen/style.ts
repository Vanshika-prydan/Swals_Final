import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

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
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginTop: 8,
    borderRadius: 8,
    height: 80,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 9.11,
  },
  mainView: {
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    marginTop: 20,
    color: colors.black,
    fontWeight: '800',
  },
  BoxText: {
    marginTop: 5,
    marginLeft: 20,
    color: colors.blue,
  },
  BoxText1: {
    marginTop: 5,
    marginLeft: 20,
    color: 'green',
  },
  BoxText2: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.1,
    color: colors.lightGrey,
    paddingVertical:1,
  },
  detailView: {
    flexDirection: 'row',
  },
  imgView: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.authBtn,
  },
  textView: {
    flex: 0.88,
    justifyContent: 'space-around',
  },
  BoxImage: {
    height: 40,
    width: 40,
  },
  firstIconView: {
    color: colors.white,
  },
  imageView: {
    flexDirection: 'row',
  },
  item: {
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    color: colors.black,
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    marginTop: 20,
  },
  nodataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodata: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
  },
});
