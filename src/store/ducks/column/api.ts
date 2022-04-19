import { createApi } from '@reduxjs/toolkit/query/react'
import { IColumn } from '../../../types'
import { authBaseQuery } from '../../helper'

export const columnApi = createApi({
	reducerPath: '/columns',
	baseQuery: authBaseQuery,
	tagTypes: ['Columns'],

	endpoints: builder => ({
		getColumns: builder.query({
			query: () => ({
				url: '/columns',
				method: 'GET',
			}),
			providesTags: ['Columns'],
		}),
		createColumn: builder.mutation({
			query: (column: IColumn) => ({
				url: '/columns',
				method: 'POST',
				body: column,
			}),
			onQueryStarted(column, { dispatch, queryFulfilled }) {
				const patchResult = dispatch(
					columnApi.util.updateQueryData(
						'getColumns',
						undefined,
						draft => {
							draft.push(column)
						}
					)
				)
				queryFulfilled.catch(patchResult.undo)
			},
		}),
	}),
})

export default columnApi

export const { useGetColumnsQuery, useCreateColumnMutation } = columnApi
