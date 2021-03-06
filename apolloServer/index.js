const { ApolloServer, gql } = require('apollo-server-koa');

const typeDefs = gql`
type Query {
    hello: String
}`;

const resolvers = {
    Query: {
        hello: () => 'Hello world',
    },
};

export const server = new ApolloServer({ typeDefs, resolvers });