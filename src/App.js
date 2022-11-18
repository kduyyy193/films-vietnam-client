import Container from 'react-bootstrap/Container'
import FilmList from './components/FilmList'
import Forms from './components/Forms'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
	uri: 'https://films-vietnam-server.onrender.com/graphql',
	cache: new InMemoryCache()
})

function App() {
	return (
		<ApolloProvider client={client}>
			<Container className='py-3 mt-3 size-custom border-custom'>
				<h1 style={{ color: "#1e40af",  fontWeight: 800}} className='text-center  mb-3'>My Films</h1>
				<hr />
				<Forms />
				<hr />
				<FilmList />
			</Container>
		</ApolloProvider>
	)
}

export default App
