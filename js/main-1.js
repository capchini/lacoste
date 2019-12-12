$(function(){
	var n=0;
	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t < $("#service").offset().top){
			n=0;
		}
		else if(t < $("#portfolio").offset().top+300){
			n=1;
		}
		else if(t < $("#about").offset().top){
			n=2;
		}
		else if(t < $("#team").offset().top){
			n=3;
		}
		else if(t < $("#contact").offset().top){
			n=4;

			if(t == $(document).height() - $(window).height()) {
				n=5;
			}
		}
		else{
			n=5;
		}
		console.log(n);

		if(n == 0){
			$("header").addClass("active");
		}
		else{
			$("section").eq(n-1).addClass("active");
		}
	});
});
