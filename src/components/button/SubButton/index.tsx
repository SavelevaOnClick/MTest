import React from 'react';
import {Text, Pressable} from '@components';
import {useMemo} from '@hooks';
import {StyleProp, ViewStyle} from '@types';
import styles from './styles';

type TProps = {
  disabled?: boolean;
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const SubButton: React.FC<TProps> = ({disabled, title, onPress, buttonStyle = {}, children}) => {
    const buttonContainerStyle = useMemo(() => [styles.container, buttonStyle], [buttonStyle]);
  return (
    <Pressable onPress={onPress} disabled={disabled} style={buttonContainerStyle}>
      {children}
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default SubButton;
