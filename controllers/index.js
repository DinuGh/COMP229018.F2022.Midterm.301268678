/*-- MidTerm Web Application Development COMP229 
          Dinu Gherciu, ID: 301268678, Fall 2022*/

exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Home',
        username: req.user ? req.user.username : ''
    });
};