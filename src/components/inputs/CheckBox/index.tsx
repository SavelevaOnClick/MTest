import React from 'react';
import {Icon, Pressable, Text, View} from '@components';
import {colors} from '@constants';
import {useMemo} from '@hooks';
import {StyleProp, ViewStyle} from '@types';
import styles from './styles';

type TLabeledCheckboxProps = {
  label: string;
  isChecked: boolean;
  setIsChecked: () => void;
  style?: StyleProp<ViewStyle>;
};
const CheckBox: React.FC<TLabeledCheckboxProps> = ({label, isChecked, setIsChecked, style = {}}) => {

  const containerStyle = useMemo(() => [styles.container, style], []);

  return (
    <Pressable onPress={setIsChecked} style={containerStyle}>
      <Icon
        name={isChecked ? 'Radiobutton' : 'Radiobutton-Empty'}
        size={24}
        color={colors.main_black_1B1B1B}
        style={styles.checkBox}
      />
      <View style={styles.flexContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default CheckBox;
