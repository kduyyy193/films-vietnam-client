import { gql } from '@apollo/client'
import {author_filed} from './fragmentAuthor'
const getFilms = gql`
	query getBooksFilms {
		films {
			name
			id
		}
	}
`

const getSingleFilm = gql`
	${author_filed}
	query getSingleFilmQuery($id: ID!) {
		film(id: $id) {
			id
			name
			genre,
			yearOfRelease
			author {
				...authorFiled
			}
		}
	}
`

const getAuthors = gql`
	query getAuthorsQuery {
		authors {
			id
			name
			date
			address
		}
	}
`

export { getFilms, getSingleFilm, getAuthors }
