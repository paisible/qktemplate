qk.views.song_not_found = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      
      $("#not-found-track").removeClass("hidden");

    },

    events : {

    },

  };

  return obj;

})());