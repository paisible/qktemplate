qk.views.welcome = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      
      // $("#participate-buttons").addClass("hidden");
      // $("#not-found-track").addClass("hidden");

      this.out = ich.welcome({ name : lcdj.me.username });
      qk.render.call(this);

      $('#welcome').modal()

    },

    events : {

    },

  };

  return obj;

})());