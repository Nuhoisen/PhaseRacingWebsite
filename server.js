var express = require('express'),
	app =  express(),
	path = require('path');

app.use(express.static('./build'));


app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, './build', "/index.html"));
});


app.listen(3500, function(){
console.log(__dirname);
})
