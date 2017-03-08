/* RESTful API using Node.js, Express and MySQL
*  Eddy Huang
*  Date: 2016-12-01
*/


var express = require('express');
var bodyparser = require('body-parser'); // For processing POST requests properly
var connection = require('./connection');
var routes = require('./routes');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

var server = app.listen(8000, function() {
    console.log('Server listening on port ' + server.address().port);
});