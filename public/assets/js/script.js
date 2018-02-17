$(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $("#carousel-example-genereic").carousel();
    $("#hire-me-btn").on('click', function() {
        window.location.href = './contact.html';
    });
});