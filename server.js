
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Models
const User  = require('./models/Recipe');
const Recipe = require('./models/User');

require('./config');
// Bring in graphql-express middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs} = require('./schema');
const { resolvers} = require('./resolvers');  

// create schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const app = express()

// create graphiQL application
app.use('/graphql', graphiqlExpress({
  endpointURL : '/graphql'
}))
// Connect schema's with grahQL
app.use('/graphql',graphqlExpress({
  schema,
  context : {
    Recipe,
    User
  }
}))

const port = process.env.PORT ||5000;
app.listen(port, () => {
  console.log(`server is running o ${port}`);
})


