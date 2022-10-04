import React from 'react';
import {assets} from '@assets';
import {FlatList, Icon, Image, Pressable, Text, TextInput, View} from '@components';
import {colors} from '@constants';
import {useCallback, useFind, useAppSelector} from '@hooks';
import {TFillingStationData} from '@types';
import styles from './styles';

type TProps = {};

const StationsList: React.FC<TProps> = () => {
  const {searchValue, searchFuels, searchRegions, regions} = useAppSelector(state => state.fillingStations);
  const fillingStationsData = useFind(searchValue, searchFuels, searchRegions);

  const renderItem = useCallback(
    ({item}: {item: TFillingStationData}) => (
      <View style={styles.itemContainer}>
        <View style={styles.logoContainer}>
          <Image source={assets.img.LOGO_MARKER} style={styles.logo} />
        </View>
        <View style={styles.itemContentContainer}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.mainContent}>{item.address}</Text>
        </View>
        <View style={styles.routeSideContainer}>
          <Pressable style={styles.routeButton} onPress={() => {}}>
            <Icon name="Route" size={16} color={colors.green_icon_00AE36} />
          </Pressable>
          <Text style={styles.routeButtonTitle}>Маршрут</Text>
        </View>
      </View>
    ),
    [],
  );

  const keyExtractor = useCallback((item: TFillingStationData) => item.id.toString(), []);

  const separator = useCallback(() => <View style={styles.separator} />, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={fillingStationsData}
        ItemSeparatorComponent={separator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default StationsList;
