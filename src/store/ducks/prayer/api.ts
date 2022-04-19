import { createApi } from '@reduxjs/toolkit/query/react'
import { IPrayer } from '../../../types'
import { authBaseQuery } from '../../helper'

export const prayerApi = createApi({
	reducerPath: '/prayers',
	baseQuery: authBaseQuery,
	tagTypes: ['Prayers'],
	endpoints: builder => ({
		getPrayers: builder.query({
			query: () => ({
				url: '/prayers',
				method: 'GET',
			}),
			providesTags: ['Prayers'],
		}),
		createPrayer: builder.mutation({
			query: (prayer: IPrayer) => ({
				url: '/prayers',
				method: 'POST',
				body: prayer,
			}),
			onQueryStarted(prayer, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					prayerApi.util.updateQueryData(
						'getPrayers',
						undefined,
						draft => {
							draft.push(prayer)
						}
					)
				)
				queryFulfilled.catch(patchResult.undo)
			},
		}),
		updatePrayer: builder.mutation({
			query: (prayer: IPrayer) => ({
				url: `/prayers/${prayer.id}`,
				method: 'PUT',
				body: prayer,
			}),
			onQueryStarted(prayer, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					prayerApi.util.updateQueryData(
						'getPrayers',
						undefined,
						draft => {
							return draft.map((item: IPrayer) => {
								if (item.id === prayer.id) {
									return { ...prayer }
								}

								return item
							})
						}
					)
				)
				queryFulfilled.catch(patchResult.undo)
			},
		}),
		deletePrayer: builder.mutation({
			query: (prayer: IPrayer) => ({
				url: `/prayers/${prayer.id}`,
				method: 'DELETE',
			}),
			onQueryStarted(prayer, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					prayerApi.util.updateQueryData(
						'getPrayers',
						undefined,
						draft => {
							return draft.filter(
								(item: IPrayer) => item.id !== prayer.id
							)
						}
					)
				)
				queryFulfilled.catch(patchResult.undo)
			},
		}),
	}),
})

export default prayerApi

export const {
	useGetPrayersQuery,
	useCreatePrayerMutation,
	useUpdatePrayerMutation,
	useDeletePrayerMutation,
} = prayerApi
