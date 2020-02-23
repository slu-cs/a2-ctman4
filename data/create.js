// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});
connect(); // To the database

// Create some faculty

// Reset the data
mongoose.connection.dropDatabase()
  //.then(() => harcourt.save())
  //.then(() => torrey.save())
  .then(() => file.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
