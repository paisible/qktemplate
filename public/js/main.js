$(window).load(function(){

	SC.initialize({
	client_id: "cd3e7f4ee308c1a8e8aa22bcc206d397",
	redirect_uri: "http://localhost:6969/soundcloud-callback",
	});

	//$("#weeks").carousel();
	$("#go").click(function(){

		SC.connect(function() {

		  $("#participate-buttons").addClass("hidden");

		  SC.get('/me', function(me) { 
		  	$("#welcome").removeClass("hidden");

		    $("#welcome-name").text(me.username);
		    $("#avatar").attr("src", me.avatar_url);
		  });

		  SC.get('/me/tracks', function(tracks) { 
		  	
		  	var found = false;

		  	_.each(tracks, function(track){
		  		
		  		if(track.description != null && track.description.indexOf("#lcdj-saison2-semaine2") != -1){
		  			found = true;
		  			$("#found-track").removeClass("hidden");
		  			$("#track-title").text(track.title);
		  		}

		  	});

		  	if(!found){
		  		$("#not-found-track").removeClass("hidden");
		  	}

		  });
		});	

	})
});
