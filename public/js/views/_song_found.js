qk.views.song_found = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      
      this.out = ich.song_found({ song_title : lcdj.my_song.title, url : lcdj.my_song.permalink_url });
      $("#welcome .modal-body").append(this.out);

      if(lcdj.my_song.sharing == "public"){

      }

    },

    events : {
      "click #add_song" : "add_song"
    },

    add_song : function(){
      lcdj.signup();
      $('#welcome').modal('hide');
      Backbone.history.navigate("", true);
    }

  };

  return obj;

})());