let promoHeadSlider = document.querySelector('[data-slider="promo-head"]');
if(promoHeadSlider) {
    let slider = new Swiper(promoHeadSlider.querySelector('.swiper'), {
        effect: 'fade',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        //autoHeight: true,
        speed: 800,
        loop: true,
        pagination: {
        	el: promoHeadSlider.querySelector('.swiper-pagination'),
        	clickable: true,
        }
    });
}