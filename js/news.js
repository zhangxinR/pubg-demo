$(function () {
    var nid=((location.search).split("="))[1];
    console.log(nid);
    $.ajax({
        type:"get",
        url:"data/getNews_detail.php",
        data:{nid},
        success:function (data) {
            //console.log(data);
            var {ntitle,ndetail}=data;
            $("#news_title").html(ntitle);
            $("#news_article").html(ndetail);
        }
    })
})