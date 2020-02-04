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
    // $('.room__products-slider').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 2,
    //     prevArrow: '<button class="room-arrows room-arrows__left"></button>',
    //     nextArrow: '<button class="room-arrows room-arrows__right"></button>',
    // });

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

    $('.banner__back-to-top').on('click', function () {
        $('html, body').animate({scrollTop:0}, '1000');
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

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/photos',
    type: "GET",
    dataType: "JSON",
    success: function (data) {
        for (let i = 0; i < 10; i++) {
            let dataImages = data[i]['thumbnailUrl'];
            let dataTitle = data[i]['title'];
            let dataUrl = data[i]['url'];
            $('.dinning-room__products .room__products-slider').append(
                `<div class="dinning-room__products-content">
                    <div class="dinning-room__products-box">
                        <a href="#" class="dinning-room__products-images">
                            <img src="${dataImages}" alt="">
                        </a>
                        <a href="${dataUrl}" class="dinning-room__products-bottom">
                            <div class="dinning-room__products-title">
                                ${dataTitle}
                            </div>
                            <span class="dinning-room__products-subtitle">
                                Square Steel Tube
                            </span>
                            <button class="dinning-room__products-btn">$ 126</button>
                        </a>
                    </div>
                </div>`
            );
        }
        $('.room__products-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 2,
            prevArrow: '<button class="room-arrows room-arrows__left"></button>',
            nextArrow: '<button class="room-arrows room-arrows__right"></button>',
        });
    }
});

// let stateObj = {test: 'html'};
// history.pushState(stateObj, "", "collection");
// history.replaceState(stateObj, "", "collection");
