import { configureStore } from '@reduxjs/toolkit';
import loginReducer from 'features/Login/loginSlice';
import moviesReducer from 'features/Movies/moviesSlice';
// import counterReducer from '../features/counter/counterSlice';
import logicReducer from 'features/Logic/logicSlice';
import bookTicketReducer from 'features/BookTicket/bookTicketSlice';

const rootReducer = {
  // counter: counterReducer,
  logic: logicReducer,
  movies: moviesReducer,
  login: loginReducer,
  bookTicket: bookTicketReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
