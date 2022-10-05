import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {HeaderBackButton, Wrapper} from '@components';
import {selectGlobal} from '@reducers/global';
import {
  Calculator,
  Onboarding, // ADD NEW SCREEN
} from '@screens';
import {navigationRef, onStateChange} from '@services';
import TabNavigator from './TabNavigator';
import {AuthNavigator} from './stacks/authNavigator';
import {FillingStationsStackNavigator} from './stacks/fillingStationsNavigator';
import styles from './styles';

const RootStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const {token, firstOpenApp} = useSelector(selectGlobal);

  return (
    <Wrapper>
      <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          {firstOpenApp ? (
            <RootStack.Screen name={'Onboarding'} component={Onboarding} options={{headerShown: false}} />
          ) : token ? (
            <>
              <RootStack.Screen name="TabNavigator" component={TabNavigator} />
              <RootStack.Screen
                name="Calculator"
                component={Calculator}
                options={{
                  title: 'Калькулятор пального',
                  headerStyle: styles.headerStyle,
                  headerTitleStyle: styles.headerTitleStyle,
                  headerTitleAlign: 'center',
                  headerLeft: () => <HeaderBackButton />,
                }}
              />
              <RootStack.Screen name="FillingStationsStackNavigator" component={FillingStationsStackNavigator} />
            </>
          ) : (
            <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </Wrapper>
  );
};

export default AppNavigator;
