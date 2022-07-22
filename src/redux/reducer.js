import { createReducer } from '@reduxjs/toolkit';
import { setCity, setWeather, setLoading, resetData, setUnits } from './actions';

const initialState = {
  loading: true,
  weather: null,
  city: '',
  units: 'metric'
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setWeather, (state, action) => {
      state.weather = action.payload;
    })
    .addCase(setLoading, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(resetData, (state, action) => {
      state.loading = true;
      state.weather = null;
      state.city = '';
    })
    .addCase(setUnits, (state, action) => {
      state.units = action.payload;
    })
});