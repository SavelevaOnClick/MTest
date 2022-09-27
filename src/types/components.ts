import { Point } from "@types";

export enum EInputTypes {
  CALENDAR = 'Calendar',
  GENDER = 'Chevron-Down',
  SCAN = 'Scan',
  LOCATION = 'Location',
  DELETE = 'Close',
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

export enum EMessenger  {
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