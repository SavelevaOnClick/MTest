import {Point} from '@types';

export enum EInputTypes {
  CALENDAR = 'Calendar',
  GENDER = 'Chevron-Down',
  SCAN = 'Scan',
  LOCATION = 'Location',
  DELETE = 'Close',
  ARROW_RIGHT = 'Chevron-Right'
}

export enum EGender {
  FEMALE = 'female',
  MALE = 'male',
  NONE = 'none',
}

export type genderData = {
  label: string;
  data: EGender;
};

export enum EMessenger {
  TELEGRAM = 'http://t.me/+3',
  VIBER = 'viber://chat?number=%2B',
}

export type TAddressData = {
  location: Point | null;
  address: string;
};

export enum EAddress {
  FROM = 'from',
  TO = 'to',
}

export type TFuels = 'ДТ' | '95' | '92' | 'ГАЗ';

export type TFuelData = {
  id: number;
  name: string;
};

export type TRegion = {
  region: string;
}

export type TFillingStationData = {
  id: number;
  image: string;
  long: string;
  lat: string;
  name: string;
  region: string;
  address: string;
  fuels: TFuelData[];
};
