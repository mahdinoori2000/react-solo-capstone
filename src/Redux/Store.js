/* eslint-disable import/extensions */
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducer from './slices/CountriesSlice.js';
import countryReducer from './slices/CountrySlice.js';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
}, applyMiddleware(thunk));

export default store;
