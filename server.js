var express = require('express');
var app = express();

app.get('/prefix-postfix', function (req, res) {
  res.sendFile(__dirname + '/main.html');
});

app.get('/stacks', function(req, res) {
  res.sendFile(__dirname + '/stacks.html')
});

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/pointers_in_C.html')
});

var server = app.listen(3002, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
