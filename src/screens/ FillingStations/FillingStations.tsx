import React from 'react';
import {View, Tabs} from '@components';
import {useRoute, useCallback} from '@hooks';
import {HomeRouteProp} from '@types';
import {Search, StationsList, StationsMap} from './components';
import styles from './styles';

const FillingStations: React.FC = () => {
  const {params} = useRoute<HomeRouteProp>();


  const FirstTabComponent = useCallback(() => <StationsMap />, []);

  const SecondTabComponent = useCallback(
    () => (
      <View style={styles.secondTabContainer}>
        <Search />
        <StationsList />
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Tabs
        FirstTabComponent={FirstTabComponent}
        SecondTabComponent={SecondTabComponent}
        firstTitle={'Карта'}
        secondTitle={'Список'}
      />
    </View>
  );
};

export default FillingStations;
