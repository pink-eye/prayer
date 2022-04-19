import React from 'react'
import { Stack } from '../Navigation'
import SignIn from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'

const GuestNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="SignIn" component={SignIn} />
		</Stack.Navigator>
	)
}

export default GuestNavigator
