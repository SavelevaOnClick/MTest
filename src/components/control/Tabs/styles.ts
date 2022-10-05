import {StyleSheet} from 'react-native';
import {colors, ios, width} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    zIndex: 1000,
    paddingTop:  !ios ? 32 : 0,
  },
  flexContainer: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    height: 49,
    alignItems: 'center',
  },
  tabTitle: {
    color: colors.grey_label_6D6F79,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  tabTitleActive: {
    color: colors.green_icon_00AE36,
  },
  indicator: {
    height: 2,
    backgroundColor: colors.green_icon_00AE36,
  },
  tabsContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    borderWidth: 0,
    elevation: 0,
  },
  pressableIcon: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    width: width / 2 - 24,
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: colors.green_icon_00AE36,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
