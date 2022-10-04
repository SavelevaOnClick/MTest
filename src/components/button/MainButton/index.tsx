import React from 'react';
import {LinearGradient, Pressable, Text} from '@components';
import {gradients} from '@constants';
import {useMemo} from '@hooks';
import {StyleProp, ViewStyle} from '@types';
import styles from './styles';

const START = {
  x: 0,
  y: 0,
};

type TProps = {
  disabled?: boolean;
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const MainButton: React.FC<TProps> = ({title, onPress, disabled = false, buttonStyle = {}, children}) => {
  const buttonContainerStyle = useMemo(() => [styles.container, buttonStyle], [buttonStyle]);

  return (
    <LinearGradient
      start={START}
      style={buttonContainerStyle}
      colors={disabled ? gradients.main_button_disabled : gradients.main_button}>
      <Pressable disabled={disabled} onPress={onPress} style={styles.contentContainer}>
        {children}
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default MainButton;
