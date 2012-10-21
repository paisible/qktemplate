qk.views.song_found = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      
      $("#found-track").removeClass("hidden");
      $("#track-title").text(lcdj.my_song.title);

    },

    events : {

    },

  };

  return obj;

})());