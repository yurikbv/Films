$(function() {
    var api = $('#my-menu');
    var appMmenu = api.data('mm');
    api.mmenu({
        extensions: ['theme-black', "fx-menu-slide","fx-panels-none","fx-listitems-slide", 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-3min.png" alt="Alien covenant">'
        },
        offCanvas: {
            position: 'right'
        }
    });
/*    appMmenu.bind('opened', function () {
        $(".hamburger").addClass('is-active')
    }).bind('closed', function () {
        $(".hamburger").removeClass('is-active')
    })*/
    $(".hamburger").on("click", function() {
        $hamburger.toggleClass("is-active");
    });
    $('#mm-blocker').on('click', function () {
        $hamburger.removeClass('is-active')
    })
});
