/*-- MidTerm Web Application Development COMP229 
          Dinu Gherciu, ID: 301268678, Fall 2022*/

var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
