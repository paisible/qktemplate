var $ = require("mongous").Mongous,
	_  = require("underscore");

var db = new function(foo){
	
	this.get= function(cb){
		$("db.collection").find({ foo : foo }, function(r){
		    cb(r);
		});
	}

};

module.exports.db = db;