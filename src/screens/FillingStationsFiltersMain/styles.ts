import {StyleSheet} from 'react-native';
import {ColorSpace} from 'react-native-reanimated';
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
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
  },
  button: {
    marginBottom: 32,
  },
  blockContainer: {
    marginBottom: 32,
  },
  leftIdent: {
    paddingLeft: 16,
  },
  resetButtonTitle: {
    fontWeight: '500',
    color: colors.white_FFFFFF,
  },
});
