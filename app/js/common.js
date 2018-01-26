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

  var owl = $('.s-services .owl-carousel');
  owl.owlCarousel({
      loop: true,
      nav: true,
      dots: false,
    responsive: {
        0: {
          items: 2
        },
        480: {
          items: 3
        },
        600: {
          items: 4
        },
        1000: {
          items: 5
        },
        1600: {
          items: 8
        }
      },
      smartSpeed: 700,
      navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>']
    });
/*  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });*/

  $('.fotorama').fotorama({
    width: '100%',
    height: 'auto',
    // maxwidth: '100%',
    ratio: 16/9,
    allowfullscreen: 'native',
    nav: 'thumbs',
    thumbwidth: 110,
    thumbheight: 70,
    arrows: 'always',
    thumbborderwidth: 2,
    loop: true
  });

  $('section .h2').each(function () {
    var ths = $(this);
    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
  });

  $('select').selectize({
    create: true
  });

  $('.facts').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    dots: true,
    autoHeight: true
  });

  $('.starring').owlCarousel({
    loop: true,
    nav:true,
    dots:false,
    smartSpeed: 700,
    margin: 10,
    responsive: {
      0: {
        items: 3
      },
      480: {
        items: 4
      },
      600: {
        items: 4,
        margin: 50
      },
      768: {
        items: 5,
        margin: 75
      },
      1000: {
        items: 6,
        margin:100
      },
      1600: {
        items: 8
      }
    }
  });

  //E-mail Ajax Sendn
  $("form.callback").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.success').addClass('active').css('dispaly','flex').hide().fadeIn();
      setTimeout(function() {
        $(th).find('.success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });
});
