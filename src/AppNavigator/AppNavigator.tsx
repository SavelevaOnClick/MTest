import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {Wrapper} from '@components';
import {selectGlobal} from '@reducers/global';
import {
  FillingStationsFiltersSubRegions,
  Onboarding, // ADD NEW SCREEN
} from '@screens';
import {navigationRef, onStateChange} from '@services';
import TabNavigator from './TabNavigator';
import {AuthNavigator} from './stacks/authNavigator';

const RootStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const dispatch = useDispatch();
  const {token, firstOpenApp} = useSelector(selectGlobal);

  return (
    <Wrapper>
      <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
        <RootStack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
          {firstOpenApp ? (
            <RootStack.Screen name={'Onboarding'} component={Onboarding} options={{headerShown: false}} />
          ) : token ? (
            <RootStack.Screen name="TabNavigator" component={TabNavigator} />
          ) : (
            <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </Wrapper>
  );
};

export default AppNavigator;
