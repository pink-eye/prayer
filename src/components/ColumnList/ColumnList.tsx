import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text } from 'react-native'
import styled from 'styled-components/native'
import { useGetColumnsQuery } from '../../store/ducks/column/api'
import { IColumn } from '../../types'
import Column from './components/Column'
import Separator from './components/Separator'

const ColumnList = () => {
	const navigation = useNavigation()
	const { isLoading, data } = useGetColumnsQuery(undefined, {
		refetchOnMountOrArgChange: true,
	})

	if (isLoading) return <Text>Loading...</Text>

	const handlePress = (column: IColumn) => {
		navigation.navigate('Column', { column })
	}

	const renderItem = ({ item }: { item: IColumn }) => (
		<Column onPress={() => handlePress(item)} {...item} />
	)

	return (
		<Root>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.title}
				ItemSeparatorComponent={Separator}
			/>
		</Root>
	)
}

export default ColumnList

const Root = styled.View`
	height: 100%;
`
