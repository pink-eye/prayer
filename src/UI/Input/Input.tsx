import React, { FC } from 'react'
import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'

const Input: FC<TextInputProps> = ({ style, ...props }) => {
	return (
		<Root style={style}>
			<InputField autoCapitalize="none" {...props} />
		</Root>
	)
}

export default Input

const Root = styled.View`
	background-color: #ffffff;
	border: 1px solid #e5e5e5;
	border-radius: 10px;
`

const InputField = styled.TextInput`
	padding: 15px;
	font-size: 17px;
	line-height: 20px;
	color: #9c9c9c;
`
