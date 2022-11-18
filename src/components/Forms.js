import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FilmForm from './FilmForm'
import AuthorForm from './AuthorForm'

const Forms = () => {
	return (
		<Row >
			<Col xs={12}>
				<FilmForm />
			</Col>
			<Col xs={12}>
				<AuthorForm />
			</Col>
		</Row>
	)
}

export default Forms
