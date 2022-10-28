/*-- MidTerm Web Application Development COMP229 
          Dinu Gherciu, ID: 301268678, Fall 2022*/

let mongoose = require('mongoose');

// Create a model class
let todoModel = mongoose.Schema(
    {
        task: String,
        description: String,
        complete: { type: Boolean, default: false }        
    },
    {
        collection: "todo"
    }
);

module.exports = mongoose.model("Todo", todoModel);