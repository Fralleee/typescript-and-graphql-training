import { FC } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Country from 'components/Country';

const client = new ApolloClient({
  uri: 'https://graphql.country/graphql',
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Country />
      </div>
    </ApolloProvider>
  );
}

export default App;
