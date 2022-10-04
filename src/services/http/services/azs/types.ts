import {IFormatResponse, TFillingStationData, TRegion} from '@types';

export interface IAzsRequest {
  locale: 'ru' | 'en';
}

export interface IAzsAllResponse extends IFormatResponse {
  status: number;
  statusText: string;
  data: {
    data: TFillingStationData[];
  };
}


export interface IRegionsResponse extends IFormatResponse {
  status: number;
  statusText: string;
  data: {
    data: TRegion[];
  };
}
