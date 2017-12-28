$(function() {
    $('#my-menu').mmenu({
        extensions: ['theme-black', "fx-menu-slide","fx-panels-none","fx-listitems-slide", 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-3min.png" alt="Alien covenant">'
        },
        offCanvas: {
            position: 'right'
        }
    });
    var api = $("#my-menu").data( "mmenu" );
    api.bind('open:finish', function () {
        $(".hamburger").addClass('is-active')
    });
    api.bind('close:finish', function () {
        $(".hamburger").removeClass('is-active')
    })
/*    $(".hamburger").on("click", function() {
        $(".hamburger").toggleClass("is-active");
    });
    $('#mm-blocker').on('click', function () {
        $(".hamburger").removeClass('is-active')
    })*/
});