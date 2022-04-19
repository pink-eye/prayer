import React, { FC, ReactElement } from 'react'
import { Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'

interface Props {
	title?: string
	children?: ReactElement | ReactElement[]
}

const Header: FC<Props> = ({ title = 'No title', ...props }) => {
	return (
		<Root
			style={{
				paddingTop:
					Platform.OS === 'android' ? StatusBar.currentHeight : 0,
			}}
			accessibilityRole="header">
			<StatusBar />
			<Container>
				<Title>{title}</Title>
				<Actions>{props.children}</Actions>
			</Container>
			<Border accessibilityRole="none" />
		</Root>
	)
}

export default Header

const Root = styled.View`
	background-color: #fff;
	align-items: center;
	justify-content: center;
`

const Border = styled.View`
	width: 100%;
	height: 1px;
	background-color: #e6e6e6;
`

const Container = styled.View`
	padding-bottom: 22px;
	flex-direction: row;
	align-items: center;
`

const Title = styled.Text`
	font-size: 17px;
	line-height: 20px;
	color: #514d47;
`

const Actions = styled.View`
	background-color: aliceblue;
	margin-left: 20px;
`
