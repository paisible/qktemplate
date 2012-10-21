qk.views.welcome = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      
      $("#participate-buttons").addClass("hidden");
      $("#not-found-track").addClass("hidden");

      $("#welcome").removeClass("hidden");
      $("#welcome-name").text(lcdj.me.username);
      $("#avatar").attr("src", lcdj.me.avatar_url);

      /*this.out = "foo";
      qk.render.call(this);*/
    },

    events : {

    },

  };

  return obj;

})());