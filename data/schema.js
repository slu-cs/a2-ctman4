//Define a plan for a collection, Schema is a plan
const mongoose = require('mongoose');

//Schema for a collection of professors
const Voter = new mongoose.Schema({
  //four columns
  firstName: String,
  lastName: String,
  zip: Number,
  history: String//an array
});

//Speed up queries on all fields //allows to search in each column
Voter.index({firstName: 'firstName'});
Voter.index({lastName:1});
Voter.index({zip:1});
Voter.index({history:1});

//Compile and export this Schema
module.exports = mongoose.model('Voter', Voter);
