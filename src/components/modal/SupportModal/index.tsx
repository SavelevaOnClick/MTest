import React from 'react';
import {mask} from 'react-native-mask-text';
import {assets} from '@assets';
import {Image, Linking, Modal, Pressable, Text, View} from '@components';
import {colors, height, SUPPORT_NUMBER, width} from '@constants';
import {useAppDispatch, useAppSelector, useCallback} from '@hooks';
import {setVisibleSupportModal} from '@reducers/additional';
import {EMessenger} from '@types';
import {Icon} from '../../typography/Icon/Icon';
import styles from './styles';

const SUPPORT_PHONE = '+380960158330';

type TProps = {};

const SupportModal: React.FC<TProps> = () => {
  const dispatch = useAppDispatch();
  const {visibleSupportModal} = useAppSelector(state => state.additional);

  const onPressClose = useCallback(() => {
    dispatch(setVisibleSupportModal(false));
  }, []);

  const onPressCallPhone = useCallback(() => {
    Linking.openURL(`tel:${SUPPORT_PHONE}`);
  }, []);

  const onPressMessenger = useCallback(
    (messenger: EMessenger) => () => {
      const url = `${messenger}${SUPPORT_NUMBER}`;
      console.log(url);
      Linking.openURL(url).catch(err => console.error('An error occurred', err));
    },
    [],
  );

  return (
    <Modal
      isVisible={visibleSupportModal}
      animationInTiming={400}
      animationOutTiming={400}
      backdropOpacity={0.5}
      hideModalContentWhileAnimating={true}
      useNativeDriverForBackdrop={true}
      deviceWidth={width}
      deviceHeight={height}
      style={styles.modal}
      useNativeDriver={true}>
      <View style={styles.container}>
        <View style={styles.headerModalContainer}>
          <View style={{flexGrow: 1}}>
            <Text style={styles.headerTitle}>Підтримка</Text>
          </View>
          <Pressable onPress={onPressClose} style={styles.buttonClose}>
            <Icon name="Close" size={24} color={colors.white_FFFFFF} />
          </Pressable>
        </View>
        <View style={styles.modalContentContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Виникли питання?</Text>
            <Text style={styles.description}>Ми завжди раді допомогти:</Text>
          </View>
          <View style={styles.flexContainer}>
            <Pressable onPress={onPressCallPhone}>
              <Text style={styles.phoneNumber}>{mask(SUPPORT_PHONE, '+99 (999) 999 99 99')}</Text>
            </Pressable>
            <Text style={styles.phoneDescription}>Працюємо з 7:00 до 23:00</Text>
          </View>
          <Text style={styles.messengersDescription}>Підтримка онлайн:</Text>
          <View style={styles.messengersContainer}>
            <Pressable style={styles.messengerIcon}>
              <Image source={assets.img.MESSENGER} style={styles.messengerImg} />
            </Pressable>
            <Pressable style={styles.messengerIcon} onPress={onPressMessenger(EMessenger.VIBER)}>
              <Image source={assets.img.VIBER} style={styles.messengerImg} />
            </Pressable>
            <Pressable style={styles.messengerIcon} onPress={onPressMessenger(EMessenger.TELEGRAM)}>
              <Image source={assets.img.TELEGRAM} style={styles.messengerImg} />
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SupportModal;
