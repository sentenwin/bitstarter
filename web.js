var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('<html><head><title>Senthils App</title></head>');
  response.send('<body><h1>Hello Senthil heroku app</h1></body></html>');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
