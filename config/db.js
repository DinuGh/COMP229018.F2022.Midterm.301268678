/*-- MidTerm Web Application Development COMP229 
          Dinu Gherciu, ID: 301268678, Fall 2022*/

// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://dbuser:Dinu.Gh3rciu_i993.i7@dinucluster.4dzj7fm.mongodb.net/test";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

// Connect to the database
    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}