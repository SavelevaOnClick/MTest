import React, {useCallback, useEffect} from 'react';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainActivityIndicator, TabNavBar} from '@components';
import {useAppDispatch, useAppSelector} from '@hooks';
import {initial} from '@reducers/additional';
import {CalculatorChangePlaces, FillingStations} from '@screens';
import styles from './styles';

const TabStack = createBottomTabNavigator();

type TProps = {};

const TabNavigator: React.FC<TProps> = () => {
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.global);
  const {loading} = useAppSelector(state => state.additional);

  useEffect(() => {
    if (token) {
      dispatch(initial());
    }
  }, [token]);

  const tabBarRender = useCallback((prop: BottomTabBarProps) => <TabNavBar {...prop} />, []);
  return (
    <>
      {loading ? (
        <MainActivityIndicator />
      ) : (
        <TabStack.Navigator
          initialRouteName={'MainStack'}
          tabBar={tabBarRender}
          screenOptions={{
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerTitleAlign: 'center',
          }}>
          <TabStack.Screen name={'FillingStations'} component={FillingStations} options={{headerShown: false}} />
          <TabStack.Screen
            name={'CalculatorChangePlaces'}
            component={CalculatorChangePlaces}
            options={{
              title: 'Калькулятор пального',
            }}
          />
        </TabStack.Navigator>
      )}
    </>
  );
};

export default TabNavigator;
