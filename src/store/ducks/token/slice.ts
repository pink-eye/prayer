import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IToken } from './types'

const initialState: IToken = null

export const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<IToken>) => action.payload,
		clearToken: () => initialState,
	},
})

export const tokenReducer = tokenSlice.reducer
export const tokenActions = tokenSlice.actions
