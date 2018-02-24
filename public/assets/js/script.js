$(() => {
    // ALL PAGES
    // =====================================================================================
    $('[data-toggle="tooltip"]').tooltip();

    // HOME PAGE
    // =====================================================================================
    $("#hire-me-btn").on('click', function() {
        window.location.assign('./contact.html');
    });

    // CONTACT PAGE
    $("#contact-form").on('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: $("#user-name").val().trim(),
            email: $("#user-email").val().trim().toLowerCase(),
            message: $("#user-message").val().trim()
        };

        axios.post('/formProcess', formData)
        .then(response => {
            console.log('success');
            console.log(response);
        })
        .catch(err => {
            console.log('fail');
            console.error(err);
        });
    });

    setTimeout(() => {
        $("#slide").addClass('show');
    }, 500);

    $("#meowl-slide").addClass('show');
    
    $(".hero-content").on('mouseenter', () => {
        $("#slide").addClass('show');
    });

    $(".hero-content").on('mouseleave', () => {
        $("#slide").removeClass('show');
    });

    $(".ket-link").on('click', () => {
        $("#ket-slide").toggleClass('show');
    });

    $(".design-block").on('click', () => {
        $("#comingSoonModal2").modal();
    });
    $(".dev-block").on('click', () => {
        $("#comingSoonModal2").modal();
        // window.location.assign('../../portfolio-dev.html');
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
});