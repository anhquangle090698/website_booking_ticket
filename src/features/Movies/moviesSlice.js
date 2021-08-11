import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MoviesApi from 'api/moviesApi';
import history from 'utils/history';

const initialMovies = {
  //-----------Feature show list movies, show showtime of all movies at home page----------
  //List all movies
  listMovies: [],
  //List all system cinema
  listSystemCinema: [],
  //List showtime by system cinema
  listShowtime: [],
  //List all showtime
  listAllShowtime: [],
  //List showtime by cinema
  listShowtimeByC: [],

  //-----------Feature show list movie after input search name movie-----------
  //List movie by name movie
  listMoviesByNameFilm: [],

  //-----------Feature show detail movie, showtime of movie--------------
  //Detail movie by id movie
  detailMovie: {},
  //List showtime detail movie by system cinema
  showtimeDetailMovie: [],

  //-----------Feature show showtime of movie after select search------------
  //List showtime select search by system cinema
  listShowtimeSearch: [],
  //List movies select search by cinema
  listMoviesByCinema: [],
  //List showtime select search by name movie
  listShowtimeByNameFilm: {},
};

//Action get list movies
export const getListMoviesAsync = createAsyncThunk(
  'movies/getListMovies',
  async (params, thunkAPI) => {
    const response = await MoviesApi.getListMovies();
    // thunkAPI.dispatch(...)
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

//Action get list system cinema
export const getListSystemCinemaAsync = createAsyncThunk(
  'movies/getListSystemCinema',
  async (params, thunkAPI) => {
    const response = await MoviesApi.getListSystemCinema();
    return response;
  }
);

//Action get list showtime
export const getListShowTimeSystemCinemaAsync = createAsyncThunk(
  'movies/getListShowTimeSystemCinema',
  async (idSystemCinema, thunkAPI) => {
    const response = await MoviesApi.getListShowTimeSystemCinema(idSystemCinema);
    return response;
  }
);

//Action get all list showtime
export const getAllListShowtimeAsync = createAsyncThunk(
  'movies/getAllListShowtimeAsync',
  async (idSystemCinema, thunkAPI) => {
    const response = await MoviesApi.getAllListShowtime();
    return response;
  }
);

//Action get detail movie
export const getDetailMovieAsync = createAsyncThunk(
  'movies/getDetailMovie',
  async (idFilm, thunkAPI) => {
    const response = await MoviesApi.getDetailMovie(idFilm);
    return response;
  }
);

//Action get search movie
export const getSearchMovieAsync = createAsyncThunk(
  'movies/getSearchMovie',
  async (nameFilm, thunkAPI) => {
    const response = await MoviesApi.getSearchMovie(nameFilm);

    //Go to result page
    history.push('/trang-chu/ket-qua-tim-kiem');

    return response;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialMovies,
  reducers: {
    //Handle logic showtime by cinema at home page
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

    //Handle logic showtime of movie at detail movie page
    getShowtimeDetailMovie: (state, action) => {
      state.showtimeDetailMovie = state.detailMovie?.heThongRapChieu?.filter(
        (htrc) => htrc.maHeThongRap === action.payload
      );
    },

    //Handle logic showtime of system cinema in component select search
    getListShowtimeSearch: (state, action) => {
      state.listShowtimeSearch = state.listAllShowtime?.filter(
        (lst) => lst.maHeThongRap === action.payload
      );
    },

    //Handle logic list movie of cinema in component select search
    getListMoviesByCinema: (state, action) => {
      //Option 2: update state in rtk
      if (action.payload !== null) {
        state.listMoviesByCinema = state.listShowtimeSearch[0]?.lstCumRap?.filter(
          (lcr) => lcr.maCumRap === action.payload
        );
      } else {
        state.listMoviesByCinema = [];
      }
    },

    //Handle logic list showtime of movie by name movie in component select search
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
