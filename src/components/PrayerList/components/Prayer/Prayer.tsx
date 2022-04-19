import React, { FC } from 'react'
import styled from 'styled-components/native'
import { IPrayer } from '../../../../types'
import { useUpdatePrayerMutation } from '../../../../store/ducks/prayer/api'
import { useNavigation } from '@react-navigation/native'

const Prayer: FC<IPrayer> = props => {
	const navigation = useNavigation()
	const [updatePrayer] = useUpdatePrayerMutation()

	const handleCheck = () => {
		updatePrayer({ ...props, checked: !props.checked })
	}

	const handlePress = () => {
		navigation.navigate('Prayer', { prayer: props })
	}

	return (
		<Root onPress={handlePress}>
			<Status style={{ marginEnd: 15 }} />
			<Checkbox
				$checked={props.checked}
				onPress={handleCheck}
				style={{ marginEnd: 15 }}
			/>
			<Title
				$checked={props.checked}
				numberOfLines={1}
				ellipsizeMode="tail">
				{props.title}
			</Title>
		</Root>
	)
}

export default Prayer

interface StyleProps {
	$checked?: boolean
}

const Root = styled.Pressable`
	flex-direction: row;
	background-color: #fff;
	padding-top: 10px;
	padding-bottom: 10px;
	border-radius: 4px;
	margin-top: 5px;
	margin-bottom: 5px;
	height: 66px;
	align-items: center;
`

const Status = styled.View`
	height: 100%;
	width: 3px;
	background-color: #ac5253;
`

const Checkbox = styled.Pressable`
	width: 22px;
	height: 22px;
	border-radius: 4px;
	border: 1px solid #514d47;

	background-color: ${({ $checked }: StyleProps) =>
		$checked ? 'red' : 'transparent'};
`

const Title = styled.Text`
	font-size: 17px;

	color: #514d47;
	text-decoration-line: ${({ $checked }: StyleProps) =>
		$checked ? 'line-through' : 'none'};
`
