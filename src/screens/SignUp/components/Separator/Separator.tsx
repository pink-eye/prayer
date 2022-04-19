import React, { FC } from 'react'
import { ViewProps } from 'react-native'
import styled from 'styled-components/native'

const Separator: FC<ViewProps> = props => {
	return (
		<Root {...props}>
			<Line />
			<SeparatorText>OR</SeparatorText>
			<Line />
		</Root>
	)
}

export default Separator

const Root = styled.View`
	width: 100%;
	align-items: center;
	flex-direction: row;
`

const Line = styled.View`
	flex: 1;
	height: 2px;
	background-color: lightgray;
`

const SeparatorText = styled.Text`
	text-transform: uppercase;
	font-weight: 700;
	color: gray;
	margin-left: 10px;
	margin-right: 10px;
`
