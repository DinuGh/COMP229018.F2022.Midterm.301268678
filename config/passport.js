/*-- MidTerm Web Application Development COMP229 
          Dinu Gherciu, ID: 301268678, Fall 2022*/

const passport = require('passport');
const User = require('../models/user');

module.exports = function() {
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({
      _id: id
    }, '-password -salt', (err, user) => {
      done(err, user);
    });
  });

  require('./local')();
};