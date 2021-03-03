const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    genre: String
  }

  #ROOT TYPE
  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;
