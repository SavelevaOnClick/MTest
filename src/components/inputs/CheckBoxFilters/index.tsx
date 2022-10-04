import React from 'react';
import {Icon, Pressable, Text} from '@components';
import {colors} from '@constants';
import {useMemo} from '@hooks';
import styles from './styles';

type TProps = {
  isChecked: boolean;
  name: string;
  setIsChecked: () => void;
};

const CheckBoxFilters: React.FC<TProps> = ({isChecked, name, setIsChecked}) => {
  const textStyle = useMemo(() => [styles.title, isChecked && styles.titleActive], [isChecked]);
  return (
    <Pressable style={styles.container} onPress={setIsChecked}>
      <Text style={textStyle}>{name}</Text>
      <Icon name="TypeCheck" size={24} color={isChecked ? colors.green_icon_00AE36 : colors.grey_check_box_DADBDF} />
    </Pressable>
  );
};

export default CheckBoxFilters;
