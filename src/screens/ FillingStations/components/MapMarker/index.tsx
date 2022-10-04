import React from 'react';
import {assets} from '@assets';
import {Image, View} from '@components';
import styles from './styles';

type TProps = {};

const MapMarker: React.FC<TProps> = () => {
  return (
    <View style={styles.container}>
      <Image source={assets.img.LOGO_MARKER} style={styles.markerImage} />
    </View>
  );
};

export default MapMarker;
