import {StyleSheet} from 'react-native';
import {colors, fonts} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: colors.white_FFFFFF,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    marginBottom: 32,
  },
  mainCircle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.green_icon_00AE36,
    borderRadius: 20 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: colors.green_icon_00AE36,
    width: 7,
    height: 7,
    borderRadius: 7 / 2,
  },
  addressesContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  marksContainer: {
    justifyContent: 'space-between',
    marginRight: 14,
    alignItems: 'center',
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  addressFrom: {
    color: colors.black_000000,
    fontSize: 16,
    marginBottom: 22,
  },
  addressTo: {
    color: colors.black_000000,
    fontSize: 16,
  },
  fuelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  fuelInfo: {
    color: colors.black_000000,
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 14
  },
});
