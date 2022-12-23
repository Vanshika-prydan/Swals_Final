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
  imageBoxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewBox: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  firstBox: {
    borderRadius: 12,
    marginHorizontal: 10,
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00000066',
  },
  firstText: {
    fontWeight: '600',
    color: colors.white,
    fontSize: 13,
    position: 'absolute',
    bottom: 25,
  },
  firstSmallText: {
    fontWeight: '600',
    color: colors.white,
    fontSize: 11,
    position: 'absolute',
    bottom: 10,
  },
  imageView: {
    borderRadius: 10,
    width: '100%',
    height: 250,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 10,
    marginHorizontal: 10,
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
