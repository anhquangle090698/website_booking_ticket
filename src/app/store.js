import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from 'features/Movies/moviesSlice';
import counterReducer from '../features/counter/counterSlice';

const rootReducer = {
  counter: counterReducer,
  movies : moviesReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;