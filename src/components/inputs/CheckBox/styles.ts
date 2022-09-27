import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: colors.main_black_1B1B1B,
  },
  checkBox: {
    marginRight: 16,
  },
  flexContainer: {
    flex: 1,
  },
});
