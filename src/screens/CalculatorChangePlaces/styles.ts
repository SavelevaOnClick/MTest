import {StyleSheet} from 'react-native';
import {colors, fonts} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: colors.white_FFFFFF,
  },
  firstGoogleAutocompleteContainer: {
    height: 58,
    zIndex: 5,
    marginBottom: 18,
  },
  secondGoogleAutocompleteContainer: {
    height: 58,
    zIndex: 3,
    marginBottom: 18,
  },
  autocompleteList: {
    position: 'absolute',
    top: 58,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    flex: 1,
    elevation: 3,
    zIndex: 100,
  },
  fuelDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  fuelInput: {
    marginRight: 16,
  },
  mainButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mainButton: {
    marginBottom: 32,
  },
  flexContainer: {
    flex: 1,
  },
});
