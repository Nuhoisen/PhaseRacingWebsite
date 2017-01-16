var express = require('express'),
	app =  express(),
	path = require('path');

var helmet = require('helmet');
var https = require('https');
var fs = require('fs');

var options = {
	key: fs.readFileSync('server.key'),
	cert: fs.readFileSync('server.crt')
	};


app.use(express.static('./build'));
app.use(helmet());

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, './build', "/index.html"));
});



/*https.createServer(options, app).listen(3500, function(){
	console.log(options.key);
	console.log(options.cert);
	});*/

app.listen(3500, function(){
console.log(__dirname);
})
