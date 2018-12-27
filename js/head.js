$(()=>{
	$("<link rel='stylesheet' href='css/head.css'></link>").appendTo($("head"));
	$.ajax({
		type:"get",
		url:"head.html",
		success:function(htmls){
			$("#headers").html(htmls);
			$(window).on("scroll",function(){			
				var $navHeader=$("#nav_header");
				var scTop=document.body.scrollTop || document.documentElement.scrollTop;
				if(scTop>117){
					$navHeader.addClass("headScroll");
				}else{
					$navHeader.removeClass("headScroll");
				}
			});
			$("#top_right").on("click","a",function(e){
				var $a=$(this);
				e.preventDefault();
				if($a.is("#top_right>a:first-child")){
					$("#top_right>ul.cities").toggleClass("lgShow");
					$a.children("div:last-child").toggleClass("bgPt");
				}else if($a.is("#top_right>ul.cities>li>a")){
					var $a_show=$("#top_right>a:first-child");
					$a_show.children().first().css("background",$a.children().first().css("background"));
					$a_show.children("span").html($a.text());
					$("#top_right>ul.cities").removeClass("lgShow");				
				}
			})		
		}
	})
})