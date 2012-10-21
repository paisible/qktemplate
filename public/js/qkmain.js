qk = {};

_.extend(qk, {
	views : {}
});

lcdj = {
	souncloud : {}
};

$(window).load(function(){

	SC.initialize({
	client_id: "cd3e7f4ee308c1a8e8aa22bcc206d397",
	redirect_uri: "http://localhost:6969/soundcloud-callback",
	});

	routes = new qk.router();

	Backbone.history.start();

});
