import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white_FFFFFF,
  },
  barContainer: {
    backgroundColor: colors.white_FFFFFF,
    height: 48,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  tabIconContainer: {
    alignItems: 'center',
  },
  iconTitle: {
    fontWeight: '500',
    fontSize: 12,
    color: colors.black_tab_bar_2D2D2D,
    marginTop: 2,
  },
});
