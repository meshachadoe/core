// window.addEventListener("hashchange", function () {
//     console.log("here");
//     window.scrollTo(window.scrollX, window.scrollY);
// });

// function smoothScroll(target, duration) {
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     // Relative to the window of the actual element
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animation(currentTime) {
//         if(startTime === null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0,run);
//         if(timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if(t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(animation);
// }

// // var about = document.querySelector('.nav-about');
// about.addEventListener('click', function() {
//     console.log("print");
//     smoothScroll('.section-program-1', 1000);
// })

// Only run this when the document is ready
$(document).ready(function() {

    $('.scrollTop').click(function() {
        $('<a name="top"/>').insertBefore($('body').children().eq(0));
        window.location.hash = 'top';
    });

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