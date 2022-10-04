import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {
    borderRadius: 6,
    width: '100%',
    height: 54,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.black_icon_404353,
  },
  title: {
    color: colors.black_000000,
    fontWeight: '500',
  },
});
