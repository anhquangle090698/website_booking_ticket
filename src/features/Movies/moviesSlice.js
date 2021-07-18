import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MoviesApi from 'api/moviesApi';

const initialMovies = {
  listMovies: [],
  listSystemCinema: [],
  listShowtime: [],
  listShowtimeByC: [],
  detailMovie: {},

  showtimeDetailMovie: [],
};

//Get list movies with 'id group = 02'
export const getListMoviesAsync = createAsyncThunk(
  'movies/getListMovies',
  async (params, thunkAPI) => {
    const response = await MoviesApi.getListMovies();
    // thunkAPI.dispatch(...)
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

//Get list system cinema
export const getListSystemCinemaAsync = createAsyncThunk(
  'movies/getListSystemCinema',
  async (params, thunkAPI) => {
    const response = await MoviesApi.getListSystemCinema();
    return response;
  }
);

//Get list showtime by 'id system cinema = ?'
export const getListShowTimeSystemCinemaAsync = createAsyncThunk(
  'movies/getListShowTimeSystemCinema',
  async (idSystemCinema, thunkAPI) => {
    const response = await MoviesApi.getListShowTimeSystemCinema(idSystemCinema);
    return response;
  }
);

//Get detail movie by 'id film = ?'
export const getDetailMovieAsync = createAsyncThunk(
  'movies/getDetailMovie',
  async (idFilm, thunkAPI) => {
    const response = await MoviesApi.getDetailMovie(idFilm);
    return response;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialMovies,
  reducers: {
    getListShowtimeByC: (state, action) => {
      //Option 1: update state in rtk
      // let stateNew = [ ...state.listShowtimeByC ];
      // stateNew = state.listShowtime[0]?.lstCumRap?.filter(lcr => lcr.maCumRap === action.payload);
      // state.listShowtimeByC = stateNew;

      //Option 2: update state in rtk
      state.listShowtimeByC = state.listShowtime[0]?.lstCumRap?.filter(
        (lcr) => lcr.maCumRap === action.payload
      );
    },
    getShowtimeDetailMovie: (state, action) => {
      state.showtimeDetailMovie = state.detailMovie?.heThongRapChieu?.filter(
        (htrc) => htrc.maHeThongRap === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getListMoviesAsync.fulfilled, (state, action) => {
      state.listMovies = action.payload;
    });
    builder.addCase(getListSystemCinemaAsync.fulfilled, (state, action) => {
      state.listSystemCinema = action.payload;
    });
    builder.addCase(getListShowTimeSystemCinemaAsync.fulfilled, (state, action) => {
      state.listShowtime = action.payload;
    });
    builder.addCase(getDetailMovieAsync.fulfilled, (state, action) => {
      state.detailMovie = action.payload;
    });
  },
});

export const { getListShowtimeByC, getShowtimeDetailMovie } = moviesSlice.actions;
const { reducer: moviesReducer } = moviesSlice;
export default moviesReducer;
