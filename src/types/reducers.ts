import { TFillingStationData, TFuelData, TRegion } from "./components";

export enum EDataLoadingStatus {
	 IDLE = 'idle',
	 LOADING = 'loading',
	 FULFILLED = 'fulfilled',
	 REJECTED = 'rejected',
}

export type TGlobalState = {
	global: {
	  token: string;
	  firstOpenApp: boolean;
	  language: string;
	},
	additional: {
	  loading: boolean;
	  currentRouteName: string;
	  visibleSupportModal: boolean;
	},
	fillingStations: {
		stations: TFillingStationData[],
		searchValue: string,
		regions: TRegion[],
		searchFuels: TFuelData[],
		searchRegions: string[],
	}
}