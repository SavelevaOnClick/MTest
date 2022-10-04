import React from 'react';
import {View, Text, Pressable, CheckBoxFilters, MainButton, ScrollView} from '@components';
import {
  useState,
  useCallback,
  useTranslation,
  useRoute,
  useLayoutEffect,
  useNavigation,
  useAppDispatch,
  useAppSelector,
} from '@hooks';
import {setRegions} from '@reducers/fillingStations';
import {goBack} from '@services';
import {FillingStationsFiltersSubRegionsRouteProp} from '@types';
import styles from './styles';

const FillingStationsFiltersSubRegions: React.FC = () => {
  const {t} = useTranslation();
  const {params} = useRoute<FillingStationsFiltersSubRegionsRouteProp>();
  const {setOptions} = useNavigation();
  const dispatch = useAppDispatch();

  const {regions, searchRegions} = useAppSelector(state => state.fillingStations);
  const [selectedRegions, setSelectedRegions] = useState<string[]>(searchRegions);

  const onPressResetFilters = useCallback(() => {
    setSelectedRegions([]);
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
    });
  }, []);

  const onPressSelectedRegion = useCallback(
    (name: string) => () => {
      selectedRegions.includes(name)
        ? setSelectedRegions(selectedRegions.filter(region => region !== name))
        : setSelectedRegions([...selectedRegions, name]);
    },
    [selectedRegions],
  );

  const onPressSelectedRegions = useCallback(() => {
    dispatch(setRegions(selectedRegions));
    goBack();
  }, [selectedRegions]);

  return (
    <View style={styles.container}>
      <View style={styles.blockItemContainer}>
        <Text style={styles.title}>Області</Text>
      </View>
      <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
        {regions.map(region => {
          return (
            <CheckBoxFilters
              key={region.region}
              isChecked={selectedRegions.includes(region.region)}
              name={region.region}
              setIsChecked={onPressSelectedRegion(region.region)}
            />
          );
        })}
      </ScrollView>
      {/* <GradientListFooter /> */}
      <View style={styles.mainButtonContainer}>
        <MainButton title={'Обрати'} buttonStyle={styles.mainButton} onPress={onPressSelectedRegions} />
      </View>
    </View>
  );
};

export default FillingStationsFiltersSubRegions;
