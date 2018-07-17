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


});
