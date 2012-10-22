qk.views.participants = Backbone.View.extend((function(){

  var obj = {

    initialize : function() {
      this.render();
    },

    render : function() {
      var self = this;
      _.each(this.options, function(option, key){ self[key] = option; });
      
      $("#list").html("");

      _.each(lcdj.week_data, function(participant){
        
        var data = participant.member;
        var out = ich.participant({ avatar : data.avatar_url, url : data.permalink_url });
        $("#list").append(out);

      })

    }

  };

  return obj;

})());