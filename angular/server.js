var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

/*
app.get('/', function(req, res){
  res.send('Hello World');
});
*/
// Note: Uses the CLOUD9 port
app.listen(process.env.PORT, process.env.IP);