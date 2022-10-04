import {StyleSheet} from 'react-native';
import {colors, width} from '@constants';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerModalContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.main_black_1B1B1B,
  },
  mainContentContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  addressDescription: {
    fontSize: 16,
    marginLeft: 16,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: width / 2 - 20
  },
  icon: {
    marginRight: 10
  }
});
