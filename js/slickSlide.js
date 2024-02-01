$(document).ready(function(){
    $('.our-tech').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
            },
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
});


