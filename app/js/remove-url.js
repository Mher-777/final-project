 $('.header-logo__link, .lookbook__header-logo, .header__bottom-icon, .footer__logo').on('click', function (event) {
        event.preventDefault();
        window.location = "index.html";
    });
    $('.header-personal__item').on('click', function (event) {
        event.preventDefault();
        window.location = "shopping-cart.html";
    });
    $('.product__slider-item-title, .product__slider-item-price').on('click', function (event) {
        event.preventDefault();
        window.location = "product-detail.html";
    });
    $('.product__slider-item-head-link.icon_bag_alt, .categories__item-box-link.icon_bag_alt,  .categories__item-box-link.icon_heart_alt').on('click', function (event) {
        event.preventDefault();
        window.location = "shopping-cart.html";
    });
    $('.product__slider-item-head-link.icon_heart_alt, .product__slider-item-head-link.icon_tags_alt').on('click', function (event) {
        event.preventDefault();
        window.location = "coming-soon.html";
    });
    $('.product__slider-item-head-link.icon_search').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1500);
        $('.header__bottom-search-content').addClass('active')
    });




