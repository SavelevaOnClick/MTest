import {EGender} from '@types';
import {MAP_KEY} from '@env'

export {width, height, top, bottom, ios, android, darkMode, hitSlop, deviceId} from './device';
export {colors} from './colors';
export {fonts} from './fonts';
export {Languages} from './languages';
export {urls} from './urls';
export {shadow} from './shadow';
export {gradients} from './gradients';

export const GENDER_DATA = [
  {
    label: 'Жіноча',
    data: EGender.FEMALE,
  },
  {
    label: 'Чоловіча',
    data: EGender.MALE,
  },
  {
    label: 'Не вказувати',
    data: EGender.NONE,
  },
];

export const SUPPORT_NUMBER = '80960158330';

export const EMPTY_ADDRESS_DATA = {
  location: null,
  address: '',
};


export const GOOGLE_AUTOCOMPLETE_PARAMS = {
  key: MAP_KEY,
  language: 'ru',
}
