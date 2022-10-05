import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton} from '@components';
import {FillingStations, FillingStationsFiltersMain, FillingStationsFiltersSubRegions} from '@screens';
import styles from '../styles';

const FillingStationsStack = createNativeStackNavigator();

export const FillingStationsStackNavigator: React.FC = () => {
  return (
    <FillingStationsStack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        gestureEnabled: false,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: 'center',
      }}>
      <FillingStationsStack.Screen
        name="FillingStationsFiltersMain"
        component={FillingStationsFiltersMain}
        options={{
          title: 'Фільтри',
          headerLeft: () => <HeaderBackButton />,
        }}
      />
      <FillingStationsStack.Screen
        name="FillingStationsFiltersSubRegions"
        component={FillingStationsFiltersSubRegions}
        options={{
          title: 'Фільтри',
          headerLeft: () => <HeaderBackButton />,
        }}
      />
    </FillingStationsStack.Navigator>
  );
};
