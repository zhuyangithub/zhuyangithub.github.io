$(function() {

    document.getElementById('bi').addEventListener('animationend',ListenerFn)
    
    if(sessionStorage['bj']==1){
        $(".loading").remove();
        $(".page1 img").attr("swiper-animate-delay","0s")
        $(".bi").css("animation-delay","3s")
    }

    var snum = 9;
    var mySwiper = new Swiper ('.swiper-container', {
        direction : 'vertical',
        pagination: '.swiper-pagination',
        mousewheelControl : true,
        watchSlidesProgress: true,
        lazyLoading : true,
        onInit: function(swiper){
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
            sessionStorage.setItem('bj',1)
        },
        onSlideChangeEnd: function(swiper){
            if(swiper.activeIndex==0){
                $(".page1 img").attr("swiper-animate-delay","0s")
            }
            swiperAnimate(swiper);
            if(snum == swiper.activeIndex){
                //执行事件
                $(".bottomIcon").hide();
                $(".dian").show();
            }else{
                $(".bottomIcon").show();
            }
        },
            onTransitionEnd: function(swiper){
            swiperAnimate(swiper);
        }
    })

    var time = 1
    var number = 0 
    var t = setInterval(function(){
        
        if(t==10){
            $(".loading").hide();
            clearInterval(t)
        }else{
            if(number>=100){
                number=100;
            }
            $(".loadingTxt").html(number+"%")
        }
        t++;
        number+=15;
    },1000);

});


function ListenerFn(){
    var timeTemp = 0
    var a = setInterval(function(){
        if(timeTemp==1){
            $(".bi").css("animation-name","shan2").css("animation-iteration-count","infinite").css("animation-duration","2s").css("animation-delay","0s")
            clearInterval(a)
        }
        timeTemp++
    },1000)
    

}