// base router

_.extend(qk, {

	router : Backbone.Router.extend({

	  routes : {
	  	"" : "home",
	  	"welcome" : "welcome",
	  	"welcome/oops" : "song_not_found",
	  	"welcome/song_found" : "song_found",
	  	"participants"       : "participants"
	  },

	  before: {
	    '.*' : function() {
	        if(typeof lcdj.me == "undefined"){
	        	Backbone.history.navigate("", true);
	        }
	    }
	  },

	  home : function() {
	   	new qk.views.home({ render_type : "foo", el : $("body") });
	  },

	  welcome : function(){
	  	new qk.views.welcome({ render_type : "foo", el : $("body") });
	  },

	  song_found : function(){
	  	new qk.views.song_found({ render_type : "right-hand", el : $("body") });
	  },

	  song_not_found : function(){
	  	new qk.views.song_not_found({ render_type : "foo", el : $("body") });
	  },

	  signup_success : function(){
	  	new qk.views.signup_success({ render_type : "foo", el : $("body") });
	  },

	  participants : function(){
	  	new qk.views.participants({ render_type : "foo", el : $("body") });
	  },



	})

});