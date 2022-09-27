import React from 'react';
import {CheckBox, FlatList, Icon, Modal, Pressable, Text, View} from '@components';
import {colors, GENDER_DATA, height, width} from '@constants';
import {useCallback} from '@hooks';
import {genderData} from '@types';
import styles from './styles';

type TProps = {
  setClose: (value: boolean) => void;
  setGender: (value: genderData) => void;
  isVisible: boolean;
  value?: genderData;
};

const GenderModal: React.FC<TProps> = ({setClose, isVisible, value, setGender}) => {
  const onPressCheckBox = useCallback(
    (value: genderData) => () => {
      setGender(value);
      setClose(false);
    },
    [value],
  );

  const onPressClose = useCallback(() => setClose(false), []);

  const keyExtractor = useCallback((item: genderData) => item.data, []);

  const renderItem = useCallback(
    ({item}: {item: genderData}) => {
      return (
        <CheckBox
          label={item.label}
          isChecked={item.data === value?.data}
          setIsChecked={onPressCheckBox(item)}
          style={styles.checkBoxContainer}
        />
      );
    },
    [value],
  );

  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={400}
      animationOutTiming={400}
      backdropOpacity={0.5}
      hideModalContentWhileAnimating={true}
      useNativeDriverForBackdrop={true}
      deviceWidth={width}
      deviceHeight={height}
      style={styles.modalContainer}
      useNativeDriver={true}>
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Стать:</Text>
          <Pressable onPress={onPressClose}>
            <Icon name="Close" size={24} color={colors.black_000000} />
          </Pressable>
        </View>
        <FlatList
          data={GENDER_DATA}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
};

export default GenderModal;
