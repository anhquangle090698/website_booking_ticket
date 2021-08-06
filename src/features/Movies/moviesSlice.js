import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MoviesApi from 'api/moviesApi';
import history from 'utils/history';

const initialMovies = {
  listMovies: [],
  listSystemCinema: [],
  listShowtime: [],
  listAllShowtime: [],

  listShowtimeByC: [],
  detailMovie: {},
  listMoviesByNameFilm: [],

  showtimeDetailMovie: [],

  listShowtimeSearch: [],
  listMoviesByCinema: [],
  listShowtimeByNameFilm: {},
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

//Get all list showtime
export const getAllListShowtimeAsync = createAsyncThunk(
  'movies/getAllListShowtimeAsync',
  async (idSystemCinema, thunkAPI) => {
    const response = await MoviesApi.getAllListShowtime();
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

export const getSearchMovieAsync = createAsyncThunk(
  'movies/getSearchMovie',
  async (nameFilm, thunkAPI) => {
    const response = await MoviesApi.getSearchMovie(nameFilm);

    history.push('/trang-chu/ket-qua-tim-kiem');

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

    getListShowtimeSearch: (state, action) => {
      state.listShowtimeSearch = state.listAllShowtime?.filter(
        (lst) => lst.maHeThongRap === action.payload
      );
    },

    getListMoviesByCinema: (state, action) => {
      //Option 2: update state in rtk
      state.listMoviesByCinema = state.listShowtimeSearch[0]?.lstCumRap?.filter(
        (lcr) => lcr.maCumRap === action.payload
      );
    },

    getListShowtimeByNameFilm: (state, action) => {
      //Option 2: update state in rtk
      if (action.payload !== null) {
        state.listShowtimeByNameFilm = state.listMoviesByCinema[0]?.danhSachPhim?.filter(
          (lmbc) => lmbc.maPhim === action.payload
        );
      } else {
        state.listShowtimeByNameFilm = [];
      }
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
    builder.addCase(getAllListShowtimeAsync.fulfilled, (state, action) => {
      state.listAllShowtime = action.payload;
    });
    builder.addCase(getDetailMovieAsync.fulfilled, (state, action) => {
      state.detailMovie = action.payload;
    });
    builder.addCase(getSearchMovieAsync.fulfilled, (state, action) => {
      state.listMoviesByNameFilm = action.payload;
    });
  },
});

export const {
  getListShowtimeByC,
  getShowtimeDetailMovie,
  getListMoviesByCinema,
  getListShowtimeSearch,
  getListShowtimeByNameFilm,
} = moviesSlice.actions;
const { reducer: moviesReducer } = moviesSlice;
export default moviesReducer;
