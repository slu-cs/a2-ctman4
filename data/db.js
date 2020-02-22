//Connect to a database about faculty
const mongoose = require('mongoose');

//Export this function
module.exports = function(){

  // Avoid warnings
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  // Start connecting, faculty is the database name
  mongoose.connect('mongodb://localhost/data');

  // Make sure we see any errors
  mongoose.connection.on('error', function(error) {
    console.error(error.stack);
  });
};
