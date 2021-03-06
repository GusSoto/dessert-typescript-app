import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://fakeUri',
    cache: new InMemoryCache()
});
