import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Pressable } from 'react-native'
import { useModal } from 'react-native-modalfy'
import ColumnList from '../../components/ColumnList'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { RootStackParamList } from '../../navigation/types'
import Plus from '../../../assets/img/plus.svg'

export type Props = NativeStackScreenProps<RootStackParamList, 'Desk'>

const Desk = ({ navigation }: Props) => {
	const { openModal } = useModal()

	return (
		<>
			<Header title="My Desk">
				<Pressable onPress={() => openModal('Dialog')}>
					<Plus />
				</Pressable>
			</Header>
			<Main>
				<ColumnList />
			</Main>
		</>
	)
}

export default Desk
