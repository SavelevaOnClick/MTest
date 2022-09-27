import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: colors.grey_border_E1E1E8,
  },
  inputContainer: {
    flex: 1,
    height: 58,
    justifyContent: 'flex-end',
  },
  input: {
    height: 38,
    width: '100%',
    fontSize: 16,
    padding: 0,
    color: colors.black_000000,
    borderBottomColor: colors.grey_border_E1E1E8,
  },
  icon: {
    marginRight: 8,
  },
});
