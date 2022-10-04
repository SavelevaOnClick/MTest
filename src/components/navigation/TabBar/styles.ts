import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white_FFFFFF,
    paddingVertical: 6,
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
  shadow: {
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowColor: colors.grey_shadow_AFAFAF,
  },
});
