$(function() {
    var snum = 10;
    var mySwiper = new Swiper ('.swiper-container', {
        direction : 'vertical',
        pagination: '.swiper-pagination',
        mousewheelControl : true,
        watchSlidesProgress: true,
        lazyLoading : true,
        onInit: function(swiper){
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function(swiper){
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
