var express=require('express');
var app=express();
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

// Increment a counter.
dogstatsd.increment('page.views')


var routes=require('./routes/route.js');

app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

app.get('/',routes.home);

var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});