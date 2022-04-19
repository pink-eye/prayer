import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../../api/constants'
import { IUser } from '../../../types'

export const authApi = createApi({
	reducerPath: '/auth',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		signUp: builder.mutation({
			query: (user: IUser) => ({
				url: '/auth/sign-up',
				method: 'POST',
				body: user,
			}),
		}),
		signIn: builder.mutation({
			query: (user: IUser) => ({
				url: '/auth/sign-in',
				method: 'POST',
				body: user,
			}),
		}),
	}),
})

export default authApi

export const { useSignInMutation, useSignUpMutation } = authApi
