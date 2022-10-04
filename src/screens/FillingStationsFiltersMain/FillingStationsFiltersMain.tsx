import React from 'react';
import {View, Text, Pressable, LabeledInput, MainButton, CheckBoxFilters, HeaderBackButton} from '@components';
import {FUELS} from '@constants';
import {
  useCallback,
  useLayoutEffect,
  useRoute,
  useNavigation,
  useAppSelector,
  useAppDispatch,
  useFind,
  useFormattedRegionsValue,
} from '@hooks';
import {setFuels, setRegions} from '@reducers/fillingStations';
import {goBack, navigate} from '@services';
import {EInputTypes, FillingStationsFiltersMainRouteProp, TFuelData} from '@types';
import styles from './styles';

const FillingStationsFiltersMain: React.FC = () => {
  const {params} = useRoute<FillingStationsFiltersMainRouteProp>();
  const {setOptions} = useNavigation();
  const dispatch = useAppDispatch();

  const {searchFuels, searchValue, searchRegions} = useAppSelector(state => state.fillingStations);
  const fillingStations = useFind(searchValue, searchFuels, searchRegions);
  const regionsFormattedValue = useFormattedRegionsValue(searchRegions);

  const selectedFuels = useCallback(
    (value: TFuelData) => () => {
      searchFuels.includes(value)
        ? dispatch(setFuels(searchFuels.filter(fuel => fuel.id !== value.id)))
        : dispatch(setFuels([...searchFuels, value]));
    },
    [searchFuels],
  );

  const onPressResetFilters = useCallback(() => {
    dispatch(setFuels([]));
    dispatch(setRegions([]));
  }, []);

  const onPressBack = useCallback(() => {
    dispatch(setRegions([]));
    dispatch(setFuels([]));
    goBack();
  }, []);

  const ResetFiltersButton = useCallback(() => {
    return (
      <Pressable onPress={onPressResetFilters}>
        <Text style={styles.resetButtonTitle}>Очистити</Text>
      </Pressable>
    );
  }, []);

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => <ResetFiltersButton />,
      headerLeft: () => <HeaderBackButton onPress={onPressBack} />,
    });
  }, []);

  const onPressSelectedRegions = useCallback(() => navigate('FillingStationsFiltersSubRegions'), []);

  const onPressSelectedFilters = useCallback(() => goBack(), []);

  return (
    <View style={styles.container}>
      <View style={styles.blockContainer}>
        <View style={styles.blockItemContainer}>
          <Text style={styles.title}>Області</Text>
        </View>
        <LabeledInput
          editable={false}
          value={regionsFormattedValue}
          inputType={EInputTypes.ARROW_RIGHT}
          inputStyle={styles.leftIdent}
          onPress={onPressSelectedRegions}
        />
      </View>
      <View style={styles.blockContainer}>
        <View style={styles.blockItemContainer}>
          <Text style={styles.title}>Типи пального</Text>
        </View>
        {FUELS.map(fuel => (
          <CheckBoxFilters
            isChecked={!!searchFuels.find(item => item.name === fuel.name)}
            name={fuel.name}
            key={fuel.name}
            setIsChecked={selectedFuels(fuel)}
          />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {searchRegions.length || searchFuels.length ? (
          <MainButton
            title={`Показати результати (${fillingStations.length})`}
            onPress={onPressSelectedFilters}
            buttonStyle={styles.blockContainer}
          />
        ) : null}
      </View>
    </View>
  );
};

export default FillingStationsFiltersMain;
