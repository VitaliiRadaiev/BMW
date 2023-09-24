let modelsSliders = document.querySelectorAll('.models [data-slider="models"]');

if (modelsSliders.length) {
    modelsSliders.forEach(modelsSlider => {
        let slider = new Swiper(modelsSlider.querySelector('.swiper'), {
            spaceBetween: 0,
            //autoHeight: true,
            speed: 800,
            freeMode: true,
            grid: {
                rows: 2,
            },
            navigation: {
                nextEl: modelsSlider.querySelector('.models__slider-btn.right'),
                prevEl: modelsSlider.querySelector('.models__slider-btn.left'),
            },
            
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                }
            },
    
        });
    })
}
