import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore, persistReducer } from 'redux-persist'
import { tokenReducer } from './ducks'
import columnApi from './ducks/column/api'
import prayerApi from './ducks/prayer/api'
import authApi from './ducks/auth/api'

const combinedReducer = combineReducers({
	[columnApi.reducerPath]: columnApi.reducer,
	[prayerApi.reducerPath]: prayerApi.reducer,
	[authApi.reducerPath]: authApi.reducer,
	token: tokenReducer,
})

// REDUX-PERSIST LOGIC

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, combinedReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		})
			.concat(columnApi.middleware)
			.concat(prayerApi.middleware),
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)

// TYPES

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
