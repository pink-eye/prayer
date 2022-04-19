import React, { FC } from 'react'
import Header from '../../components/Header'
import Input from '../../UI/Input'
import Main from '../../components/Main'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/types'
import {
	useCreatePrayerMutation,
	useGetPrayersQuery,
} from '../../store/ducks/prayer/api'
import {
	NativeSyntheticEvent,
	Text,
	TextInputSubmitEditingEventData,
} from 'react-native'
import { IPrayer } from '../../types'
import PrayerList from '../../components/PrayerList'

type Props = NativeStackScreenProps<RootStackParamList, 'Column'>

const initialPrayer: IPrayer = {
	title: '',
	description: '',
	checked: false,
	columnId: 0,
}

const Column: FC<Props> = ({ route: { params } }) => {
	const { isLoading, data } = useGetPrayersQuery(undefined)

	const [createPrayer] = useCreatePrayerMutation()

	const handleSubmitEditing = (
		event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
	) => {
		const newPrayerTitle = event.nativeEvent.text

		const newPrayer = {
			...initialPrayer,
			title: newPrayerTitle,
			columnId: params.column.id,
		}

		createPrayer(newPrayer)
	}

	return (
		<>
			<Header title={params.column.title} />
			<Main>
				<Input
					onSubmitEditing={handleSubmitEditing}
					placeholder="Add a prayer..."
				/>
				{isLoading && !data && <Text>Loading...</Text>}
				{data && (
					<PrayerList
						prayers={data}
						style={{ marginTop: 35 }}
						columnId={params.column.id}
					/>
				)}
			</Main>
		</>
	)
}

export default Column
