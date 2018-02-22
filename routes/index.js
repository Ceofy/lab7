var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.viewAlt = function(request, response){
  response.render('index', projects);
  projects["viewAlt"] = false;
};

exports.view = function(request, response){
  	response.render('index', projects);
    projects["viewAlt"] = true;
};
