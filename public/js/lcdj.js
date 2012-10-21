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
          
          var found = false;

          _.each(tracks, function(track){
            
            if(track.description != null && track.description.indexOf("#lcdj-saison2-semaine1") != -1){
              found = true;
              lcdj.my_song = track;
            }

          });

          cb(found);

        });
	}

}