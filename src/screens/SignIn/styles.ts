import {StyleSheet} from 'react-native';
import {width} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: (width - 16 * 2 - 16 * 3) / 4,
    height: 58,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#E1E1E8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCell: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  focusCell: {
    borderColor: '#000',
  },
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: 'red',
  },
  button: {
    marginBottom: 32,
  },
  flexContainer: {
    flex: 1,
  },
});
