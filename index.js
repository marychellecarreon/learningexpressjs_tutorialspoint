var express = require ('express');
var app = express();
var things = require('./things.js');

app.get('/things/:name/:id', function(req,res){
	res.send('The id you specified is' + req.params.id + 'and name' + req.params.name);
});


app.listen(3000);