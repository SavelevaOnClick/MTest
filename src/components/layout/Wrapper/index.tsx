import React from 'react';
import {SupportModal, View} from '@components';
import styles from './styles';

type TProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<TProps> = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      <SupportModal />
    </View>
  );
};

export default Wrapper;
