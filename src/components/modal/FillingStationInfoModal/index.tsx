import React from 'react';
import {Icon, Modal, Text, Pressable, View, SubButton, MainButton} from '@components';
import {colors, height, width} from '@constants';
import {useCallback} from '@hooks';
import {TFillingStationData} from '@types';
import styles from './styles';

type TProps = {
  isVisible: boolean;
  setClose: (value: boolean) => void;
  fillingStationData: TFillingStationData | null;
  setSelectedFillingStation: (data: TFillingStationData | null) => void;
};
const FillingStationInfoModal: React.FC<TProps> = ({
  isVisible,
  setClose,
  fillingStationData,
  setSelectedFillingStation,
}) => {
  const onCloseModal = useCallback(() => {
    setSelectedFillingStation(null);
    setClose(false);
  }, []);

  const onPressRoute = useCallback(() => {}, []);

  const onPressDetails = useCallback(() => {}, []);

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={500}
      animationOutTiming={500}
      backdropOpacity={0.5}
      hideModalContentWhileAnimating={true}
      useNativeDriverForBackdrop={true}
      deviceWidth={width}
      coverScreen={false}
      deviceHeight={height}
      style={styles.modalContainer}
      useNativeDriver={true}>
      <View style={styles.container}>
        <View style={styles.headerModalContainer}>
          <Text style={styles.title}>{fillingStationData?.name}</Text>
          <Pressable onPress={onCloseModal}>
            <Icon name="Close" size={24} color={colors.black_000000} />
          </Pressable>
        </View>
        <View style={styles.mainContentContainer}>
          <Icon name="Map-Pin" size={24} color={colors.main_black_1B1B1B} />
          <Text style={styles.addressDescription}>{fillingStationData?.address}</Text>
        </View>
        <View style={styles.tabBarContainer}>
          <SubButton title={'Деталі'} onPress={onPressDetails} buttonStyle={styles.button}>
            <Icon name="Map" size={24} color={colors.black_000000} style={styles.icon} />
          </SubButton>
          <MainButton title={'Маршрут'} onPress={onPressRoute} buttonStyle={styles.button}>
            <Icon name="Location" size={24} color={colors.white_FFFFFF} style={styles.icon} />
          </MainButton>
        </View>
      </View>
    </Modal>
  );
};

export default FillingStationInfoModal;
