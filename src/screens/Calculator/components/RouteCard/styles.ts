import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  containerCard: {
    backgroundColor: colors.white_FFFFFF,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grey_border_E1E1E8,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  shadow: {
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowColor: colors.grey_shadow_AFAFAF,
  },
  informationSideContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {},
  information: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: colors.main_black_1B1B1B,
  },
  tabSideContainer: {
    alignItems: 'center',
  },
  routeButton: {
    width: 36,
    height: 36,
    borderWidth: 2,
    borderColor: colors.grey_border_E1E1E8,
    borderRadius: 36 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 4,
  },
  routeButtonTitle: {
    fontSize: 16,
    color: colors.black_icon_404353,
  },
});
