$(function () {
    const host = 'http://localhost:8011';

    $('.main-slider__inner').slick({
        rows: 0,
        prevArrow: '<button class="main-arrow main-arrow__left"></button>',
        nextArrow: '<button class="main-arrow main-arrow__right"></button>',
        fade: true,
        dots: true,
        dotsClass: 'main-dots',
        autoplay: true,
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

    wow.init();
    let mixer = mixitup('.categories__inner');


    let textOne = $('.header-personal__item.icon-hart').text();
    let textTwo = $('.header-personal__item.icon-cart').text();

    function textRemove() {
        $('.number-one').text('(' + textOne + ')');
        $('.number-two').text('(' + textTwo + ')');
    }

    textRemove();

    let search = $('.header__bottom-search');
    let searchContent = $('.header__bottom-search-content');

    $(search).on('click', function () {
        $(searchContent).toggleClass('active')
    });

    $(searchContent).hover(function () {
        $(this).css('display', 'block')
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
                    window.location.href = "https://mail.google.com/mail/u/0/#inbox";
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


});


// let stateObj = {test: 'html'};
// history.pushState(stateObj, "", "collection");
// history.replaceState(stateObj, "", "collection");
