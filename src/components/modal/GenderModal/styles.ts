import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.main_black_1B1B1B,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  checkBoxContainer: {
    marginBottom: 20,
  },
});
