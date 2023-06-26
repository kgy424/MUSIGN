//메인 메뉴 움직이는 바
$(".gnb li a").mouseenter(function () {
    let bar = $(this).position().left;
    console.log(bar)
    let widNum = $(this).width();
    $(".bar").animate({
        "left": bar + "px",
        "width": widNum + "px",
        "opacity": 1
    }, 300)
})

$(".gnb").mouseleave(function () {
    $(".bar").animate({
        "left": 0,
        "width": 0,
        "opacity": 0
    })
})


// 전체화면 애니메이션

$('.animate').scrolla({
    // default
    mobile: true, // disable animation on mobiles --> 모바일 버전에서 활성화 할 것인지.
    once: false, // only once animation play on scroll --> 스크롤시 한 번 또는 여러 번 실핼을 설정 할 것인지
    animateCssVersion: 4 // used animate.css version (3 or 4) --> 스크롤라의 버전
});


// menu
// $(".menuOpen .open").on("click",function(){})
$(".menuOpen .open").click(function (e) {
    e.preventDefault();
    $(".menuOpen .menuWrap").addClass("on")
});
$(".menuWrap .close").click(function (e) {
    e.preventDefault();
    $(".menuOpen .menuWrap").removeClass("on")
});


$(".menuWrap ul li").click(function (e) {
    e.preventDefault();
    $(".menuOpen .menuWrap").removeClass("on")
});

//bgc 바꾸기
$(window).scroll(() => {
    // $(this)는 window임
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop)//1583
    let offset=$(".service").offset().top - 400;//service의 천장 값을 offset이라 선언
    if(scrollTop>offset){
        $("body").addClass("on")
    }else{
        $("body").removeClass("on")
    }
})