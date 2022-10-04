import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton, HeaderRightSupportButton, Icon} from '@components';
import {SignIn, SignUpMarshalCard, SignUpPersonalData} from '@screens';
import styles from '../styles';

const AuthStack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        gestureEnabled: false,
        headerTitleStyle: styles.headerTitleStyle,
        title: 'Початок роботи',
        headerTitleAlign: 'center',
      }}>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerRight: HeaderRightSupportButton,
        }}
      />
      <AuthStack.Screen
        name="SignUpPersonalData"
        component={SignUpPersonalData}
        options={{
          headerRight: HeaderRightSupportButton,
          headerLeft: () => <HeaderBackButton />,
        }}
      />
      <AuthStack.Screen
        name="SignUpMarshalCard"
        component={SignUpMarshalCard}
        options={{
          headerRight: HeaderRightSupportButton,
          headerLeft: () => <HeaderBackButton />,
        }}
      />
    </AuthStack.Navigator>
  );
};
