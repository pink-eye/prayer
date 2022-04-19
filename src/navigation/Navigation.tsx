import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserNavigator from './UserNavigator'
import GuestNavigator from './GuestNavigator'
import { NavigationContainer } from '@react-navigation/native'
import useAppSelector from '../hooks/useAppSelector'
import { RootStackParamList } from './types'
import { SafeAreaView } from 'react-native'

export const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigation = () => {
	const token = useAppSelector(state => state.token)

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				{token ? <UserNavigator /> : <GuestNavigator />}
			</NavigationContainer>
		</SafeAreaView>
	)
}
