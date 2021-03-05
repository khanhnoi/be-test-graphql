const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { ApolloServer } = require("apollo-server-express");

//Load schema and resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const PORT = process.env.PORT || 5000;

//Load DB methods
const mongoDataMethods = require("./data/db");

//Connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khanhnoi:khanhnoi123456@graphql.3m5da.mongodb.net/graphDatabase?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log("MONGODB CONNECTED !!");
  } catch (error) {
    console.log(error);

    //ca web sap luon
    process.exit(1);
  }
};
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`Server is running at ${PORT}${server.graphqlPath}`)
);
