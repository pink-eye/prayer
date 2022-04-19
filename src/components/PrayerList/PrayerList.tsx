import { ViewProps } from 'react-native'
import React, { FC, useMemo } from 'react'
import { IPrayer } from '../../types'
import styled from 'styled-components/native'
import Prayer from './components/Prayer'
import Button from '../../UI/Button'
import HiddenDeleteBtn from './components/HiddenDeleteBtn'
import { SwipeListView } from 'react-native-swipe-list-view'
import useToggle from '../../hooks/useToggle'

interface Props extends ViewProps {
	columnId: number
	prayers: IPrayer[]
}

const PrayerList: FC<Props> = ({ style, columnId, prayers, ...props }) => {
	const [isVisibleChecked, toggleIsVisibleChecked] = useToggle(false)

	const filteredData = useMemo(
		() => prayers.filter((item: IPrayer) => item.columnId === columnId),
		[prayers]
	)

	const uncheckedPrayers = filteredData.filter(
		(item: IPrayer) => !item.checked
	)

	const checkedPrayers = filteredData.filter((item: IPrayer) => item.checked)

	const renderItem = ({ item }: { item: IPrayer }) => <Prayer {...item} />

	const renderHiddenItem = ({ item }: { item: IPrayer }) => (
		<HiddenDeleteBtn prayer={item} />
	)

	return (
		<Root style={style}>
			<SwipeListView
				data={uncheckedPrayers}
				renderItem={renderItem}
				renderHiddenItem={renderHiddenItem}
				disableRightSwipe
				rightOpenValue={-75}
				stopRightSwipe={-100}
				previewRowKey={'0'}
				previewOpenValue={40}
				previewOpenDelay={3000}
			/>
			{checkedPrayers[0] && (
				<>
					<Button
						style={{ marginVertical: 20 }}
						onPress={() => toggleIsVisibleChecked()}
						value={`${
							isVisibleChecked ? 'Hide' : 'Show'
						} answered prayers`}
					/>
					{isVisibleChecked && (
						<SwipeListView
							data={checkedPrayers}
							renderItem={renderItem}
							renderHiddenItem={renderHiddenItem}
							disableRightSwipe
							rightOpenValue={-75}
							stopRightSwipe={-100}
							previewRowKey={'0'}
							previewOpenValue={40}
							previewOpenDelay={3000}
						/>
					)}
				</>
			)}
		</Root>
	)
}

export default PrayerList

const Root = styled.View``
