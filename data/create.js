// Store some data in the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect();

const fs = require('fs');
const readline = require('readline');
const file = readline.createInterface({
  input: fs.createReadStream('voters.csv')
});

const voters = [];
file.on('line', function(line) {
  const Voter = line.split(',');
  voters.push({
    firstName: columns[0],
    lastName: columns[1],
    zip: columns[2],
    history: columns[3]

  });
});


// Create some faculty

// Reset the data
mongoose.connection.dropDatabase()
  //.then(() => harcourt.save())
  //.then(() => torrey.save())
  .then(() => voters.save())
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));
