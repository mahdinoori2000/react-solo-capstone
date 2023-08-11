import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  country: [],
  error: '',
};

export const fetchCountry = createAsyncThunk('country/fetchCountry', async (name) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const { data } = response;
    console.log('data', data);
    return data;
  } catch (error) {
    throw Error(error);
  }
});
fetchCountry('cameroon');
const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchCountry.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        country: action.payload,
      }))
      .addCase(fetchCountry.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default countrySlice.reducer;
