import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useQuery, useMutation } from '@apollo/client'
import { getAuthors, getFilms } from '../graphql-client/queries'
import { addSingleFilm } from '../graphql-client/mutations'

const FilmForm = () => {
	const [newFilm, setNewFilm] = useState({
		name: '',
		genre: '',
		yearOfRelease: '',
		authorId: ''
	})

	const { name, genre, yearOfRelease, authorId } = newFilm

	const onInputChange = event => {
		setNewFilm({
			...newFilm,
			[event.target.name]: event.target.value
		})
	}

	const onSubmit = event => {
		event.preventDefault()
		createFilm({
			variables: { name, genre, yearOfRelease, authorId },
			refetchQueries: [{ query: getFilms }]
		})

		setNewFilm({ name: '', genre: '', yearOfRelease: '', authorId: '' })
	}

	// GraphQL operations
	const { loading, data } = useQuery(getAuthors)

	const [createFilm] = useMutation(addSingleFilm)


	return (
		<Form onSubmit={onSubmit} >
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Tên phim'
					name='name'
					onChange={onInputChange}
					value={name}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Thể loại phim'
					name='genre'
					onChange={onInputChange}
					value={genre}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Năm ra mắt'
					name='yearOfRelease'
					onChange={onInputChange}
					value={yearOfRelease}
					required
				/>
			</Form.Group>
			<Form.Group>
				{loading ? (
					<p>Loading authors...</p>
				) : (
					<Form.Control
						as='select'
						name='authorId'
						onChange={onInputChange}
						value={authorId}
						required
					>
						<option value='' disabled>
							Đạo diễn
						</option>
						{data?.authors.map(author => (
							<option key={author.id} value={author.id}>
								{author.name}
							</option>
						))}
					</Form.Control>
				)}
			</Form.Group>
			<Button className='float-right' style={{backgroundColor: "#1d4ed8", border: "none"}} type='submit'>
				Thêm Phim
			</Button>
		</Form>
	)
}

export default FilmForm
