import { combineReducers } from '@reduxjs/toolkit';
import {global} from './global'
import {additional} from './additional'
import { fillingStations } from './fillingStations';
// ADD IMPORT

export const rootReducer = combineReducers({
  global,
  additional,
  fillingStations,
  // ADD NEW REDUCER
});