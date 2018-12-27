$(function () {
    $('html,body').animate({scrollTop:0},1000);
    //全屏滚动效果
    var height=parseFloat(window.innerHeight);
    $("div.section").css("height",height);
    var w=0,n=0;
    if(navigator.userAgent.indexOf("Firefox")>0){
        var eve="DOMMouseScroll";
    }else{
        var eve="mousewheel";
    }
    var lastScrollTime=new Date().getTime();
    var delay=1000;
    // console.log(n);
   $("#section").on(eve,function(e){
       //全屏滚动
        //e=e||window.event;
        e.preventDefault();
        if(new Date().getTime()-lastScrollTime<delay) return;
        lastScrollTime=new Date().getTime();
        $scro=$(this);
       var timer1=null;
        // console.log(e.originalEvent.wheelDelta,e.wheelDelta,e.detail);
            if(e.originalEvent.wheelDelta<0 || e.detail>0){
                if(w<=-(5*height+$("#footers").height())) return;
                if(w<=-5*height){
                    w-=$("#footers").height();
                }else{
                    w-=height;
                }
                //console.log(w);
                // $scro.css("transform",`translate3d(0px,${w}px,0px)`);
                timer1=setInterval(function () {
                    n+=10;
                    window.scrollTo(0,n);
                    if(n>=-w){
                        clearInterval(timer1);
                        timer1=null;
                    }
                },10)
               //console.log(1);
            }else if(e.originalEvent.wheelDelta>0 || e.detail<0){
                if(w>=0) return;
                if(w<-5*height){
                    w+=$("#footers").height();
                }else{
                    w+=height;
                }
                 //console.log(w);
                // $scro.css("transform",`translate3d(0px,${w}px,0px)`);
                timer1=setInterval(function () {
                    n-=10;
                    window.scrollTo(0,n);
                    if(n<=-w){
                        clearInterval(timer1);
                        timer1=null;
                    }
                },5)
            }
       //console.log(n);
   });
    //计算函数：元素是否到达可视区域内
    function view(el){
       var objHeight=$(el).offset().top;
       var scrollHight=document.body.scrollTop || document.documentElement.scrollTop;
        //console.log(objHeight,scrollHight);
        if(objHeight-scrollHight>-height/3 && objHeight-scrollHight<height/3){
           return true
       }else{
           return false
       }
    }
    //滚动播放
    $(window).scroll(function () {
        var fv=$("[data-floor]");
        //console.log(fv);
        if(fv.length>0){
            fv.each(function () {
                var $ele=$(this);
                //console.log($ele);
                // console.log(view($ele));
                if(view($ele)){
                    $ele.children("video.floor_video").trigger("play");
                }else{
                    $ele.children("video.floor_video").trigger("pause");
                }
            })
        }
    });

    //floor1点击播放和关闭视频
    $("#floor1>a").click(function (e) {
        e.preventDefault();
        $("#fl1_Player").show();
        $vid=$("#fl1_Player>video");
        $vid.attr("src","img/main/1022_5dad5415ceb249339a0bf9662bfd414e.f0.mp4");
        $vid.trigger("play");
    });
    $("#fl1_Player>.player_close").click(function (e) {
        e.preventDefault();
        $("#fl1_Player").hide();
        $vid=$("#fl1_Player>video");
        $vid.attr("src","");
        $vid.trigger("pause");
    });
    //floor2点击+，装备栏显示
    $("#fl2_click").click(function () {
        $mouse_click=$(this);
        $mouse_click.siblings("#fl2_content").children(".fl2_equip").css("opacity","1").siblings(".fl2_title").children("span").css("transform","translate3d(-80%,0,0)");
        $mouse_click.siblings("video").trigger("pause");
        $mouse_click.css("display","none")
    });

    //floor3点击+，武器栏显示以及轮播
    var e_count=1,timer2=null;
    var $sniper=$(".fl3_equip>.equip_sniper");
    var $rifle=$(".fl3_equip>.equip_rifle");
    var e_count=1;
    $("#fl3_click").click(function () {
        $mouse_click=$(this);
        $mouse_click.siblings("#fl3_content").children(".fl3_equip").css("display","block").siblings(".fl3_title").children("span").css("transform","translate3d(-80%,0,0)");
        $mouse_click.siblings("video").trigger("pause");
        $mouse_click.css("display","none");
        weapon_banner();
    });
    //武器轮播函数
    function weapon_banner(){
        timer2=setInterval(function() {
            $sniper.children("div:eq("+e_count+")").addClass("weapon_active").siblings().removeClass("weapon_active");
            $rifle.children("div:eq("+e_count+")").addClass("weapon_active").siblings().removeClass("weapon_active");
            e_count++;
            if(e_count>2) e_count=0;
            // console.log(e_count);
        },3000);
        // clearInterval(timer2);
    }
    //hover暂停轮播
        $(".fl3_equip").hover(function (w) {
            if(timer2!=null){
                clearInterval(timer2);
                timer2=null;
            }
        },function () {
            weapon_banner();
        });
    //floor4点击显示
    $("#fl4_click").click(function () {
        $mouse_click=$(this);
        $mouse_click.siblings("#fl4_content").children(".fl4_bg").addClass("fl4_active").siblings(".fl4_title").children("span:first-child").css("transform","translate3d(-30%,-320%,0)").siblings("span:nth-child(2)").css("transform","translate3d(45%,-416%,0)").siblings("span:last-child").css("transform","translate3d(-25%,-15rem,0)");
        $mouse_click.siblings("video").trigger("pause");
        $mouse_click.css("display","none");
    });
    //车辆选择
    $("#fl4_content>.fl4_number").on("click","li>a",function (e) {
        e.preventDefault();
        var $a=$(this);
        var i=$a.parent("li").index();
        console.log(i);
        $a.parent("li").addClass("on").siblings().removeClass("on").parent("ul").siblings(".fl4_carrier").children("div:eq("+i+")").addClass("active").siblings().removeClass("active");
    })
    //天气变化显示
    $("#fl5_content").on("mouseenter",".fl5_envir>.envir_weather>li",function () {
        $(this).addClass("show_weathr").css("width","52%").siblings().css("width","24%").removeClass("show_weather");
    });
    $("#fl5_content").on("mouseleave",".fl5_envir>.envir_weather>li",function () {
        $li=$(this);
        $li.removeClass("show_weathr").css("width","34%").siblings().css("width","33%");
    })
    //地形变化显示
    $("#fl5_content>.fl5_envir>.envir_geography").on("mouseenter","li",function () {
        $(this).addClass("show_geography").css("width","40%").siblings().css("width","15%").removeClass("show_geography");
    });
    $("#fl5_content>.fl5_envir>.envir_geography").on("mouseleave","li",function () {
        $li=$(this);
        $li.removeClass("show_geography").css("width","20%").siblings().css("width","20%");
    })
    //环境选择
    $("#fl5_content>.fl5_evcg").on("click","li>a",function (e) {
        e.preventDefault();
        var $a=$(this);
        var i=$a.parent().index();
        $a.parent().addClass("envir_focus").siblings().removeClass("envir_focus").parent().siblings(".fl5_envir").children("ul:eq("+i+")").addClass("envir_show").siblings().removeClass("envir_show");
    })
    //floor6鼠标移入事件
    $("#floor6").on("mouseenter","div.mouse_click",function () {
        var $hover=$(this);
        var id=$hover.data("video");
        $("#"+id).css("display","block")
    })
    $("#floor6").on("mouseleave","div.mouse_click",function () {
        var $hover=$(this);
        var id=$hover.data("video");
        $("#"+id).css("display","none")
    })
});