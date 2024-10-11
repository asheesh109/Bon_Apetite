(function ($) {
    'use strict';

    var browserWindow = $(window);

    //Preloader 
    browserWindow.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    //  Newsticker 
    $.simpleTicker($("#breakingNewsTicker"), {
        speed: 1250,
        delay: 3500,
        easing: 'swing',
        effectType: 'roll'
    });

    // Nav 
    if ($.fn.classyNav) {
        $('#deliciousNav').classyNav();
    }

    //  Search 
    var searchwrapper = $('.search-wrapper');
    $('.search-btn').on('click', function () {
        searchwrapper.toggleClass('on');
    });
    $('.close-btn').on('click', function () {
        searchwrapper.removeClass('on');
    });

    // Sliders
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slides');
        var receipeSlide = $('.receipe-slider');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['Prev', 'Next'],
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        var dot = $('.hero-slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1 + '.';
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });

        receipeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['Prev', 'Next'],
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });
    }

    //  Gallery 
    if ($.fn.magnificPopup) {
        $('.videobtn').magnificPopup({
            type: 'iframe'
        });
    }

    //  ScrollUp 
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    //  CouterUp 
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    //  nice Select 
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    //  wow 
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    //  prevent default a click
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

})(jQuery);

