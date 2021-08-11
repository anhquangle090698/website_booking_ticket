import { configureStore } from '@reduxjs/toolkit';
import loginReducer from 'features/Login/loginSlice';
import moviesReducer from 'features/Movies/moviesSlice';
import logicReducer from 'features/Logic/logicSlice';
import bookTicketReducer from 'features/BookTicket/bookTicketSlice';
import userReducer from 'features/User/userSlice';

//Root reducer where contain all reducer of app, when create new reducer need sign up with root reducer.
const rootReducer = {
  logic: logicReducer, //logicSlice
  movies: moviesReducer, //moviesSlice
  login: loginReducer, //loginSlice
  bookTicket: bookTicketReducer, //bookTicketSlice
  user: userReducer, //userSlice
};

//configureStore is provided by Redux toolkit
const store = configureStore({
  reducer: rootReducer,
});

export default store;
