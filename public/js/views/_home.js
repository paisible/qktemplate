qk.views.home = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });

      lcdj.getWeek(function(d){
        routes["participants"]();
      });

      $("#pp").trigger("click");

    },

    events : {
      "click #go" : "connect"
    },

    connect : function(e){

      lcdj.soundcloud.connect(function(){
        
        lcdj.soundcloud.get_my_song(function(found, track){
          
          Backbone.history.navigate("welcome", true);
          
          lcdj.signup();

          (typeof lcdj.my_song != "undefined") 
          ? Backbone.history.navigate("welcome/song_found", true) 
          : Backbone.history.navigate("welcome/oops", true);
        
        });
      });

    }

  };

  return obj;

})());