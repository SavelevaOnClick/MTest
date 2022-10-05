import {MAP_KEY} from '@env';
import {checkGeolocationPermission, formattingGoogleAddressData} from '@utils';
import React from 'react';
import {View, LabeledInput, Text, MainButton, Geocoder, GooglePlacesAutocomplete, Geolocation} from '@components';
import {EMPTY_ADDRESS_DATA, GOOGLE_AUTOCOMPLETE_PARAMS} from '@constants';
import {useEffect, useState, useCallback, useMemo, useRoute, useRef} from '@hooks';
import {navigate} from '@services';
import {
  AddressComponent,
  CalculatorRouteProp,
  EAddress,
  EInputTypes,
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
  TAddressData,
} from '@types';
import styles from './styles';

Geocoder.init(MAP_KEY, {language: 'ru'});
const {getCurrentPosition} = Geolocation;

const CalculatorChangePlaces: React.FC = () => {
  //   const {t} = useTranslation();
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const {params} = useRoute<CalculatorRouteProp>();
  const [fuelConsumption, setFuelConsumption] = useState<string>('');
  const [addressFrom, setAddressFrom] = useState<TAddressData>(EMPTY_ADDRESS_DATA);
  const [addressTo, setAddressTo] = useState<TAddressData>(EMPTY_ADDRESS_DATA);
  const refAddressTo = useRef<GooglePlacesAutocompleteRef>(null);
  const refAddressFrom = useRef<GooglePlacesAutocompleteRef>(null);

  useEffect(() => {
    refAddressTo.current?.setAddressText(addressTo.address);
    refAddressTo.current?.setAddressText(addressFrom.address);
  }, []);

  useEffect(() => {
    checkGeolocationPermission().then(response => setHasPermission(response));
  }, []);

  const onChangeText = useCallback(
    (type: EAddress) => (text: string) => {
      if (!text) {
        type === EAddress.FROM ? setAddressFrom(EMPTY_ADDRESS_DATA) : setAddressTo(EMPTY_ADDRESS_DATA);
        return;
      }
      type === EAddress.FROM
        ? setAddressFrom({...addressFrom, address: text})
        : setAddressTo({...addressTo, address: text});
    },
    [addressFrom, addressTo],
  );

  const onSelectAddress = useCallback(
    (type: EAddress) => (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
      if (details) {
        const addressData = {
          address: formattingGoogleAddressData(details.address_components),
          location: details?.geometry.location,
        };
        type === EAddress.FROM ? setAddressFrom(addressData) : setAddressTo(addressData);
      }
    },
    [],
  );

  const onPressGetCurrentLocation = useCallback(async () => {
    const hasPermission = await checkGeolocationPermission();
    if (hasPermission) {
      getCurrentPosition(position => {
        Geocoder.from({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }).then(decodePosition => {
          refAddressFrom.current?.focus();
          setAddressFrom({
            address: formattingGoogleAddressData(decodePosition.results[0].address_components as AddressComponent[]),
            location: decodePosition.results[0].geometry.location,
          });
        });
      });
    }
  }, []);

  const onPressCleanFuel = useCallback(() => {
    setFuelConsumption('');
  }, [fuelConsumption]);

  const disabledMainButton = useMemo(
    () => !addressFrom.location || !addressTo.location || !fuelConsumption,
    [addressFrom.location, addressTo.location, fuelConsumption],
  );

  const onPressCalculate = useCallback(() => {
    console.log(addressFrom, addressTo)
    navigate('Calculator', {
      addressFrom,
      addressTo,
      fuelConsumption,
    });
  }, [addressFrom, addressTo, fuelConsumption]);

  return (
    <View style={styles.container}>
      <View style={styles.firstGoogleAutocompleteContainer}>
        <GooglePlacesAutocomplete
          query={GOOGLE_AUTOCOMPLETE_PARAMS}
          onPress={onSelectAddress(EAddress.FROM)}
          ref={refAddressFrom}
          styles={{
            listView: styles.autocompleteList,
          }}
          placeholder={''}
          debounce={200}
          enablePoweredByContainer={false}
          fetchDetails={true}
          textInputProps={{
            InputComp: LabeledInput,
            label: 'Пункт відправлення',
            inputType: hasPermission ? EInputTypes.LOCATION : undefined,
            onPress: onPressGetCurrentLocation,
            onChangeText: onChangeText(EAddress.FROM),
            value: addressFrom.address,
            inputStyle: styles.flexContainer,
          }}
        />
      </View>
      <View style={styles.secondGoogleAutocompleteContainer}>
        <GooglePlacesAutocomplete
          query={GOOGLE_AUTOCOMPLETE_PARAMS}
          onPress={onSelectAddress(EAddress.TO)}
          ref={refAddressTo}
          styles={{
            listView: styles.autocompleteList,
          }}
          placeholder={''}
          debounce={200}
          enablePoweredByContainer={false}
          fetchDetails={true}
          textInputProps={{
            InputComp: LabeledInput,
            label: 'Пункт прибуття',
            onChangeText: onChangeText(EAddress.TO),
            value: addressTo.address,
            inputStyle: styles.flexContainer,
          }}
        />
      </View>
      <View style={styles.fuelDataContainer}>
        <LabeledInput
          label={'Витрати пального'}
          value={fuelConsumption}
          onChangeText={setFuelConsumption}
          inputStyle={[styles.fuelInput, {flex: 1}]}
          keyboardType="numeric"
          inputType={fuelConsumption ? EInputTypes.DELETE : undefined}
          onPress={onPressCleanFuel}
        />
        <Text>л/100 км</Text>
      </View>
      <View style={styles.mainButtonContainer}>
        <MainButton
          title={'Розрахувати'}
          onPress={onPressCalculate}
          disabled={disabledMainButton}
          buttonStyle={styles.mainButton}
        />
      </View>
    </View>
  );
};

export default CalculatorChangePlaces;
