import { colors } from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 56,
    right: 16,
  },
  zoomInContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white_FFFFFF,
    marginBottom: 8,
  },
  zoomOutContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white_FFFFFF,
    marginBottom: 24,
  },
  geolocationContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green_icon_00AE36,
  }
});
