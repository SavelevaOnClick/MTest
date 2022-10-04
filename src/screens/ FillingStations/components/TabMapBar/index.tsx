import React from 'react';
import {Icon, Pressable, View} from '@components';
import {colors} from '@constants';
import styles from './styles';

type TProps = {
  mapZoomIn: () => void;
  mapZoomOut: () => void;
  currentGeolocation: () => void;
};

const TabMapBar: React.FC<TProps> = ({mapZoomIn, mapZoomOut, currentGeolocation}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={mapZoomIn} style={styles.zoomInContainer}>
        <Icon name="Plus" size={24} color={colors.black_000000} />
      </Pressable>
      <Pressable onPress={mapZoomOut} style={styles.zoomOutContainer}>
        <Icon name="TypeMinus" size={24} color={colors.black_000000} />
      </Pressable>
      <Pressable style={styles.geolocationContainer} onPress={currentGeolocation}>
        <Icon name="Location" size={24} color={colors.white_FFFFFF} />
      </Pressable>
    </View>
  );
};

export default TabMapBar;
