$(function(){
	var n=0;
	var t=0;
	var firstFlag=false;

	setTimeout(function(){
		$("html").animate({scrollTop : 0}, 800);
		firstFlag=true;
		$(window).trigger("scroll");
	}, 10);

	$(window).scroll(function(){
		if(firstFlag == false){
			return false;
		}
		t=$(window).scrollTop();

		if(t < $("#service").offset().top-600){
			n=0;
		}
		else if(t < $("#portfolio").offset().top-800){
			n=1;
		}
		else if(t < $("#about").offset().top-800){
			n=2;
		}
		else if(t < $("#team").offset().top-800){
			n=3;
		}
		else if(t < $("#contact").offset().top-1500){
			n=4;
		}
		else{
			n=5;
		}
		if(n == 0){
			$("header").addClass("active");
			$(".navi").addClass("active");
		}
		else{
			$("section").eq(n-1).addClass("active");
		}
		console.log(n);
	});
	$(window).trigger("scroll");
});
