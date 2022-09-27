import i18next from 'i18next';
import {createSlice} from '@reduxjs/toolkit';
import {TGlobalState} from '@types';

type TInitialState = TGlobalState['additional'];

const initialState: TInitialState = {
  loading: false,
  currentRouteName: '',
  visibleSupportModal: false,
};

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
});

// actions
export const {setLoading, setCurrentRouteName, setVisibleSupportModal} = additionalSlice.actions;

// reducer
export const additional = additionalSlice.reducer;

// selectors
export const selectAdditional = (state: TGlobalState) => state.additional;
