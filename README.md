# BE NODEJS EXPRESS with GRAPHQL

Test thử mới cái graphQL.

```bash
# development
$ npm init -y
$ npm i express
$ npm i nodemon -D
$ npm i mongoose
$ npm i apollo-server-express
$ npm i graphql

```

```bash
# server.js
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
      "CONNECTDB_URI",
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


```

```bash
# package.json
"scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    },

```
