import { createStore, applyMiddleware } from 'redux'
import thunk, {ThunkDispatch} from 'redux-thunk';
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import {rootReducer} from '../redux/reducers/reducers'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['searchReducer','alertReducer']
}

const {persistReducer} = require('redux-persist');
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
export type RootStore = ReturnType<typeof rootReducer>;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, any>;

