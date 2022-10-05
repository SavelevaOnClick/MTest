import React from 'react';
import {assets} from '@assets';
import {Image, Marker, View} from '@components';
import {useState, useCallback} from '@hooks';
import {LatLng} from '@types';
import styles from './styles';

type TProps = {
  onPressHandler: () => void;
  coordinate: LatLng;
};

const CustomMarker: React.FC<TProps> = ({onPressHandler, coordinate}) => {
  const [tracksViewChanges, setTracksViewChanges] = useState<boolean>(false);

  const onLoadEndImage = useCallback(() => setTracksViewChanges(true), []);

  console.log(tracksViewChanges)
  return (
    <Marker coordinate={coordinate} tracksViewChanges={tracksViewChanges} onPress={onPressHandler}>
      <View style={styles.container}>
        <Image source={assets.img.LOGO_MARKER} style={styles.markerImage} onLoadEnd={onLoadEndImage} />
      </View>
    </Marker>
  );
};

export default CustomMarker;
