import React from 'react'
import { Stack } from '../Navigation'
import Column from '../../screens/Column'
import Desk from '../../screens/Desk'
import Prayer from '../../screens/Prayer'

const UserNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="Desk" component={Desk} />
			<Stack.Screen name="Column" component={Column} />
			<Stack.Screen name="Prayer" component={Prayer} />
		</Stack.Navigator>
	)
}

export default UserNavigator
