import { createAction } from '@reduxjs/toolkit';

export const setCity = createAction('setCity');
export const setWeather = createAction('setWeather');
export const setLoading = createAction('setLoading');
export const resetData = createAction('resetData');
export const setUnits = createAction('setUnits');