const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://akluyuko:feron22091996@ds119060.mlab.com:19060/gql-playlist');
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
