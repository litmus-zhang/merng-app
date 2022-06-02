const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose')
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

//Mongodb connection
const URL = "mongodb+srv://admin:admin123@mern-graphql.cjhkhaf.mongodb.net/mern-graphql?retryWrites=true&w=majority"

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
{ 
    console.log("Connected to MongoDB Successfully");
})


const startServer = async () =>
{
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });
    app.listen(4000, () =>
    {
        console.log("Server is running on port 4000");
    })

};

startServer();