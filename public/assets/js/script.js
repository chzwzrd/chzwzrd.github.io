$(() => {

    // ALL PAGES
    // =====================================================================================
    $('[data-toggle="tooltip"]').tooltip();

    // HOME PAGE
    // =====================================================================================
    $("#hire-me-btn").on('click', function() {
        window.location.assign('./contact.html');
    });

    setTimeout(() => {
        $("#slide").addClass('show');
    }, 350);

    $(".hero-content").on('mouseenter', () => {
        $("#slide").addClass('show');
    });

    $(".hero-content").on('mouseleave', () => {
        $("#slide").removeClass('show');
    });

    // ABOUT PAGE
    // =====================================================================================
    $("#meowl-slide").addClass('show');

    $(".ket-link").on('click', () => {
        $("#ket-slide").toggleClass('show');
    });

    // PORTFOLIO PAGE
    // =====================================================================================
    $(".design-block").on('click', () => {
        $("#comingSoonModal2").modal();
    });

    $(".dev-block").on('click', () => {
        // $("#comingSoonModal2").modal();
        window.location.assign('../../portfolio-dev.html');
    });

    $(".art-block").on('click', () => {
        $("#comingSoonModal2").modal();
    });

    $(".photography-block").on('click', () => {
        $("#comingSoonModal2").modal();
    });

    $("#comingSoonModal").on('shown.bs.modal', () => {
        setTimeout(() => {
            $("#comingSoonModal").modal('hide');
        }, 1000);
    });

    $("#comingSoonModal2").on('shown.bs.modal', () => {
        setTimeout(() => {
            $("#comingSoonModal2").modal('hide');
        }, 1000);
    });

    // PORTFOLIO-DEV PAGE
    // =====================================================================================
    let hasShownModal = sessionStorage.getItem('hasShownModal');
    console.log(hasShownModal);
    if (hasShownModal === null) {
        setTimeout(() => {
            $("#workInProgressModal").modal();
        }, 200);
        $("#workInProgressModal").on('shown.bs.modal', () => {
            sessionStorage.setItem('hasShownModal', 1);
        });
    }

    $(".gallery img").on('mouseenter', function() {
        $(this).css('opacity', '0.3');
        $(this).siblings('figcaption').css('opacity', '1');
    });
    $(".gallery img").on('mouseleave', function() {
        $(this).css('opacity', '1');
        $(this).siblings('figcaption').css('opacity', '0');
    });

    // CONTACT PAGE
    // =====================================================================================
    // $(".connect-div .resume button").on('click', () => {
    //     $("#comingSoonModal3").modal('show');
    //     $("#comingSoonModal3").on('shown.bs.modal', () => {
    //         setTimeout(() => {
    //             $("#comingSoonModal3").modal('hide');
    //         }, 1000);
    //     });
    // });

    // =====================================================================================
    
    // $(".gallery figure").hover(function() { // Mouse over
    //     $(this).siblings().stop().fadeTo(160, 0.6);
    //     $(this).parent().siblings().stop().fadeTo(160, 0.3);
    //     $(this).children('figcaption').css('opacity', '1');
    // }, function() { // Mouse out
    //     $(this).siblings().stop().fadeTo(300, 1);
    //     $(this).parent().siblings().stop().fadeTo(300, 1);
    //     $(this).children('figcaption').css('opacity', '0');
    // });

    // function handleNavHover(element, elementDot) {
    //     if (!$(element).hasClass('active') && $(window).width() > '1140') {
    //         $(element).on('mouseenter', () => {
    //             $(elementDot).css('display', 'unset');
    //         });
    //         $(element).on('mouseleave', () => {
    //             $(elementDot).css('display', 'none');
    //         });
    //     }
    // }

    // handleNavHover(".home-link", ".home-dot");
    // handleNavHover(".about-link", ".about-dot");
    // handleNavHover(".portfolio-link", ".portfolio-dot");
    // handleNavHover(".contact-link", ".contact-dot");

    // $(window).unload(function() {
    //     sessionStorage.removeItem('hasShownModal');
    // });
});