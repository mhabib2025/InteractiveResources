function pageSetUp() {
  var e = $('.page');
  e.removeClass('active-page').hide(),
    e
      .first()
      .addClass('active-page')
      .show(),
    e.each(function(e) {
      $(this).addClass('page-' + (-1 + e + 1));
    }),
    $('h2.page-title:gt(0)').each(function(e) {
      $(this).prepend(e + 1 + '. ');
    });
}
function paginationBtns() {
  var e = $('a[data-move="forward"]'),
    t = $('a[data-move="backward"]');
  $('section.first > footer')
    .find(t)
    .hide(),
    $('section.last > footer')
      .find(e)
      .hide(),
    e.on('click', function() {
      var e = $('.active-page');
      return e.hasClass('last')
        ? !1
        : (e
            .removeClass('active-page')
            .hide()
            .next()
            .fadeIn()
            .addClass('active-page'),
          window.dispatchEvent(new Event('resize')),
          void $('html, body').animate({ scrollTop: 0 }, 0));
    }),
    t.on('click', function() {
      var e = $('.active-page');
      return e.hasClass('first')
        ? !1
        : (e
            .removeClass('active-page')
            .hide()
            .prev()
            .fadeIn()
            .addClass('active-page'),
          window.dispatchEvent(new Event('resize')),
          void $('html, body').animate({ scrollTop: 0 }, 0));
    });
}
function activateFitVids() {
  $('.video-embed').fitVids({
    customSelector:
      'iframe[src^="https://embed-ssl.ted.com"], iframe[src^="http://embed.ted.com"], iframe[src^="http://www.slideshare.net/"], iframe[src^="http://prezi.com/"], iframe[src^="http://blip.tv"], iframe[src^="https://docs.google.com"]'
  });
}
function lightboxMe() {
  var e = $('.lightbox');
  e.on('click', function() {
    {
      var e = $(this).clone();
      $('body').append(
        '<div class="lb-open"><a class="close btn icon-cancel-circled pull-right" href="#" title="Close">X</a></div>'
      );
    }
    return (
      $('.lb-open')
        .lightbox_me({
          destroyOnClose: !0,
          centered: !0,
          closeSelector: '.close',
          zIndex: 3001
        })
        .append(e),
      !1
    );
  }),
    $('.nsfw-overlay').on('click', function(e) {
      var t = $(this);
      t.hide(),
        $(document.elementFromPoint(e.clientX, e.clientY)).trigger('click'),
        t.show();
    });
}
function fixedMenuBar() {
  var e = $('#nav'),
    t = 106;
  $(window).scroll(function() {
    var o = $(window).scrollTop();
    o > t ? e.addClass('fixed') : e.removeClass('fixed');
  });
}
function tableOfContents() {
  var e = $('#toc').hide();
  $('#toc-sh').on('click', function() {
    return $('#tools').hide(), e.fadeToggle('fast'), !1;
  }),
    $('h2.page-title').each(function(e) {
      var t = $(this),
        o = t.text(),
        e = -1 + e + 1;
      t.attr('title' + e),
        $('#toc ol').append(
          "<li><a class='page-" +
            e +
            "' title='" +
            o +
            "'>" +
            t.html() +
            '</a></li>'
        );
    }),
    $('a[class^="page-"]').on('click', function() {
      var e = $(this)
          .attr('class')
          .split(' ')[0],
        t = $('section.' + e);
      return t.hasClass('active-page')
        ? !1
        : (t.hasClass('page-show-all')
            ? ($('.page')
                .removeClass('page-show-all')
                .hide(),
              $('section > footer').show(),
              t.addClass('active-page').fadeIn())
            : ($('.active-page')
                .removeClass('active-page')
                .hide(),
              t.addClass('active-page').fadeIn()),
          window.dispatchEvent(new Event('resize')),
          void $('html, body').animate({ scrollTop: 0 }, 0));
    }),
    $('#toc ol').append(
      "<li><hr></li><li><a data-page='all' title='View All Pages'>View All Pages</a></li>"
    ),
    $('a[data-page^="all"]').on('click', function() {
      $('.active-page').removeClass('active-page'),
        $('.page')
          .addClass('page-show-all')
          .show(),
        $('section > footer').hide(),
        window.dispatchEvent(new Event('resize')),
        $('html, body').animate({ scrollTop: 0 }, 0);
    }),
    $('html').on('click', function() {
      e.fadeOut('fast');
    });
}
function toolsMenu() {
  var e = $('#tools').hide(),
    t = $('html');
  $('#tools-sh').on('click', function() {
    return $('#toc').hide(), e.fadeToggle('fast'), !1;
  }),
    t.on('click', function() {
      e.fadeOut('fast');
    });
  var o = t.css('font-size');
  $('.res-font').on('click', function() {
    t.css('font-size', o);
  }),
    $('.inc-font').on('click', function() {
      t.css('font-size', '+=3');
    }),
    $('.dec-font').on('click', function() {
      t.css('font-size', '-=1');
    }),
    $('.print-page').on('click', function() {
      window.print();
    });
  var a = $('#hl'),
    i = $('#tools > ul > li')
      .eq(1)
      .hide(),
    n = $('body');
  a.on('click', function() {
    a.hasClass('hl-off')
      ? (a
          .removeClass('hl-off')
          .addClass('hl-on')
          .children('i')
          .addClass('icon-check'),
        i.toggle(),
        n.textHighlighter())
      : (a
          .removeClass('hl-on')
          .addClass('hl-off')
          .children('i')
          .removeClass('icon-check'),
        i.toggle(),
        n.getHighlighter().destroy());
  }),
    i.on('click', function() {
      return n.hasClass('highlighter-context')
        ? (n.getHighlighter().removeHighlights(), !1)
        : !1;
    });
}
function cyuDropDown() {
  var e = $('.cyu-content').hide(),
    t = $('.cyu-box > .btn');
  t.on('click', function() {
    return (
      window.dispatchEvent(new Event('resize')),
      $(this)
        .parent()
        .siblings(e)
        .slideToggle('fast'),
      !1
    );
  });
}
function videoTranscripts() {
  var e = $('.vt-content').hide(),
    t = $('.video-transcript > .btn');
  t.on('click', function() {
    return (
      $(this)
        .siblings(e)
        .slideToggle(),
      !1
    );
  });
}
function bootstrapTooltip() {
  $('a[data-toggle="tooltip"]').tooltip({ html: !0 });
}
function bootstrapPopover() {
  var e = $('a[data-toggle="popover"]');
  e.each(function() {
    var e = $(this),
      t = e.attr('data-content'),
      o = '<a class="close-popover" title="Close">[x]</a><br>' + t;
    e.attr('data-content', o);
  }),
    e
      .popover({
        html: !0,
        placement: 'auto',
        trigger: 'manual',
        animation: !1
      })
      .on('click', function(t) {
        return e.popover('hide'), t.stopPropagation(), $(this).popover('show');
      }),
    $(document).on('click', 'a.close-popover', function() {
      e.popover('hide');
    });
}
function bootstrapCarousel() {
  (carousel = $('.carousel')),
    carousel.carousel({ interval: !1, wrap: !1, cycle: !1 }),
    carousel.attr('data-interval', 'false'),
    carousel.attr('data-wrap', 'false');
}
function footerReplace() {
  $('footer > .container').html(
    '<p>Powered by Colorado State University-Global Campus, a CSU System University</p><p>&copy; Colorado State University-Global Campus, All Rights Reserved</p>'
  );
}
function audioJS() {
  window.audiojs &&
    audiojs.events.ready(function() {
      audiojs.createAll();
    });
}
function pageDisplay() {
  (window == window.top || window == window.parent.frames.length) &&
    ($('footer.footer').css('display', 'inline-block'),
    $('div.push').css('display', 'block'));
}
function wrapTables() {
  var e = $('table');
  e.wrap('<div class="table--responsive"></div>');
}
pageSetUp(),
  paginationBtns(),
  activateFitVids(),
  lightboxMe(),
  fixedMenuBar(),
  tableOfContents(),
  toolsMenu(),
  cyuDropDown(),
  videoTranscripts(),
  bootstrapTooltip(),
  bootstrapPopover(),
  bootstrapCarousel(),
  footerReplace(),
  audioJS(),
  pageDisplay(),
  wrapTables();
