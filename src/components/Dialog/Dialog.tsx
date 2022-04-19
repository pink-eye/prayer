import { Text } from 'react-native'
import React, { FC } from 'react'
import styled from 'styled-components/native'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import { useCreateColumnMutation } from '../../store/ducks/column/api'
import { Controller, useForm } from 'react-hook-form'

interface IFormData {
	title: string
}

const Dialog: FC = ({ modal: { closeModal } }) => {
	const [createColumn] = useCreateColumnMutation()

	const { control, handleSubmit } = useForm<IFormData>({
		defaultValues: { title: '' },
	})

	const onSubmit = (data: IFormData) => {
		createColumn(data)
		closeModal('Dialog')
	}

	return (
		<Root>
			<Text>New column</Text>
			<Controller
				control={control}
				name="title"
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						style={{ marginTop: 20 }}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder="Type a title..."
					/>
				)}
			/>
			<Button
				style={{ marginTop: 10 }}
				onPress={handleSubmit(onSubmit)}
				value="Add"
			/>
		</Root>
	)
}

export default Dialog

const Root = styled.View`
	background-color: #fff;
	padding: 20px;
	border-radius: 10px;
	min-width: 80%;
`
