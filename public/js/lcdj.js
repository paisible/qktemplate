lcdj.soundcloud = new function(){
	
	this.connect = function(cb){

		SC.connect(function() {

	        if(cb){
	        	cb();
	        }

		}); 
	};

	this.get_my_song = function(cb){
		
		SC.get('/me', function(me) {
			lcdj.me = me;
		});

        SC.get('/me/tracks', function(tracks) { 

          _.each(tracks, function(track){
            
            if(track.description != null && track.description.indexOf("#lcdj-saison2-semaine1") != -1){
              lcdj.my_song = track;
            }

          });

          cb();

        });
	};

}

lcdj.signup = function(){
	$.ajax({
		url  : "/signup/",
		data : {
			data : {
				member : lcdj.me,
				song   : lcdj.my_song
			}
		},
		type : "POST",
		success : function(d){
			lcdj.week_data = d.documents;
			Backbone.history.navigate("signup_success", true);
		},
		error   : function(){
			Backbone.history.navigate("signup_error", true);
		}
	});
}

lcdj.getWeek = function(cb){
	$.ajax({
		url  : "/api/week/",
		type : "GET",
		success : function(d){
			lcdj.week_data = d.documents;
			cb();
		},
		error   : function(){
		}
	});
}

