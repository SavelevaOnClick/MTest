import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {TGlobalState} from '@types';
import {AzsService, IAzsRequest} from '@httpServices';

type TInitialState = TGlobalState['fillingStations'];

const initialState: TInitialState = {
  stations: [],
  searchValue: '',
  regions: [],
  searchRegions: [],
  searchFuels: [],
};

export const getFillingStationsAsync = createAsyncThunk(
  '@@fillingStations/getStations',
  async (payload: IAzsRequest, thunkAPI) => {
    const {data} = await AzsService.azsAll(payload);
    return data.data;
  },
);

export const getRegionsAsync = createAsyncThunk(
  '@@fillingStations/getRegions',
  async (_, thunkAPI) => {
    const {data} = await AzsService.getRegions();
    return data.data;
  },
);

const fillingStationsSlice = createSlice({
  name: '@@fillingStations',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setRegions: (state, action) => {
      state.searchRegions = action.payload;
    },
    setFuels: (state, action) => {
      state.searchFuels = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getFillingStationsAsync.fulfilled, (state, action) => {
        state.stations = action.payload;
      })
      .addCase(getRegionsAsync.fulfilled, (state, action) => {
        state.regions = action.payload;
      });
  },
});

export const fillingStations = fillingStationsSlice.reducer;

export const {setSearchValue, setRegions, setFuels} = fillingStationsSlice.actions;
