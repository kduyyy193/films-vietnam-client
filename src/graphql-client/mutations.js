import { gql } from '@apollo/client'

const addSingleFilm= gql`
	mutation addSingleFilmMutation(
		$name: String
		$genre: String
		$yearOfRelease: String
		$authorId: ID!
	) {
		createFilm(name: $name, genre: $genre, yearOfRelease: $yearOfRelease, authorId: $authorId) {
			id
			name
		}
	}
`

const addSingleAuthor = gql`
	mutation addSingleAuthorMutation($name: String, $date: String, $address: String) {
		createAuthor(name: $name, date: $date, address: $address) {
			id
			name
		}
	}
`

export { addSingleFilm, addSingleAuthor }
