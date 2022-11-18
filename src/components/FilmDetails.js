import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import { getSingleFilm } from '../graphql-client/queries'
import { useQuery } from '@apollo/client'

const FilmDetails = ({ filmId }) => {
	const { loading, error, data } = useQuery(getSingleFilm, {
		variables: {
			id: filmId
		},
		skip: filmId === null
	})

	if (loading) return <p>Loading book details...</p>
	if (error) {
		console.log(error.message)
		return <p>Error loading book details!</p>
	}

	const film = filmId !== null ? data.film : null

	return (
		<Card style={{backgroundColor: "#2563eb"}} text='white' className='shadow'>
			<Card.Body>
				{film === null ? (
					<Card.Text>Please select a film</Card.Text>
				) : (
					<Fragment>
						<Card.Title>{film.name}</Card.Title>
						<Card.Subtitle>Thể loại: {film.genre}</Card.Subtitle>
						<p>Đạo diễn: {film.author.name} ~ ({film.author.date}) ~ {film.author.address}.</p>
						<p>Năm ra mắt: {film.yearOfRelease}</p>
						<p>Những bộ phim của đạo diễn {film.author.name}:  </p>
						<ul>
							{film.author.films.map(film => (
								<li key={film.id}>{film.name}</li>
							))}
							....
						</ul>
					</Fragment>
				)}
			</Card.Body>
		</Card>
	)
}

export default FilmDetails
