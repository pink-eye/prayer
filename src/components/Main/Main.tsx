import React, { FC, ReactElement } from 'react'
import styled from 'styled-components/native'

interface Props {
	children: ReactElement | ReactElement[]
}

const Main: FC<Props> = props => {
	return <Root>{props.children}</Root>
}

export default Main

const Root = styled.View`
	margin: 15px;
`
