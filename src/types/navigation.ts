import {RouteProp} from '@react-navigation/native';
import { TAddressData } from './components';

export type RootStackParamList = {
  // SCREEN PARAMS
Calculator: {
  addressFrom: TAddressData,
  addressTo: TAddressData,
  fuelConsumption: string,
}
SignUpMarshalCard: undefined
SignUpPersonalData: undefined
TechnicalSupport: undefined
  Onboarding: undefined
  SignIn: undefined;
  Home: undefined;
};
// EXPORT SCREEN PARAMS
export type CalculatorRouteProp = RouteProp<RootStackParamList, 'Calculator'>;
export type SignUpMarshalCardRouteProp = RouteProp<RootStackParamList, 'SignUpMarshalCard'>;
export type SignUpPersonalDataRouteProp = RouteProp<RootStackParamList, 'SignUpPersonalData'>;
export type TechnicalSupportRouteProp = RouteProp<RootStackParamList, 'TechnicalSupport'>;
export type OnboardingRouteProp = RouteProp<RootStackParamList, 'Onboarding'>;
export type SignInRouteProp = RouteProp<RootStackParamList, 'SignIn'>;
export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
