//test
const { books, authors } = require("../data/static");

const Author = require("../models/author");
const Book = require("../models/book");

const resolvers = {
  Query: {
    books: async (parent, args, context) =>
      await context.mongoDataMethods.getAllBooks(),
    // books: () => books,
    book: async (parent, args, context) =>
      await context.mongoDataMethods.getBookById(args.id),
    authors: async (parent, args, context) =>
      await context.mongoDataMethods.getAllAuthors(),
    author: async (parent, args, context) =>
      await context.mongoDataMethods.getAuthorById(args.id),
  },
  Book: {
    author: async (parent, args, context) => {
      // const authors = await context.mongoDataMethods.getAllAuthors();
      // console.log(authors);
      // return authors.find(
      //   (author) => String(author.id) == String(parent.authorId)
      // );
      return await context.mongoDataMethods.getAuthorById(parent.authorId);
    },
    // authors.find((author) => String(author.id) == String(parent.authorId)),
  },
  Author: {
    books: async (parent, args, context) => {
      // const books = await context.mongoDataMethods.getAllBooks();
      // return books.filter(
      //   (book) => String(book.authorId) === String(parent.id)
      // );

      return await context.mongoDataMethods.getBooks(
        (condition = { authorId: parent.id })
      );
    },
  },

  //MUTATION
  Mutation: {
    createAuthor: async (parent, args, context) => {
      return await context.mongoDataMethods.createAuthor(args);
    },
    createBook: async (parent, args, context) => {
      return await context.mongoDataMethods.createBook(args);
    },
  },
};

module.exports = resolvers;
