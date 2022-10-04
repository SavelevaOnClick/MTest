import React, {useCallback, useEffect} from 'react';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainActivityIndicator, TabNavBar, View} from '@components';
import {useAppDispatch, useAppSelector} from '@hooks';
import {initial, setLoading} from '@reducers/additional';
import {CalculatorStackNavigator} from './stacks/calculatorNavigator';
import {FillingStationsStackNavigator} from './stacks/fillingStationsNavigator';

const TabStack = createBottomTabNavigator();

type TProps = {};

const TabNavigator: React.FC<TProps> = () => {
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.global);
  const {loading} = useAppSelector(state => state.additional);

  useEffect(() => {
    if (token) {
      dispatch(initial());
      // dispatch(setLoading(false))
    }
  }, [token]);

  const tabBarRender = useCallback(
    (prop: BottomTabBarProps) => (prop.state.routes[prop.state.index].state?.index ? null : <TabNavBar {...prop} />),
    [],
  );
  return (
    <>
      {loading ? (
        <MainActivityIndicator />
      ) : (
        <TabStack.Navigator initialRouteName={'MainStack'} tabBar={tabBarRender} screenOptions={{headerShown: false}}>
          <TabStack.Screen name={'FillingStationsStack'} component={FillingStationsStackNavigator} />
          <TabStack.Screen name={'CalculatorStack'} component={CalculatorStackNavigator} />
        </TabStack.Navigator>
      )}
    </>
  );
};

export default TabNavigator;
