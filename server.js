const express = require("express");
const app = express();

const { ApolloServer } = require("apollo-server-express");

//Load schema and resolver
const typeDefs = require("./schema/schema");
const resolver = require("./resolver/resolver");
const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolver,
});

server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`Server is running at ${PORT}${server.graphqlPath}`)
);
