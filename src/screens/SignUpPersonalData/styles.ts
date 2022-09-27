import {StyleSheet} from 'react-native';
import {colors, fonts} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 18,
    color: '#1B1B1B',
    fontWeight: '500',
    marginBottom: 16,
  },
  flexContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  link: {
    fontSize: 16,
    color: '#2D2D2D',
    textDecorationLine: 'underline',
  },
});
