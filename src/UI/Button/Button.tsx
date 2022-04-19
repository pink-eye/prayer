import { PressableProps } from 'react-native'
import React, { FC } from 'react'
import styled from 'styled-components/native'

interface Props extends PressableProps {
	value: string
}

const Button: FC<Props> = ({ value, ...props }) => {
	return (
		<Root {...props}>
			<ButtonText>{value}</ButtonText>
		</Root>
	)
}

export default Button

const Root = styled.Pressable`
	background-color: #72a8bc;
	box-shadow: 0px 2px 15px rgba(66, 78, 117, 0.1);
	border-radius: 15px;
	font-family: 'SF UI Text';
	align-items: center;
	padding: 10px;
`

const ButtonText = styled.Text`
	font-size: 14px;
	font-weight: 700;
	color: #ffffff;
	text-transform: uppercase;
`
