$(document).ready(function () {
    $(".nav>li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown();
    });
    $(".nav>li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    });


    var len = 2;
    var i = 0;

    var auto = setInterval(function () {
        if (i == len) {
            i = 0;
        } else {
            i = i + 1;
        }
        $(".slide>img").fadeOut();
        $(".slide>img").eq(i).fadeIn();
    }, 2000);
    //슬라이드

    $(".name li").click(function () {
        var list = $(this).index();
        $(".name li").removeClass("on");
        $(".name li").eq(list).addClass("on");
        $(".table div").stop().fadeOut();
        $(".table div").eq(list).stop().fadeIn();
    });
    //탭메뉴

    $(".note p>a").click(function () {
        $(".pop").stop().show();
    });
    $(".pop .close").click(function () {
        $(".pop").stop().hide();
    });
    //팝업
});

//start();
//var imgs=2;
//var now=0;
//
//function start() {
//    $(".imgs>img").eq(0).siblings().css('margin-left','-2000px');
//    setInterval(function(){slide();},2000);
//}
//function slide() {
//    if(now==imgs) now=0;
//    else now+=1;
//    
//    $(".imgs>img").eq(now-1).css('margin-left','-2000px');
//    $(".imgs>img").eq(now).css('margin-left','0px');
//}

