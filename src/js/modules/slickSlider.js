import 'slick-slider';
export const slickSlider = () => {
    if($('.intro-slider').length > 0){
        $('.intro-slider').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: false, // use align-items: flex-start on slick-track
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            easing: 'ease',
            // lazyLoad: 'ondemand',
            // cssEase: 'linear',
            infinite: true,
            initialSlide: 0,
            autoplay: false,
            autoplaySpeed: 1500,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotHover: true,
            draggable: true,
            swipe: true,
            touchThreshold: 10,
            touchMove: true,
            waitForAnimate: true,
            centerMode: false,
            variableWidth: true,
            rows: 0, // creates empty div
            slidesPerRow: 0,
            vertical: false, // use display block on slick track
            verticalSwiping: false,

            // verticalSwiping
            // asNavFor: ".unique-slider-big", // must have same elements and quantity
            responsive: [
                {
                    breakpoint: 850, // max-width x < 768
                    settings: {
                        // centerMode: true,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        centerMode: true,
                    }
                }

            ],

            // mobileFirst: false, // change breakpoint to min-width
            // appendArrows: $('content'), // move arrows to some element
            // appendDots: $('content')            
        });
    }
    
 
    
    // BOUND BIG SLIDER
    // $('.unique-classname-big').slick({
    //     arrows: false,
    //     fade: true, // slide show -> without slide animation slidesToShow must be 1
    //     asNavFor: ".unique-slider"// must have same elements and quantity
    // })

    // EVENTS
    // $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){})
    // $('.slider').on('afterChnage', function(event, slick, currentSlide){})

    // METHODS
    // $('.slider').slick('setPosition'); // when i need to reload file if display none than onclick -> display block and need to set position
    // $('.slider').slick('goTo', POS); // pos
    // $('.slider').slick('slickPrev');
    // $('.slider').slick('slickNext');
    // $('.slider').slick('slickPlay');
    // $('.slider').slick('slickPause');
    // $('.slider').slick('slickAdd', HTML)
    // $('.slider').slick('slickRemove', INDEX)

    // let filtered;
    // $('.link_filter').on('click', function(){
    //     if (filtered === false){
    //         $('.slider').slick('slickFilter', '.filter'); // class filter to item
    //         $(this).text('Remove filter');
    //         filtered = true;
    //     } else {
    //         $('.slider').slick('slickUnfilter');
    //         $(this).text('Filter');
    //         filtered = false;
    //     }
    //     return false;
    // })

    // let option = $('.slider').slick('slickGetOption', 'slidesToShow');
    // $('.slider').slick('slickSetOption', 'slidesToShow', 2);
    // $('.slider').slick('unslick')
}
    
