import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { dataLoading } from './data/data.slice'

export const rootReducer = combineReducers ({
  'reducer': dataLoading.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
})