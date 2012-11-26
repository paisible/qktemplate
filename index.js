var express = require('express'),
	sio = require('socket.io'),
	ejs = require('ejs'),
	fs = require('fs'),
	db = require('./libs/db').db;

var app = express();
var pub = __dirname + '/public';

var current_week = "saison2_semaine1";
var past_week = "saison2_semaine0";

app.configure(function() {
	app.use(express.errorHandler({ dump: true, stack: true }));
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.session({ secret: 'mruff' }));
	app.set('views', pub);
	app.set('view engine', 'ejs');
	app.set("view options", {layout: false});

	app.use(app.router);
	app.use(express.static(pub));
});

/*
	Routing
*/
app.get('/', function(req, res){
	res.sendfile(__dirname + '/public/index.html');
});

app.get('/soundcloud-callback', function(req, res){
	res.sendfile(__dirname + '/public/index.html');
});

app.post('/signup/', function(req, res){
	var data = req.body.data;
	db.signup(current_week, data);
	db.getWeek(current_week, function(d){
		res.send(d);
	});
});

app.get('/api/week/', function(req, res){
	db.getWeek(current_week, function(d){
		res.send(d);
	});
});

app.get('/api/week/:name', function(req, res){
	db.getWeek(req.params.name, function(d){
		res.send(d);
	});
});

app.get('/templates', function(req,res){
	res.sendfile(__dirname + '/public/templates/templates.json');
});

app.listen(6969);
