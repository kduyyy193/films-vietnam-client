import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useMutation } from '@apollo/client'
import { getAuthors } from '../graphql-client/queries'
import { addSingleAuthor } from '../graphql-client/mutations'

const AuthorForm = () => {
	const [newAuthor, setNewAuthor] = useState({
		name: '',
		date: '',
		address: ''
	})

	const { name, date , address } = newAuthor

	const onInputChange = event => {
		setNewAuthor({
			...newAuthor,
			[event.target.name]: event.target.value
		})
	}

	const onSubmit = event => {
		event.preventDefault()

		createAuthor({
			variables: { name, date, address },
			refetchQueries: [{ query: getAuthors }]
		})

		setNewAuthor({ name: '', date: '', address: '' })
	}

	const [createAuthor ] = useMutation(addSingleAuthor)


	return (
		<Form onSubmit={onSubmit}>
			<Form.Group className='invisible'>
				<Form.Control />
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Tên Đạo Diễn'
					name='name'
					onChange={onInputChange}
					value={name}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					placeholder='Ngày sinh'
					style={{outline: "none"}}
					name='date'
					onChange={onInputChange}
					value={date}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='address'
					placeholder='Quê quán'
					style={{outline: "none"}}
					name='address'
					onChange={onInputChange}
					value={address}
					required
				/>
			</Form.Group>
			<Button className='float-right' style={{backgroundColor: "#1e40af", border: "none"}} type='submit'>
				Thêm Đạo Diễn
			</Button>
		</Form>
	)
}

export default AuthorForm
