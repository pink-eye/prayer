import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styled from 'styled-components/native'
import Main from '../../components/Main'
import useAppDispatch from '../../hooks/useAppDispatch'
import { useSignInMutation } from '../../store/ducks/auth/api'
import { tokenActions } from '../../store/ducks/token/slice'
import Button from '../../UI/Button'
import Input from '../../UI/Input'

interface IFormData {
	email: string
	password: string
}

const SignIn = () => {
	const [signIn, { isLoading, data }] = useSignInMutation()
	const dispatch = useAppDispatch()

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	useEffect(() => {
		if (!data) return

		dispatch(tokenActions.setToken(data.token))
	}, [data])

	const onSubmit = (data: IFormData) => signIn(data)

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
					value={isLoading ? 'Loading...' : 'Sign in'}
				/>
			</Main>
		</Root>
	)
}

export default SignIn

const Root = styled.View`
	flex: 1;
	justify-content: center;
`
