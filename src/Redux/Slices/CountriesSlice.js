import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  countries: [],
  error: '',
};
const apiUrl = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  try {
    const response = await axios.get(apiUrl);
    const { data } = response;
    return data;
  } catch (error) {
    throw Error(error);
  }
});

const countriesSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        countries: action.payload,
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default countriesSlice.reducer;
