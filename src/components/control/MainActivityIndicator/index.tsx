import { ActivityIndicator, View } from '@components';
import { colors } from '@constants';
import React from 'react';
import styles from './styles';

const MainActivityIndicator: React.FC = () => {
    return (
        <View style={styles.container}>
        <ActivityIndicator size={'large'} color={colors.green_icon_00AE36} />
      </View>
    )
};

export default MainActivityIndicator;