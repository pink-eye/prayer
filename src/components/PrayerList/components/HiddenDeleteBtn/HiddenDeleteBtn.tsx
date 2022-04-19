import React, { FC } from 'react'
import styled from 'styled-components/native'
import { useDeletePrayerMutation } from '../../../../store/ducks/prayer/api'
import { IPrayer } from '../../../../types'

interface Props {
	prayer: IPrayer
}

const HiddenDeleteBtn: FC<Props> = ({ prayer }) => {
	const [deletePrayer] = useDeletePrayerMutation()

	return (
		<Root>
			<Wrapper onPress={() => deletePrayer(prayer)}>
				<Content>Delete</Content>
			</Wrapper>
		</Root>
	)
}

export default HiddenDeleteBtn

const Root = styled.View`
	position: absolute;
	top: 5px;
	right: 0;
	min-width: 50%;
`

const Wrapper = styled.Pressable`
	border-radius: 4px;
	background-color: #ac5253;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
	align-items: flex-end;
	min-height: 66px;
	width: 100%;
	padding-right: 15px;
`

const Content = styled.Text`
	color: #fff;
`
