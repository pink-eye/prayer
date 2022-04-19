import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { RootState } from '.'
import { BASE_URL } from '../api/constants'

export const authBaseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,
	prepareHeaders: (headers, state) => {
		const { token } = state.getState() as RootState

		if (token) headers.set('authorization', `Bearer ${token}`)

		return headers
	},
})
