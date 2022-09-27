import {StyleSheet} from 'react-native';
import {colors, top} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main_green_27A74C,
  },
  flexContainer: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 0,
  },
  messengerImg: {
    width: 60,
    height: 60,
  },
  headerModalContainer: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: top,
  },
  headerTitle: {
    color: colors.white_FFFFFF,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 24 + 16,
  },
  buttonClose: {
    marginRight: 16,
  },
  modalContentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  descriptionContainer: {
    marginBottom: 16,
  },
  description: {
    color: '#2D2D2D',
    fontSize: 20,
  },
  phoneNumber: {
    fontSize: 32,
    fontWeight: '500',
    color: '#007E26',
  },
  phoneDescription: {
    color: '#6D6F79',
    fontSize: 16,
  },
  messengersDescription: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16,
  },
  messengersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  messengerIcon: {
    marginHorizontal: 8,
  },
});
