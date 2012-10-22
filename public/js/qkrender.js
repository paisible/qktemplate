
_.extend(qk, {

	render : function(cb){

        var output = this.out || "";
        
        switch(this.render_type){

            case "foo" :
                $(".well").append(output);
                break;

            case "right-hand" :
            	$(".right-hand").append(output);
            	break;
            
            default :
                break;
        }

        if(cb) cb();
	}
});