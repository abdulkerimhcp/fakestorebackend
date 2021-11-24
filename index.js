const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// mongodb+srv://fakestoreAdmin:gXhZbLuR9j4jiDsa@fakestore.lcgji.mongodb.net/fakestoreDB?retryWrites=true&w=majority
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/fakestoreDB",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server runnig ar ${res.url}`);
  });
