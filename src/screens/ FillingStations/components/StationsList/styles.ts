import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 24,
    // paddingHorizontal: 16,
    // backgroundColor: colors.white_FFFFFF,
  },
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 16,
  },
  logoContainer: {
    width: 40,
    height: 40,
    backgroundColor: colors.grey_light_background_E5E5E5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 26,
    height: 17,
  },
  itemContentContainer: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
  },
  routeSideContainer: {
    alignItems: 'center',
  },
  routeButton: {
    width: 36,
    height: 36,
    borderWidth: 2,
    borderColor: colors.grey_border_E1E1E8,
    borderRadius: 36 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // bottom: 4,
  },
  routeButtonTitle: {
    fontSize: 16,
    color: colors.black_icon_404353,
  },
  itemTitle: {
    color: colors.main_black_1B1B1B,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  mainContent: {
    fontSize: 13,
  },
  separator: {
    height: 1,
    backgroundColor: colors.grey_border_E1E1E8,
  },
  searchContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.grey_border_E1E1E8,
    flexDirection :"row",
    height: 40,
    // width: "100%",
    alignItems: "center",
},
input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16
}
});
