import React from 'react';
import {useCallback} from '@hooks';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '@components';
import {CalculatorStackNavigator} from './stacks/calculatorNavigator';
import {HomeStackNavigator} from './stacks/homeNavigator';

const TabStack = createBottomTabNavigator();

type TProps = {};

const TabNavigator: React.FC<TProps> = () => {
  const tabBarRender = useCallback((prop: BottomTabBarProps) => <TabBar {...prop} />, []);
  return (
    <TabStack.Navigator initialRouteName={'MainStack'} screenOptions={{headerShown: false}} tabBar={tabBarRender}>
      <TabStack.Screen name={'HomeNavigator'} component={HomeStackNavigator} />
      <TabStack.Screen name={'CalculatorStackNavigator'} component={CalculatorStackNavigator} />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
