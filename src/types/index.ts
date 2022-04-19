export interface IColumn {
	id?: number
	title?: string
	description?: string
	userId?: number
}

export interface IUser {
	email: string
	name?: string
	password: string
}

export interface IThunkState {
	isLoading: boolean
	error: any
	data: any
}

export interface IPrayer {
	id?: number
	title: string
	description: string
	checked: boolean
	columnId: number
	commentsIds?: string[]
}
