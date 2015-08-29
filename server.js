var express = require('express');
var app = express();

var loadtest = require('loadtest');
 
function statusCallback(result) {
    console.log('Current Status: ' + require('util').inspect(result));
}
 
var options = {
    url: 'http://localhost:3002',
    maxRequests: 10000,
    statusCallback: statusCallback
};
 
loadtest.loadTest(options, function(error) {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/main.html');
});

var server = app.listen(3002, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log(loadtest.loadTest);
});
