var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  app.get('/', function(request, response) {
    response.send(data.toString('utf8', 0, data.length));
  });
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
