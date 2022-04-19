import React, { FC } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { IColumn } from '../../../../types'

interface Props extends IColumn {
	onPress: () => void
}

const Column: FC<Props> = ({ onPress, ...props }) => {
	return (
		<Root onPress={onPress}>
			<Text>{props.title}</Text>
		</Root>
	)
}

export default Column

const Root = styled.Pressable`
	padding: 20px 15px;
	border-radius: 4px;
	border: 1px solid #e5e5e5;
	width: 100%;
	background-color: #fff;
`
