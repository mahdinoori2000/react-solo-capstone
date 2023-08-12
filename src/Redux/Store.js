import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countriesReducer from './Slices/CountriesSlice';
import countryReducer from './Slices/CountrySlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
}, applyMiddleware(thunk));

export default store;
