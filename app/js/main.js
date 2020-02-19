$(function () {
    function include(url) {
        let script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    include("/js/remove-url.js");
    const host = 'http://localhost:8011';
    accordion();
    ourGallery();
    $('.main-slider__inner').slick({
        rows: 0,
        prevArrow: '<button class="main-arrow main-arrow__left"></button>',
        nextArrow: '<button class="main-arrow main-arrow__right"></button>',
        fade: true,
        dots: true,
        dotsClass: 'main-dots',
        autoplay: true,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $(window).on('scroll', function () {
        let scroll = $(window).scrollTop();
        if (scroll >= 450) {
            $('.lookbook__header').addClass('position-sticky').animate();
        } else {
            $('.lookbook__header').removeClass('position-sticky');
        }
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
    $('.product__reviews-item-content, .testimonials__item-box-info, .blog__content-row-text').mCustomScrollbar({
        axis: "y",
        theme: "dark-thin"
    });

    $(".top-collection__item-star, .products-grid__info-rate, .product-list__item-rate, .product-details__reviews-rate, .product__reviews-item-rate").rateYo({
        rating: 5,
        starWidth: "13px",
        ratedFill: "#f6cc4c",
        readOnly: true,
    });
    $('.reviews-add__form-star').rateYo({
        rating: 5,
        starWidth: "13px",
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
    $('.our-blogger__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="our-blog__arrows our-blog__arrows-left"></button>',
        nextArrow: '<button class="our-blog__arrows our-blog__arrows-right"></button>',
        appendArrows: '.our-blogger__arrows',
        autoplay: true,
    });

    $('.our-testimonials__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        dotsClass: 'our-testimonials__dots',
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
    });
    let wow = new WOW(
        {
            offset: 150,
        }
    );

    $('.our-gallery__item').slice(0, 8).show();

    $('.button__btn').on('click', function (e) {
        e.preventDefault();
        $('.our-gallery__item:hidden').slice(0, 8).slideDown();
    });

    $('.register-btn').on('click', function () {
        $('.header__top-register').toggleClass('active');
        $('.header__top-log').removeClass('active')
    });
    $('.login-btn').on('click', function () {
        $('.header__top-log').toggleClass('active');
        $('.header__top-register').removeClass('active')
    });
    $('.checkout__top-btn').on('click', function (event) {
        $('.header__top-log ').addClass('active');
        $('html, body').animate({scrollTop: 0}, 1000);
        event.preventDefault()
    });

    wow.init();


    let textOne = $('.header-personal__item.icon-hart').text();
    let textTwo = $('.header-personal__item.icon-cart').text();

    function textRemove() {
        $('.number-one').text('(' + textOne + ')');
        $('.number-two').text('(' + textTwo + ')');
    }

    textRemove();

    let search = $('.header__bottom-search');
    let searchContent = $('.header__bottom-search-content');

    search.on('click', function () {
        searchContent.addClass('active')
    });

    searchContent.on('mouseleave', function () {
        searchContent.removeClass('active')
    });

    $('.banner__back-to-top').on('click', function (event) {
        $('html, body').animate({scrollTop: 0}, 1500);
        event.preventDefault()
    });

    $('.products-grid__pagination-btn').on('click', function () {
        $('.products-grid__pagination-btn').removeClass('active');
        $(this).addClass('active')
    });
    $('.product-list__pagination').on('click', function () {
        $('.product-list__pagination').removeClass('active');
        $(this).addClass('active')
    });
    $('.filter__aside-categories-item').on('click', function () {
        $(this).slideDown();
        $('.filter__aside-categories-item').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.filter__aside-size-btn').on('click', function () {
        $('.filter__aside-size-btn').removeClass('active');
        $(this).addClass('active');
    });
    let $range = $(".filter__aside-range-input");
    let $inputFrom = $(".filter__aside-range-from");
    let $inputTo = $(".filter__aside-range-to");
    let instance;
    let min = 0;
    let max = 1000;
    let from = 0;
    let to = 0;
    $(".filter__aside-range-slider").ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 50,
        to: 750,
        prefix: "$",
        step: 10,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs

    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        let val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        let val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });
    $('.filter__aside-manufacture-item').on('click', function () {
        $('.filter__aside-manufacture-item').removeClass('active');
        $(this).toggleClass('active');
    });
    $('.product-details__slider-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-details__slider-items',
        arrows: false,
        fade: true,
    });
    $('.product-details__slider-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 0,
        asNavFor: '.product-details__slider-wrapper',
        focusOnSelect: true
    });
    $('.product-description__wrapper .tab').on('click', function (event) {
        let id = $(this).attr('data-id');
        $('.product-description__wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.product-description__wrapper .product-description__tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.product-description__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 0,
        fade: true,
        prevArrow: '<button class="product-description__arrows product-description__arrows-left"></button>',
        nextArrow: '<button class="product-description__arrows product-description__arrows-right"></button>',
    });
    $('.about-shop__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        rows: 0,
        variableWidth: true,
        arrows: false,
        autoplay: true,
    });
    $('.room__products-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: '<button class="room-arrows room-arrows__left"></button>',
        nextArrow: '<button class="room-arrows room-arrows__right"></button>',
    });
    $('.about-testimonials__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.about-testimonials__slider-arrows',
    });


    function ourGallery() {
        for (let i = 0; i < 16; i++) {
            // language=HTML
            $('.our-gallery__inner').append(
                    `
                        <div class="our-gallery__item" style="background-image: url(./images/our-gallery__img01.jpg);">
                            <div class="our-gallery__item-box">
                                <a data-fancybox="images" href="./images/our-gallery__img01.jpg"
                                   class="our-gallery__item-link">L</a>
                                <div class="our-gallery__item-text">Bonita Springs Beige Sofa</div>
                            </div>
                        </div>`
            )
        }
    }

    $('.header__bottom-hamburger').on('click', function () {
        $('.header__menu').slideToggle()
        $('.header__bottom-search-content').removeClass('active')
    })
    $('.header__bottom-search').on('click', function () {
        $('.header-personal').toggleClass('--on')
    });


    // subtotalPrice ();
    function accordion() {
        $('.checkout-payment__btn').click(function () {
            $('.checkout-payment__content').slideUp('normal');
            $('.checkout-payment__btn').removeClass('acc-active');
            if ($(this).next().is(':visible') === true) {
                $('.checkout-payment__btn').removeClass('active');
            }
            if ($(this).next().is(':hidden') === true) {
                $(this).next().slideDown('normal');
                $(this).addClass('acc-active');
            }
            $('.checkout-payment__content').one().removeClass('show');
        });
        $('.checkout-payment__content').hide();
        $('.show').show();
    }


    $('.checkout-payment__btn label').on('click', function (event) {
        event.preventDefault();
    });
    $(".cart-product__quantity .cart-product__quantity-number").each(function () {
        let test = $(this).val()
        console.log(+test)
    });
    $(".cart-product .cart-product__price").each(function () {
        let test = $(this).text()
        let replace = test.replace('$', "");
        console.log(+replace)
    });

    $('.cart-product__quantity-plus').on('click', function () {
        $(this).prev().val(+$(this).prev().val() + 1);
        updateCartTotal();

    });
    $('.cart-product__quantity-minus').on('click', function () {
        if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        updateCartTotal()
    });
    $('.cart-products__bottom-btn.btn-update').on('click', function (event) {
        event.preventDefault();
        $('.cart-product__quantity-number').val(1)
        updateCartTotal()
    });

    $('.cart-products__bottom-btn.btn-clear').on('click', function (event) {
        $(".cart-product").remove();
        event.preventDefault();
        $('.shopping-cart__content').addClass('--off')
    });

    $('#header-btn__reg').on('click', function () {
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val().trim();
        const obj = {
            'name': name,
            'email': email,
            'password': password
        };
        let passwordError = $('#password-error');
        let emailError = $('#email-error');
        let nameError = $('#name-error');

        function formPost() {
            $.ajax({
                url: host + '/rest/users/',
                data: JSON.stringify(obj),
                type: 'POST',
                contentType: "application/json;charset=utf-8",
                error: function (xhr, status, error) {
                    emailError.text('this email is already in use');
                    $('#email').addClass('input-error');

                },
                success: function (data) {
                    window.location.href = "lookbook-page.html";
                },
            });
        }

        if (password.length >= 8) {
            formPost();
        } else if (password === "") {
            passwordError.text('Enter password!');
            return false;
        } else if (nameError === "") {
            nameError.text('Enter name!');
            return false;
        } else if (emailError === "") {
            emailError.text('Enter email!');
            return false;
        } else if (password.length <= 8) {
            passwordError.text('A minimum 8 characters password contains');
            $('#password').addClass('input-error');
            return false;
        }
    });
    new TimezZ('.coming__soon-countdown-box', {
        date: 'Dec 17, 2020 00:00:00',
        isStopped: false,
        canContinue: false,
        template: '<span>NUMBER<i></i></span> ',
        text: {
            days: '1',
            hours: '1',
            minutes: '1',
            seconds: '35',
        },
        beforeCreate() {
        },
        beforeDestroy() {
        },
        finished() {
        },
    });

    // $.ajax({
    //     url: host + '/rest/products/',
    //     type: "GET",
    //     contentType: "application/json;charset=utf-8",
    //     dataType: "JSON",
    //     success: function (data) {
    //         console.log(data);
    //         for (let i = 0; i < 6; i++) {
    //             // let dataImages = data[i]['category']['id'];
    //             // let dataTitle = data[i]['images'][''];
    //             // let dataUrl = data[i]['url'];
    //
    //             $('.product-filter__content-inner').append(
    //                 `<div class="product-filter__content-item">
    //                     <div class="product-filter__content-images"
    //                          style="background-image: url(../images/product-filter__content-img.jpg);">
    //                         <div class="product-filter__content-icons">
    //                             <a href="#" class="product-filter__content-icon icon_bag_alt"></a>
    //                             <a href="#" class="product-filter__content-icon icon_heart_alt"></a>
    //                             <a href="#" class="product-filter__content-icon icon_tags_alt"></a>
    //                         </div>
    //                     </div>
    //                     <div class="product-filter__content-wrapper">
    //                         <a href="#" class="product-filter__content-title">Spherical Bud Vase</a>
    //                         <span class="product-filter__content-description">
    //                             Josh Herman Ceramics
    //                         </span>
    //                         <div class="product-filter__content-price">
    //                             <strong>$ 126</strong>
    //                         </div>
    //                     </div>
    //                 </div>`
    //             )
    //         }
    //     },
    //     error: function (data) {
    //         console.log(data)
    //     }
    //
    // });

    $('#login').on('click', function () {
        const emailInput = $('#email-input').val().trim();
        const passwordInput = $('#password-input').val().trim();
        let objLogin = {
            'email': emailInput,
            'password': passwordInput,
        };

        $.ajax({
            url: host + '/rest/users/auth',
            dataType: 'JSON',
            data: JSON.stringify(objLogin),
            type: 'POST',
            contentType: "application/json;charset=utf-8",
            error: function (request, status, error) {
                $('#email-login__error').text('login or password incorrect')
            },
            success: function (token) {
                let loginToken;
                loginToken = token;
                console.log(loginToken);
                window.location.href = "lookbook-page.html";
            },
        });
    })
});

// $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/photos',
//     type: "GET",
//     dataType: "JSON",
//     success: function (data) {
//         for (let i = 0; i < 10; i++) {
//             let dataImages = data[i]['thumbnailUrl'];
//             let dataTitle = data[i]['title'];
//             let dataUrl = data[i]['url'];
//             $('.dinning-room__products .room__products-slider').append(
//                 `<div class="dinning-room__products-content">
//                     <div class="dinning-room__products-box">
//                         <a href="#" class="dinning-room__products-images">
//                             <img src="${dataImages}" alt="">
//                         </a>
//                         <a href="${dataUrl}" class="dinning-room__products-bottom">
//                             <div class="dinning-room__products-title">
//                                 ${dataTitle}
//                             </div>
//                             <span class="dinning-room__products-subtitle">
//                                 Square Steel Tube
//                             </span>
//                             <button class="dinning-room__products-btn">$ 126</button>
//                         </a>
//                     </div>
//                 </div>`
//             );
//         }
//
//     }
//
// });

var mixer = mixitup('.categories__inner')
// let stateObj = {test: 'html'};
// history.pushState(stateObj, "", "collection");
// history.replaceState(stateObj, "", "collection");
