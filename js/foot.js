$(()=>{
	$("<link rel='stylesheet' href='css/foot.css'></link>").appendTo("head");
	$.ajax({
		type:"get",
		url:"foot.html",
		success:function(htmls){
			$("#footers").html(htmls);
		}
	})
})