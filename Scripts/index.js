$(function () {
    $('.goto_intro').click(function (e) {
        e.preventDefault();
        $.scrollTo( '#intro-anchor',600);
    });

});

$('document').ready(function () {
    $('#footer-mail').attr("href", "mailto:backload.mvc@gmail.com").text("backload.mvc@gmail.com");
});
