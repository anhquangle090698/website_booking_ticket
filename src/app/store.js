import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from 'features/Movies/moviesSlice';
import counterReducer from '../features/counter/counterSlice';
import logicReducer from '../features/Logic/logicSlice';

const rootReducer = {
  counter: counterReducer,
  logic : logicReducer,
  movies : moviesReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;