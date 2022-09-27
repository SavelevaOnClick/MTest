import {MAP_KEY} from '@env';
import React from 'react';
import {ActivityIndicator, DropShadow, Icon, MapViewDirections, Pressable, showLocation, Text, View} from '@components';
import {colors} from '@constants';
import {useState, useCallback, useMemo} from '@hooks';
import {MapDirectionsResponse, TAddressData} from '@types';
import styles from './styles';

type TProps = {
  addressFrom: TAddressData;
  addressTo: TAddressData;
  fuelConsumption: string;
};

const RouteCard: React.FC<TProps> = ({addressFrom, addressTo, fuelConsumption}) => {
  const [distance, setDistance] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const origin = useMemo(
    () => ({
      latitude: addressFrom.location!.lat,
      longitude: addressFrom.location!.lng,
    }),
    [],
  );

  const destination = useMemo(
    () => ({
      latitude: addressTo.location!.lat,
      longitude: addressTo.location!.lng,
    }),
    [],
  );

  const fuel = useMemo(() => (distance ? ((Number(fuelConsumption) / 100) * distance).toFixed(2) : null), [distance]);

  const onReadyDistance = useCallback((mapResp: MapDirectionsResponse) => {
    setDistance(mapResp.distance);
    setIsLoading(false);
  }, []);

  const onErrorDistance = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onPressMapRoute = useCallback(() => {
    showLocation({
      latitude: addressTo.location!.lat,
      longitude: addressTo.location!.lng,
      sourceLatitude: addressFrom.location!.lat,
      sourceLongitude: addressFrom.location!.lng,
    });
  }, [addressFrom, addressTo]);

  return (
    <>
      <DropShadow style={styles.shadow}>
        <View style={styles.containerCard}>
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.green_icon_00AE36} />
          ) : distance ? (
            <View style={styles.infoContainer}>
              <View style={styles.informationSideContainer}>
                <Text>М03</Text>
                <Text style={styles.information}>
                  {distance} км / {fuel} л
                </Text>
              </View>
              <View style={styles.tabSideContainer}>
                <Pressable style={styles.routeButton} onPress={onPressMapRoute}>
                  <Icon name="Route" size={16} color={colors.green_icon_00AE36} />
                </Pressable>
                <Text style={styles.routeButtonTitle}>Маршрут</Text>
              </View>
            </View>
          ) : (
            <Text>Не знайдено жодного маршрута</Text>
          )}
        </View>
      </DropShadow>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={MAP_KEY}
        onReady={onReadyDistance}
        onError={onErrorDistance}
      />
    </>
  );
};

export default RouteCard;
