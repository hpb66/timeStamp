var express = require('express');
var app = express();
app.use(express.static('views'));
app.use(express.static('public'));
app.get('/', function(req, res){
  
});

app.listen(3000);