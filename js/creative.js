/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    $(".portfolio-box-question").on('click touchstart', function() {
        $(".portfolio-box-caption").css("opacity", "1");
    });

     //toggle read more on blog

     $('#about-blog').on('shown.bs.collapse', function () {
        $("#read-about-blog").html('Read less about my blog')
    });

    $('#about-blog').on('hidden.bs.collapse', function () {
        $("#read-about-blog").html('Read more about my blog')
    });

    //toggle read more on testimonials

    $('#suzanne-testimonial').on('shown.bs.collapse', function () {
        $("#see-more-suzanne").html('See less').insertAfter('#suzanne-testimonial')
    });

    $('#suzanne-testimonial').on('hidden.bs.collapse', function () {
        $("#see-more-suzanne").html('See more')
    });

    $('#llorenc-testimonial').on('shown.bs.collapse', function () {
        $("#see-more-llorenc").html('See less').insertAfter('#llorenc-testimonial')
    });

    $('#llorenc-testimonial').on('hidden.bs.collapse', function () {
        $("#see-more-llorenc").html('See more')
    });

    $('#alberto-testimonial').on('shown.bs.collapse', function () {
        $("#see-more-alberto").html('See less').insertAfter('#alberto-testimonial')
    });

    $('#alberto-testimonial').on('hidden.bs.collapse', function () {
        $("#see-more-alberto").html('See more')
    });

})(jQuery); // End of use strict
