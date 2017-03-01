const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mailer = require('express-mailer');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

app.use(cors());
app.set('view engine', 'jade');
app.set('views', __dirname+'/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3090;

const server = http.createServer(app);
server.listen(port);
const dir = '/views';
app.use(express.static(__dirname + '/views'));
app.get('/', function(req,res){
	res.render('index');
});
app.get('/work', function(req,res){
	res.render('work');
});
app.get('/contact', function(req,res){
	res.render('contact');
});
app.get('/home', function(req,res){
	res.render('home');
});
app.post('/contact', function(req,res){
let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'test2130mail@gmail.com',
		pass: '1@3$5^7*'
	}
});
let mailOptions = {
	from: req.body.email,
	to: 'tluscik.k@gmail.com',
	subject: req.body.email,
	text: req.body.message,
	html: req.body.message
};
transporter.sendMail(mailOptions, (error, info) => {
	if(error){
		return console.log(error);
	}
	console.log('sth');
	transporter.close();
	res.status(200).redirect('/');

})
});
	console.log('server listening on', port);
