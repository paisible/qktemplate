qk.views.signup_success = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      
      $("#song_found").remove();

      this.out = ich.signup_success();
      qk.render.call(this);

    }

  };

  return obj;

})());