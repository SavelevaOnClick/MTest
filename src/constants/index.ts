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

export const REGIONS = [
  {
    name: 'Автономна Республіка Крим',
  },
  {
    name: 'Вінницька',
  },
  {
    name: 'Волинська',
  },
  {
    name: 'Дніпропетровська',
  },
  {
    name: 'Донецька',
  },
  {
    name: 'Житомирська',
  },
  {
    name: 'Закарпатська',
  },
  {
    name: 'Запорізька',
  },
  {
    name: 'Івано-Франківська',
  },
  {
    name: 'Київська',
  },
  {
    name: 'Кіровоградська',
  },
  {
    name: 'Луганська',
  },
  {
    name: 'Львівська',
  },
  {
    name: 'Миколаївська',
  },
  {
    name: 'Одеська',
  },
  {
    name: 'Полтавська',
  },
  {
    name: 'Рівненська',
  },
  {
    name: 'Сумська',
  },
  {
    name: 'Тернопільська',
  },
  {
    name: 'Харківська',
  },
  {
    name: 'Херсонська',
  },
  {
    name: 'Хмельницька',
  },
  {
    name: 'Черкаська',
  },
  {
    name: 'Чернівецька',
  },
  {
    name: 'Чернігівська',
  },
];

export const FUELS = [
  {
    "id": 2,
    "name": "А95"
  },
  {
    "id": 3,
    "name": "А92"
  },
  {
    "id": 1,
    "name": "ДТ"
  },

  {
    "id": 4,
    "name": "Газ Пропан"
  }
]
