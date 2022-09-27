import {StyleSheet} from 'react-native';
import {colors, fonts} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  flexContainer: {
    flex: 1,
  },
  button: {
    marginBottom: 32,
  },
  title: {
    color: colors.main_black_1B1B1B,
    fontSize: 18,
    marginBottom: 24,
    fontWeight: '500',
  },
  checksContainer: {
    marginBottom: 24,
  },
  checkBox: {
    marginBottom: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
