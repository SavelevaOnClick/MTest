import React from 'react';
import {View, Text, Icon, MainButton} from '@components';
import {colors} from '@constants';
import {useCallback, useTranslation, useRoute} from '@hooks';
import {CalculatorRouteProp} from '@types';
import {RouteCard} from './components';
import styles from './styles';

const Calculator: React.FC = () => {
  const {t} = useTranslation();
  const {params} = useRoute<CalculatorRouteProp>();
 console.log(params, 'rrr')
  const onPressBuyFuel = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.addressesContainer}>
        <View style={styles.marksContainer}>
          <View style={styles.mainCircle}>
            <View style={styles.circle} />
          </View>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.mainCircle}>
            <View style={styles.circle} />
          </View>
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.addressFrom}>{params.addressFrom.address}</Text>
          <Text style={styles.addressTo}>{params.addressTo.address}</Text>
        </View>
      </View>
      <View style={styles.fuelContainer}>
        <Icon name="Map-Pin" color={colors.green_icon_00AE36} size={24} />
        <View>
          <Text style={styles.fuelInfo}>{params.fuelConsumption}л / 100 км</Text>
        </View>
      </View>
      <RouteCard
        addressFrom={params.addressFrom}
        addressTo={params.addressTo}
        fuelConsumption={params.fuelConsumption}
      />
      <View style={styles.buttonContainer}>
        <MainButton title={'Купити пальне'} onPress={onPressBuyFuel} buttonStyle={styles.button} />
      </View>
    </View>
  );
};

export default Calculator;
