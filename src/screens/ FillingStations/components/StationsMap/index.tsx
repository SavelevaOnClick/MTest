import {MAP_KEY} from '@env';
import {checkGeolocationPermission} from '@utils';
import React from 'react';
import Map from 'react-native-map-clustering';
import MapView, {Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import {FillingStationInfoModal, Geolocation, Geocoder, Alert} from '@components';
import {height, width} from '@constants';
import {useState, useRef, useAppSelector, useFind, useEffect} from '@hooks';
import {TFillingStationData} from '@types';
import styles from '../../styles';
import MapMarker from '../MapMarker';
import TabMapBar from '../TabMapBar';

type TProps = {};
const initialRegion = {
  latitude: 48.3794,
  longitude: 31.1656,
  latitudeDelta: 4,
  longitudeDelta: 4,
};

Geocoder.init(MAP_KEY, {language: 'ru'});
const {getCurrentPosition} = Geolocation;
const aspectRatio = height / width;

const StationsMap: React.FC<TProps> = () => {
  const {searchValue, searchFuels, searchRegions} = useAppSelector(state => state.fillingStations);
  const fillingStationsData = useFind(searchValue, searchFuels, searchRegions);
  const mapRef = useRef<MapView>(null);


  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [region, setRegion] = useState<Region>(initialRegion);
  const [selectedFillingStation, setSelectedFillingStation] = useState<TFillingStationData | null>(null);

  const getLocation = async () => {
    const hasPermission = await checkGeolocationPermission();
    if (hasPermission) {
      getCurrentPosition(position => {
        Geocoder.from({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }).then(decodePosition => {
          mapRef?.current?.animateToRegion(
            {
              ...region,
              longitude: decodePosition.results[0].geometry.location.lng,
              latitude: decodePosition.results[0].geometry.location.lat,
            },
            1000,
          );
        });
      });
    } else {
      Alert.alert('', 'Нет разрешений на геолокацию');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const mapZoomIn = () => {
    mapRef?.current?.animateToRegion(
      {
        ...region,
        latitudeDelta: region.latitudeDelta / aspectRatio,
        longitudeDelta: region.longitudeDelta / aspectRatio,
      },
      200,
    );
  };

  const mapZoomOut = () => {
    console.log('zoom -');
    mapRef?.current?.animateToRegion(
      {
        ...region,
        latitudeDelta: region.latitudeDelta * aspectRatio,
        longitudeDelta: region.longitudeDelta * aspectRatio,
      },
      200,
    );
  };

  const onPressMarker = (fillingData: TFillingStationData) => () => {
    mapRef.current?.animateToRegion({
      ...region,
      longitude: +fillingData.long,
      latitude: +fillingData.lat,
    });
    setIsVisible(true);
    setSelectedFillingStation(fillingData);
  };

  return (
    <>
      <Map
        initialRegion={region}
        style={styles.container}
        ref={mapRef}
        maxZoom={17}
        animationEnabled
        onRegionChangeComplete={props => setRegion(props)}
        provider={PROVIDER_GOOGLE}>
        {fillingStationsData.map(station => (
          <Marker
            coordinate={{
              latitude: +station.lat,
              longitude: +station.long,
            }}
            // tracksViewChanges={false}
            onPress={onPressMarker(station)}
            key={station.address}>
            <MapMarker />
          </Marker>
        ))}
      </Map>
      <TabMapBar mapZoomIn={mapZoomIn} mapZoomOut={mapZoomOut} currentGeolocation={getLocation} />
      <FillingStationInfoModal
        setSelectedFillingStation={setSelectedFillingStation}
        isVisible={isVisible}
        setClose={setIsVisible}
        fillingStationData={selectedFillingStation}
      />
    </>
  );
};

export default StationsMap;
