// -----------------------------



//   js index

/* =================== */

/*  

    -preloader

    -jQuery MeanMenu

    -meanmenu

    -sticky

    -nivo slider

    -datepicker

    -scroll-up

    -counter

    -accordion

    -smooth scroll

    -countdown

    -fancybox

    -about-video-pupup

    -progress

    -mix-it-up-blog-standard

    -mix-it-up-gallery

    -meet-doctor-carousel

    -feedback carousel

    -student carousel

    -also-like-carousel

    -Ajax Contact Form



*/

// -----------------------------





(function($) {

    "use strict";


    /*---------------------

    preloader

    --------------------- */



    $(window).on('load', function() {

        $('#preloader').fadeOut('slow', function() { $(this).remove(); });

    });





    /*----------------------------

     jQuery MeanMenu

    ------------------------------ */

    $('nav#dropdown').meanmenu();



    /*-----------------

    meanmenu 

    -----------------*/

    $('nav#mobile_menu_active').meanmenu({

        meanScreenWidth: "991",

        meanMenuContainer: '.mobile-menu-area .container',

    });



    // /*-----------------

    // sticky

    // -----------------*/

    // $(window).on('scroll', function() {

    //     if ($(window).scrollTop() > 208) {

    //         $('.menu').addClass('navbar-fixed-top');

    //     } else {

    //         $('.menu').removeClass('navbar-fixed-top');

    //     }

    // });



    /*-----------------------

    nivo slider

    -----------------------*/

    $('#home1_slider').nivoSlider({

        directionNav: true,

        animSpeed: 2000,

        slices: 18,

        pauseTime: 5000,

        pauseOnHover: false,

        controlNav: false,

        prevText: '<i class="fa fa-arrow-left nivo-prev-icon"></i>',

        nextText: '<i class="fa fa-arrow-right nivo-next-icon"></i>'

    });



    /*------------------------------

        datepicker

    ------------------------------ */

    $("#datepicker").datepicker();



    /*-----------------

    scroll-up

    -----------------*/

    $.scrollUp({

        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',

        easingType: 'linear',

        scrollSpeed: 1500,

        animation: 'fade'

    });



    /*------------------------------

         counter

    ------------------------------ */

    $('.counter-up').counterUp();



    /*------------------------------

       accordion

    ------------------------------ */
    /*
    var acc = document.getElementsByClassName("accordion");

    var i;



    for (i = 0; i < acc.length; i++) {

        acc[i].onclick = function() {

            this.classList.toggle("active");

            this.nextElementSibling.classList.toggle("show");

        }

    }
	*/


    /*---------------------

    smooth scroll

    --------------------- */

    $('.smoothscroll').on('click', function(e) {

        e.preventDefault();

        var target = this.hash;



        $('html, body').stop().animate({

            'scrollTop': $(target).offset().top - 80

        }, 1200);

    });





    /*---------------------

    countdown

    --------------------- */

    $('[data-countdown]').each(function() {

        var $this = $(this),

            finalDate = $(this).data('countdown');

        $this.countdown(finalDate, function(event) {

            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));

        });

    });



    /*---------------------

    fancybox

    --------------------- */

    $('[data-fancybox]').fancybox({

        image: {

            protect: true

        }

    });



    /*---------------------

    about-video-pupup

    --------------------- */

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

        disableOn: 700,

        type: 'iframe',

        mainClass: 'mfp-fade',

        removalDelay: 300,

        preloader: false,

        fixedContentPos: false

    });



    /*---------------------

    progress

    --------------------- */

    $('.dd-skills').waypoint(function() {

        $('.progress-bar').addClass('left-anim');

    }, {

        triggerOnce: true,

        offset: '50%'

    });





    /*--------------------------

    mix-it-up-blog-standard

    ------------------------- */

    $('#blog_standard_mix').mixItUp();





    /*---------------------

    mix-it-up-gallery

    --------------------- */

    $('#gallery_mix').mixItUp();





    /*---------------------

    meet-doctor-carousel

    --------------------- */

    function meet_doctor_carousel() {

        var owl = $(".meet-doctor-carousel");

        owl.owlCarousel({

            loop: true,

            margin: 20,

            responsiveClass: true,

            navigation: true,

            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],

            nav: true,

            items: 4,

            smartSpeed: 2000,

            dots: true,

            autoplay: true,

            autoplayTimeout: 4000,

            center: false,

            responsive: {

                0: {

                    items: 1

                },

                480: {

                    items: 1

                },

                760: {

                    items: 2

                },

                992: {

                    items: 4

                }

            }

        });

    }

    meet_doctor_carousel();



    /*---------------------

    feedback carousel

    --------------------- */

    function feedback_carousel() {

        var owl = $(".feedback-carousel");

        owl.owlCarousel({

            loop: true,

            margin: 20,

            responsiveClass: true,

            navigation: true,

            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],

            nav: false,

            items: 2,

            smartSpeed: 2000,

            dots: true,

            autoplay: true,

            autoplayTimeout: 4000,

            center: false,

            responsive: {

                0: {

                    items: 1

                },

                480: {

                    items: 1

                },

                760: {

                    items: 2

                },

                992: {

                    items: 2

                }

            }

        });

    }

    feedback_carousel();



    /*---------------------

    student carousel

    --------------------- */

    function student_carousel() {

        var owl = $(".student-carousel");

        owl.owlCarousel({

            loop: true,

            margin: 20,

            responsiveClass: true,

            navigation: true,

            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],

            nav: false,

            items: 1,

            smartSpeed: 2000,

            dots: true,

            autoplay: true,

            autoplayTimeout: 4000,

            center: false,

            responsive: {

                0: {

                    items: 1

                },

                480: {

                    items: 1

                },

                760: {

                    items: 1

                },

                992: {

                    items: 1

                }

            }

        });

    }

    student_carousel();



    /*---------------------

    also-like-carousel

    --------------------- */

    function also_like_carousel() {

        var owl = $(".also-like-carousel");

        owl.owlCarousel({

            loop: true,

            margin: 20,

            responsiveClass: true,

            navigation: true,

            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

            nav: true,

            items: 2,

            smartSpeed: 2000,

            dots: true,

            autoplay: true,

            autoplayTimeout: 4000,

            center: false,

            responsive: {

                0: {

                    items: 1

                },

                480: {

                    items: 1

                },

                760: {

                    items: 2

                },

                992: {

                    items: 2

                }

            }

        });

    }

    also_like_carousel();



    /*---------------------

    saying-partners-carousel

    --------------------- */

    function saying_partners_carousel() {

        var owl = $(".saying-partners-carousel");

        owl.owlCarousel({

            loop: true,

            margin: 20,

            responsiveClass: true,

            navigation: true,

            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],

            nav: true,

            items: 1,

            smartSpeed: 2000,

            dots: true,

            autoplay: true,

            autoplayTimeout: 2000,

            center: false,

            responsive: {

                0: {

                    items: 1

                },

                480: {

                    items: 1

                },

                760: {

                    items: 1

                },

                992: {

                    items: 1

                }

            }

        });

    }

    saying_partners_carousel();



    /*---------------------

    // Ajax Contact Form

    --------------------- */



    $('.cf-msg').hide();

    $('form#cf button#submit').on('click', function() {

        var fname = $('#fname').val();

        var phone = $('#phone').val();

        var email = $('#email').val();

        var msg = $('#msg').val();

        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;



        if (!regex.test(email)) {

            alert('Please enter valid email');

            return false;

        }



        fname = $.trim(fname);

        phone = $.trim(phone);

        email = $.trim(email);

        msg = $.trim(msg);



        if (fname != '' && email != '' && msg != '') {

            var values = "fname=" + fname + "&phone=" + phone + "&email=" + email + " &msg=" + msg;

            $.ajax({

                type: "POST",

                url: "mail.php",

                data: values,

                success: function() {

                    $('#fname').val('');

                    $('#phone').val('');

                    $('#email').val('');

                    $('#msg').val('');



                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');

                    setTimeout(function() {

                        $('.cf-msg').fadeOut('slow');

                    }, 4000);

                }

            });

        } else {

            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')

        }

        return false;

    });
}(jQuery));
//Code acordeon productos
(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('.products');
        $(this).closest('.accordion').find('.products').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
})(jQuery);

