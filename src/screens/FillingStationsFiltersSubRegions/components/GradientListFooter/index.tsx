import React from 'react';
import {LinearGradient, View} from '@components';
import {colors} from '@constants';
import styles from './styles';

const GradientListFooter: React.FC = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['transparent', colors.white_FFFFFF]} style={styles.gradient} />
    </View>
  );
};

export default GradientListFooter;
