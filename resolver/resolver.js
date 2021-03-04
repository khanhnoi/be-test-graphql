const { books, authors } = require("../data/static");

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => String(book.id) === args.id),
    authors: () => authors,
    author: (parent, args) =>
      authors.find((author) => String(author.id) === args.id),
  },
  Book: {
    author: (parent, args) =>
      authors.find((author) => String(author.id) == String(parent.authorId)),
  },
  Author: {
    books: (parent, args) =>
      books.filter((book) => String(book.authorId) === String(parent.id)),
  },

  //MUTATION
  Mutation: {
    createAuthor: (parent, args) => args,
    createBook: (parent, args) => args,
  },
};

module.exports = resolvers;
