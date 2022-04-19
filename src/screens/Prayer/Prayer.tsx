import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'
import styled from 'styled-components/native'
import { RootStackParamList } from '../../navigation/types'
import Back from '../../../assets/img/back.svg'
import Hands from '../../../assets/img/hands.svg'

type Props = NativeStackScreenProps<RootStackParamList, 'Prayer'>

const Prayer: FC<Props> = ({ route: { params }, navigation }) => {
	const handlePress = () => {
		navigation.goBack()
	}

	return (
		<Root>
			<Top>
				<TopActions>
					<Pressable onPress={handlePress}>
						<Back />
					</Pressable>
					<Pressable>
						<Hands />
					</Pressable>
				</TopActions>
				<TopText>{params.prayer.title}</TopText>
			</Top>
			<LastUpdate>
				<LastUpdateText>Last prayed 8 min ago</LastUpdateText>
			</LastUpdate>
		</Root>
	)
}

export default Prayer

const Root = styled.View``

const Top = styled.View`
	padding: 20px 15px;
	background-color: #bfb393;
`

const TopActions = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const TopText = styled.Text`
	margin-top: 17px;
	font-size: 17px;
	line-height: 27px;

	color: #ffffff;
`

const LastUpdate = styled.View`
	padding: 15px;
	background-color: #fff;
`

const LastUpdateText = styled.Text`
	font-size: 17px;
	line-height: 20px;

	color: #514d47;
`

const Details = styled.View`
	background-color: #fff;
	flex-direction: row;
	flex-wrap: wrap;
`

const DetailsItem = styled.View`
	width: 50%;
`
