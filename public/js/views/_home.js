qk.views.home = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      
      // this.out = "foo";
      // qk.render.call(this);

    },

    events : {
      "click #go" : "connect"
    },

    connect : function(e){

      lcdj.soundcloud.connect(function(){
        
        lcdj.soundcloud.get_my_song(function(found, track){
          
          Backbone.history.navigate("welcome", true);
          
          if(!found){
            Backbone.history.navigate("welcome/oops", true);
          }
          else{
            Backbone.history.navigate("welcome/song_found", true);
          }
        
        });
      });

    }

  };

  return obj;

})());