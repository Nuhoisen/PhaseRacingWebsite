var express = require('express'),
	app =  express(),
	path = require('path'),
	bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var helmet = require('helmet');
// var https = require('https');
// var fs = require('fs');
var nodemailer = require('nodemailer');
// var options = {
// 	key: fs.readFileSync('server.key'),
// 	cert: fs.readFileSync('server.crt')
// 	};


app.use(express.static('./build'));
app.use(helmet());

app.get('/', function(req, res){
	console.log(req.body)
	res.sendFile(path.join(__dirname, './build', "/index.html"));
});

app.post('/submitEmail', function(req, res){
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		secure: true,
		auth: {
			user: 'oitphaseracingemailacc0unt@gmail.com',
			pass: 'georgiaBeFree817'
		}
	});

	var emailSender = '"' + req.body.email + '"';
    var subjectLine = 'question from ' + req.body.name + '. Listed phone number: ' + req.body.phone + 
    '. ';
	console.log(emailSender)
	var mailOptions = {
		from: emailSender, // sender address
	    to: 'Dustin.Henderson@oit.edu', // list of receivers
	    subject: subjectLine, // Subject line
	    text: req.body.message, // plain text body
	};

	transporter.sendMail(mailOptions, (error, info)=>{
		if(error){
			console.log(error);
		}else{
			console.log('Message sent: ' + infor.response);
		};
	});

	res.sendFile(path.join(__dirname, './public', "/index.html"));
});
/*https.createServer(options, app).listen(3500, function(){
	console.log(options.key);
	console.log(options.cert);
	});*/

app.listen(80, function(){
console.log(__dirname);
})
