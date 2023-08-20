import {combineReducers, configureStore} from '@reduxjs/toolkit'
// import { rootReducer } from './root-reducer'
import { dataLoading } from './data/data.slice'

export const rootReducer = combineReducers ({
  'reducer': dataLoading.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
})