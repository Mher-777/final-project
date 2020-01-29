$(function () {

    $('.main-slider__inner').slick({
        rows: 0,
        prevArrow: '<button class="main-arrow main-arrow__left"></button>',
        nextArrow: '<button class="main-arrow main-arrow__right"></button>',
        fade: true,
        dots: true,
        dotsClass: 'main-dots',
        autoplay: true,
    });

    $('.product__slider').slick({
        rows: 0,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        asNavFor: '.product-pagination__slider',
        dotsClass: 'product-pagination__line',
        autoplay: true,

    });

    $('.product-pagination__slider').slick({
        rows: 0,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product__slider',
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button class="product-arrows product-arrows__left"></button>',
        nextArrow: '<button class="product-arrows product-arrows__right"></button>',
        autoplaySpeed: 2000,
    });

    $('.categories-pagination__slider').slick({
        rows: 0,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="product-arrows product-arrows__left"></button>',
        nextArrow: '<button class="product-arrows product-arrows__right"></button>',
        autoplaySpeed: 2000,
    });

    $(".product__slider-item-star, .categories__item-star").rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: "#f6cc4c",
    });

    $('.categories-pagination__slider-btn').on('click', function () {
        $(this).addClass('active');
        $('.categories-pagination__slider-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.testimonials__item-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.testimonials__item-arrows',
        prevArrow: '<button class="testimonials-arrows testimonials-arrows__left"></button>',
        nextArrow: '<button class="testimonials-arrows testimonials-arrows__right"></button>',
        infinite: false,
        autoplay: true,
    });
    $('.blog__content-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="blog-arrows blog-arrows__left"></button>',
        nextArrow: '<button class="blog-arrows blog-arrows__right"></button>',
    });

    wow = new WOW(
        {
            offset:       150,
        }
    );

    $('.our-gallery__item').slice(0, 8).show();
    $('.button__btn').on('click', function (e) {
        e.preventDefault();
        $('.our-gallery__item:hidden').slice(0, 8).slideDown();
    });
    wow.init();
    let mixer = mixitup('.categories__inner');
    // $.ajax({
    //     url: 'https://jsonplaceholder.typicode.com/photos',
    //     data: 'JSON',
    //     type: 'GET',
    //     success: function (data) {
    //         for (let i = 0; i < 1; i++) {
    //             console.log(data);
    //             $('.product__slider-item-images').append(
    //                 `<img src="https://via.placeholder.com/150/92c952" alt="">`
    //             )
    //         }
    //     }
    // })


});
