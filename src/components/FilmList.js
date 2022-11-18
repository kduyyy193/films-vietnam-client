import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FilmDetails from './FilmDetails'

import { useQuery } from '@apollo/client'
import { getFilms } from '../graphql-client/queries'

const FilmList = () => {
	const [filmSelected, setFilmSelected] = useState(null)

	const { loading, error, data } = useQuery(getFilms)

	if (loading) return <p>Loading films....</p>
	if (error) return <p>Error loading films!</p>

	return (
		<Row>
			<Col xs={12}>
				<CardColumns>
					{data.films.map(film => (
						<Card
							className='text-center shadow'
							key={film.id}
							onClick={setFilmSelected.bind(this, film.id)}
							style={{ cursor: 'pointer', borderColor: "#1e40af", color: "#1e40af", fontWeight: 500 }}
						>
							<Card.Body>{film.name}</Card.Body>
						</Card>
					))}
				</CardColumns>
			</Col>
			<Col xs={12}>
				<FilmDetails filmId={filmSelected} />
			</Col>
		</Row>
	)
}

export default FilmList
