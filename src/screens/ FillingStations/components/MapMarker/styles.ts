import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    backgroundColor: colors.green_icon_00AE36,
    borderWidth: 2,
    borderColor: colors.white_FFFFFF,
    borderTopLeftRadius: 44 / 2,
    borderTopRightRadius: 44 / 2,
    borderBottomLeftRadius: 44 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '45deg'}],
  },
  markerImage: {
    height: 20,
    width: 30,
    transform: [{rotate: '-45deg'}],
  },
});
