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

    $("#slide").addClass('show');

    $(".hero-content").on('mouseenter', () => {
        $("#slide").addClass('show');
    });

    $(".hero-content").on('mouseleave', () => {
        $("#slide").removeClass('show');
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