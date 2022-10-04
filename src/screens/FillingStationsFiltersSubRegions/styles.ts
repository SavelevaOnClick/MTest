import {StyleSheet} from 'react-native';
import {colors, fonts} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  title: {
    fontSize: 18,
    color: colors.main_black_1B1B1B,
    fontWeight: '600',
    marginBottom: 16,
  },
  blockItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey_border_E1E1E8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  listContainer: {
    marginBottom: 100,
  },
  resetButtonTitle: {
    fontWeight: '500',
    color: colors.white_FFFFFF,
  },
  mainButtonContainer: {
    paddingHorizontal: 16,
    marginBottom: 32,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 20,
  },
  mainButton: {
    flex: 1,
  },
});
