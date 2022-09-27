import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton} from '@components';
import {Calculator, CalculatorChangePlaces} from '@screens';
import styles from '../styles';

const CalculatorStack = createNativeStackNavigator();

export const CalculatorStackNavigator: React.FC = () => {
  return (
    <CalculatorStack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        gestureEnabled: false,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: 'center',
      }}>
      <CalculatorStack.Screen
        name="CalculatorChangePlaces"
        component={CalculatorChangePlaces}
        options={{
          title: 'Калькулятор пального',
        }}
      />
      <CalculatorStack.Screen
        name="Calculator"
        component={Calculator}
        options={{
          title: 'Калькулятор пального',
          headerLeft: HeaderBackButton,
        }}
      />
    </CalculatorStack.Navigator>
  );
};
