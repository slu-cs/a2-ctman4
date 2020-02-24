
// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); // To the database

// What documents are in the collection?

const queries = [

  // What are names in alphabetical order?
  //Voter.filter(('firstName').equals('STARR')),
  // Who started most recently?
  //Voter.find().sort('history').substr(0, 2).equals('GE16'),

  // Who started in 2003?
  //Voter.find().sort('firstName')
  //Voter.find().sort('firstName'),

  // Who started most recently?
  //Voter.find().sort('-lastName').limit(1),

  // Who started in 2003?


  // Who teaches 362?

  // What are all the ranks?
  //Voter.distinct('lastName')
  Voter.find(),
  // Who teaches 362?
  //Voter.find().where('courses').in(362),
  Voter.where('firstName').equals('STARR'),

  Voter.where('history').in('GE16')




  // What are all the ranks?
  //Voter.distinct('rank')

  //How many registered voters live in the Canton zip code (13617)?

  //What are the full names of all the registered voters whose first-name is STARR?
  //How many people voted in the 2016 general election (GE16)?
  //What is the last-name that comes last in the county in alphabetical order?
  //How many zip codes does the county contain?
];

// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('Registered voters with first name STARR: ', results[1].map(v => v.firstName + " " + v.lastName));
    //console.log('Voted in the 2016 general election: ', results[1].map(p => p.history));
    //console.log('Started in 2003: ', results[0]);
    //console.log('Teaches 362: ', results[3].map(p => p.name));
    //console.log('Distinct ranks: ', results[2]);
    console.log(results[0].length);

    mongoose.connection.close();
  }).catch(error => console.error(error.stack));

//Promises: Objects that represent pending asynchronous calls
//Original callback style: asynch_call(callback);
//Promise Style: promise = synch_call(); or promise.then(callback);




  //use the APIs on mogoose website to use things like find() to make these
  //What are names in alphebetical order?

  //who started most recently?



  //Who teaches 332?



  //What are all the ranks?
  //Do this that will list the ranks without listing the same rank more than once
  //lisa and chong soo have the same rank but we dont want to see it twice



  //when looking at articles online only use stuff thats recent because stuff changes very fast

  //map operation takes an array of something and creates another array
  //In this case we have a professor object with a corresponding name and
  //we are mapping the objects to the array of names

  //to avoid nesting, use a chain of .then()s for the callbacks. This is just a long chain of method calls
  //then use a catch at the end of the code which will catch any errors that occur
  //then we replace the 'function' calls with mapping: .then(() => harcourt.save())
