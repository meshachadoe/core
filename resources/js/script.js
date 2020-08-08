// Only run this when the document is ready
$(document).ready(function() {

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    })
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    })
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    })
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated animate__animated animate__pulse');
    }, {
        offset: '50%'
    })

    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = document.getElementsByTagName('menu');

        // // Open and closes a box
        // nav.slideToggle(200);
        // if (icon.name != "menu") {
        //     console.log("hi")
        //     icon.name = "close";
        //     console.log(icon.name);
        // } else {
        //     icon.name = "menu";
        // }
    })
});