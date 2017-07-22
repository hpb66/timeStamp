var express = require('express');
var app = express();
var moment = require("moment");
function obj(u,n){
  this.unix = u;
  this.natural = n;
}

app.use(express.static('views'));
app.use(express.static('public'));
app.get('/:que', function(req, res){
    var date = req.params.que;
  //date = Number(date);
  console.log(date);
    if(isNaN(date)){
      var time = new obj(moment(date,"MMMM DD, YYYY").format("X"), date);  
      res.json(time);
    }
  else{
    var time = new obj(date, moment(date,"MMMM DD, YYYY").format("MMMM DD, YYYY"));
     res.json(time);
  }

});

app.listen(3000);