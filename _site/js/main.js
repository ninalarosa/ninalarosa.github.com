ndl = {};

ndl.init = function() {
  var $header = $('header'),
      $headerShadow = $('.header-shadow'),
      boxes = $('.alpha'),
      headerHeight = $header.outerHeight();
      headerBackground = jQuery.Color($header.css('backgroundColor')),
      headerAlpha = headerBackground.alpha();

  $headerShadow.css('opacity', 0);

  $(document).scroll(function(e){
    var scrollPercent = (window.scrollY / headerHeight),
        boxesAlpha = (headerAlpha + ((1 - headerAlpha) * (window.scrollY / headerHeight))).toFixed(2),
        headerShadowAlpha = (1 * (window.scrollY / (3 * headerHeight))).toFixed(2);

    // Change the header's shadow opacity based on the amount the page has been
    // scrolled.
    if (scrollPercent >= 0 && scrollPercent < 3) {
      $headerShadow.css('opacity', headerShadowAlpha);
    }
    // Change the .alpha element's backgrounds based until they're opaque.
    if (headerAlpha >= 0 && headerAlpha < 1) {
      boxes.css('backgroundColor', headerBackground.alpha(boxesAlpha) );
    }
  });
};

$(function() {
  ndl.init();
});

