$(document).ready(
	function(){
		//alert("Hello World");
		if(typeof($.fn.popover) !== undefined){
                //alert("Hello World")
                $('.list-group-item').hover(function(){
                		$(this).addClass('active');
                },
                function(){
                	$(this).removeClass('active')
                });
		}
	}
);

