import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styled from 'styled-components/native'
import Main from '../../components/Main'
import useAppDispatch from '../../hooks/useAppDispatch'
import { RootStackParamList } from '../../navigation/types'
import { useSignUpMutation } from '../../store/ducks/auth/api'
import { tokenActions } from '../../store/ducks/token/slice'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import Separator from './components/Separator'

interface IFormData {
	email: string
	name: string
	password: string
}

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>

const SignUp = ({ navigation }: Props) => {
	const [signUp, { isLoading, data }] = useSignUpMutation()
	const dispatch = useAppDispatch()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>({
		defaultValues: {
			email: '',
			name: '',
			password: '',
		},
	})

	useEffect(() => {
		if (!data) return

		dispatch(tokenActions.setToken(data.token))
	}, [data])

	const onSubmit = (data: IFormData) => {
		signUp(data)
	}

	return (
		<Root>
			<Main>
				<Controller
					control={control}
					name="email"
					rules={{ required: true }}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Email"
						/>
					)}
				/>
				<Controller
					control={control}
					name="name"
					rules={{ required: true }}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							placeholder="Name"
							style={{ marginTop: 10 }}
						/>
					)}
				/>
				<Controller
					control={control}
					name="password"
					rules={{ required: true }}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							style={{ marginTop: 10 }}
							secureTextEntry={true}
							placeholder="Password"
						/>
					)}
				/>
				<Button
					style={{ marginTop: 20 }}
					onPress={handleSubmit(onSubmit)}
					value={isLoading ? 'Loading...' : 'Sign up'}
				/>
				<Separator style={{ marginVertical: 20 }} />
				<Button
					onPress={() => navigation.navigate('SignIn')}
					value="Go to sign in"
				/>
			</Main>
		</Root>
	)
}

export default SignUp

const Root = styled.View`
	flex: 1;
	justify-content: center;
`
