qk.views.song_not_found = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      
      //$("#not-found-track").removeClass("hidden");
      this.out = ich.song_not_found();
      //qk.render.call(this);
      $("#welcome .modal-body").append(this.out);

    },

    events : {
      "click #signup_no_song" : "signup_no_song"
    },

    signup_no_song : function(){
      
      lcdj.my_song = null;
      lcdj.signup();

      $('#welcome').modal('hide');

      Backbone.history.navigate("", true);
    }

  };

  return obj;

})());