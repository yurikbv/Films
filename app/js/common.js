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
    });
    $('.carousel-services').owlCarousel({
      loop: true,
      nav: true,
      smartSpeed: 700,
      navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>']
    });
});
