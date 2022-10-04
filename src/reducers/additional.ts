import i18next from 'i18next';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {TGlobalState} from '@types';
import {getFillingStationsAsync, getRegionsAsync} from './fillingStations';

type TInitialState = TGlobalState['additional'];

const initialState: TInitialState = {
  loading: true,
  currentRouteName: '',
  visibleSupportModal: false,
};

export const initial = createAsyncThunk('@@additional/initial', async (_, thunkAPI) => {
  await Promise.all([
    thunkAPI.dispatch(getFillingStationsAsync({locale: 'ru'})),
    thunkAPI.dispatch(getRegionsAsync()),
  ]);
});

const additionalSlice = createSlice({
  name: '@@additional',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setVisibleSupportModal: (state, action) => {
      state.visibleSupportModal = action.payload;
    },
    setCurrentRouteName: (state, action) => {
      state.currentRouteName = action.payload;
    },
    resetAdditional: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(initial.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(initial.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

// actions
export const {setLoading, setCurrentRouteName, setVisibleSupportModal} = additionalSlice.actions;

// reducer
export const additional = additionalSlice.reducer;

// selectors
export const selectAdditional = (state: TGlobalState) => state.additional;
