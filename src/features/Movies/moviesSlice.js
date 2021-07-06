import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MoviesApi from 'api/moviesApi';

const initialMovies = {
  moviesList: [],
};

export const getAllAsync = createAsyncThunk('movies/getAll', async (params, thunkAPI) => {
  const response = await MoviesApi.getAll();
  // thunkAPI.dispatch(...)
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialMovies,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAsync.fulfilled, (state, action) => {
      state.moviesList = action.payload;
    });
  },
});

const { reducer: moviesReducer } = moviesSlice;
export default moviesReducer;
