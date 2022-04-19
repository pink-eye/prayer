import { IColumn, IPrayer } from '../types'
import type { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
	SignUp: undefined
	SignIn: undefined
	Desk: undefined
	Column: { column: IColumn } | undefined
	Prayer: { prayer: IPrayer } | undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
	StackScreenProps<RootStackParamList, T>

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
