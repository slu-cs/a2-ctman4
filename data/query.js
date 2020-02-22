
// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Voter = require('./schema');

connect(); // To the database

/*// What documents are in the collection?
const query = Professor.find();
query.exec(function(error, professors) {
  if (error) console.error(error.stack);
  console.log(professors);
});*/

const queries = [

  // What are names in alphabetical order?
  Voter.find().sort('firstName'),

  // Who started most recently?
  Voter.find().sort('-zip').limit(1),

  // Who started in 2003?
  Voter.find().where('zip').equals(13617),

  // Who teaches 362?
  //Voter.find().where('courses').in(362),

  // What are all the ranks?
  //Voter.distinct('rank')
];

// Run the queries in parallel
Promise.all(queries)
  .then(function(results) {
    console.log('Names in order: ', results[0].map(p => p.firstName));
    console.log('Started most recently: ', results[1].map(p => p.firstName));
    console.log('Started in 2003: ', results[2].map(p => p.firstName));
    //console.log('Teaches 362: ', results[3].map(p => p.name));
    //console.log('Distinct ranks: ', results[4]);
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
