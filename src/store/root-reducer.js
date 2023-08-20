import { combineReducers } from '@reduxjs/toolkit';
import { dataLoading } from './data/data.slice';

const initialState = {
  users: [],
}

// export const rootReducer = combineReducers({
//   users: dataLoading.reducer
// })