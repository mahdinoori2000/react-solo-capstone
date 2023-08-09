import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './slices/CountriesSlice';
import countryReducer from './slices/CountrySlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
  },
});

export default store;
