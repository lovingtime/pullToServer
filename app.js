var express = require('express');
var path = require('path');
var app = express();
var router = require('./router');


app.use('/', router);

app.use(express.static(path.join(__dirname, 'dist')));

console.log(path.join(__dirname, 'dist'))

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});