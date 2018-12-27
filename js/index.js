$(function(){
    //动态生成patch_notes
    $.ajax({
        type:"get",
        url:"data/patch_notes.php",
        success:function (data) {
            //console.log(data);
            var html="";
            var pic=[];
            for(var dt of data){
                var{pid,ptitle,purl,pimg,pdc}=dt;
                console.log(ptitle);
                html+=`<li>
						<div class="patch_pt" data-pid="${pid}" style="background:url('img/index/download.png') no-repeat 0 100%,url(${pimg}) no-repeat;background-size:contain,100% 100%">
						</div>
						<div class="patch_detail">
							<p>${ptitle}</p>
							<a href="${purl};">${pdc}</a>
							<span></span>
						</div>
					</li>`;
                pic.push(pimg);
            }
            $("#patch_list").html(html);
        },
        error:function () {
            alert("网络故障，请检测！");
        }
    });
    //动态生成dev_blog
    $.ajax({
        type:"get",
        url:"data/dev_blog.php",
        success:function (data) {
            console.log(data);
            var html="";
            var pic=[];
            for(var dt of data){
                var{did,dtitle,durl,dimg,ddc}=dt;
                html+=`<li>
						<div class="patch_pt" data-did="${did}" style="background: url('img/index/download.png') no-repeat 0 100%,url(${dimg}) no-repeat;background-size: contain,100% 100%">
						</div>
						<div class="patch_detail">
							<p>${dtitle}</p>
							<a href="${durl};">${ddc}</a>
							<span></span>
						</div>
					</li>`;
                pic.push(dimg);
            }
            $("#blog_list").html(html);
        },
        error:function () {
            alert("网络故障，请检测！");
        }
    });
    //轮播图
    var $ulList=$("#banner>.banner_list");
    var $ulIdt=$("#banner>.banner_indicator");
    var n=0;
    var timer=null;
    function banner(){
        $ulList.children("li:eq("+n+")").addClass("show").siblings("li").removeClass("show");
        $ulIdt.children("li:eq("+n+")").addClass("s_indicator").siblings("li").removeClass("s_indicator");
        n++;
        if(n>=3)
            n=0;

    }
    banner();
    function autoBanner(){
        timer=setInterval(banner,3000);
    }
    autoBanner();
    function mshover(m,slt){
        m.find(slt).hover(function(){
                clearInterval(timer);
                timer=null;
            },
            function(){
                autoBanner();
            });
    };
    mshover($ulList,"li>a");
    mshover($ulIdt,"li");
    $ulIdt.on("click","li",function(){
        $li=$(this);
        var i=$li.index();
        $ulList.children("li:eq("+i+")").addClass("show").siblings("li").removeClass("show");
        $ulIdt.children("li:eq("+i+")").addClass("s_indicator").siblings("li").removeClass("s_indicator");
    });
    //新闻公告标签页
    function loadNewList(type){
        $.ajax({
            type:"get",
            url:"data/getNews_part.php",
            data:{ntype:type},
            success:function (data) {
                console.log(data)
                var html="";
                for(var i=0;i<data.length;i++){
                var {nid,ntitle,ntype,ntime}=data[i];
                ntime=new Date(parseInt(ntime)).toLocaleDateString();
                if(type=="synthesis" && i==0){
                        html+=`
                         <li>
								<a href="./news.html?nid=${nid}">
									<span>[置顶公告]</span>
									<span>${ntitle}</span>
								</a>
								<span>${ntime}</span>
							</li>
                    `;
                }else{
                    console.log(1);
                    var tp=""
                        switch (ntype){
                            case "new":tp="新闻";
                            break;
                            case "notice":tp="公告";
                            break;
                            case "activity":tp="活动";
                            break;
                            case "media":tp="媒体";
                            break;
                            case "competition":tp="赛事";
                            break;
                            default:tp=""
                        }
                        html+=`
                            <li>
								<a href="news.html?nid=${nid}">
									<span>[${tp}]</span>
									<span>${ntitle}</span>
								</a>
								<span>${ntime}</span>
							</li>
                        `
                    }
                 }
                var nId="#"+type;
                $(nId).html(html);
            },
            error:function () {
                alert("网络故障！请检测")
            }
        });
    }
    loadNewList("synthesis");
    loadNewList("new");
    loadNewList("notice");
    loadNewList("activity");
    loadNewList("competition");
    loadNewList("media");
    $("#news>.news_title").on("mouseenter","li>a",function (e) {
        e.preventDefault();
        var $a=$(this);
        var i=$a.parents().index();
        var w=parseFloat($("#news").css("width"));
        var lgh=i*-w;
        //console.log(i);
        $("#news>.news_detail").css("left",lgh);
        $a.parents().addClass("active").siblings().removeClass("active");
    })
    //配置检测标签页
    $("#config>.config_options").on("click","li",function (e) {
        e.preventDefault();
        var $tab=$(this);
        var id="#"+$tab.children("a").data("config");
        $tab.addClass("active").siblings("li").removeClass("active");
        $(id).addClass("show").siblings("div").removeClass("show");
    })
});