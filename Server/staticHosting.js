/*
    Eventually the express server will go away in favor of a cdn
*/

var express = require('express');
var http = require('http');
var path = require('path');


var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, '../Client')));

app.use(express.errorHandler());

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});