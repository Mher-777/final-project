$(function () {

    $('.main-slider__inner').slick({
        rows: 0,
        prevArrow: '<button class="main-arrow main-arrow__left"></button>',
        nextArrow: '<button class="main-arrow main-arrow__right"></button>',
        fade: true,
        dots: true,
        dotsClass: 'main-dots',
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
    });

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        method: "GET",
        dataType: "JSON",
        success: (data) => {

            for (let i = 0; i < 10; i++) {
                $(".product__slider").append(
                    `
                        
                            <div class="product__slider-item">
                <div class="product__slider-item-images">
                    <img src="${data[i]['url']}" alt="">
                    <div class="product__slider-item-head">
                        <a class="product__slider-item-head-link"></a>
                        <a class="product__slider-item-head-link"></a>
                        <a class="product__slider-item-head-link"></a>
                        <a class="product__slider-item-head-link"></a>
                    </div>
                </div>
                <div class="product__slider-item-content">
                    <div class="product__slider-item-box">
                        <div class="product__slider-item-star"></div>
                        <div class="product__slider-item-title">Jack chair - Black velvet</div>
                    </div>
                    <a href="#" class="product__slider-item-price">
                        $ 126
                    </a>
                </div>
            </div>
                       `
                )
            }
        }
    })

});
