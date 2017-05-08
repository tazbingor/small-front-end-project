$(function () {
    //banner轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        // slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
    });

    //图集轮播
    var swiper2 = new Swiper('#albumSlides', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 0,
        grabCursor: true
    });


});
