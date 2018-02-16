$(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $("#hire-me-btn").on('click', function() {
        window.location.href = './contact.html';
    });
});