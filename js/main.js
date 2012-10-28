$(function() {
  var $header = $('header'),
      $headerShadow = $('.header-shadow'),
      boxes = $('.alpha'),
      headerHeight = $header.outerHeight();
      headerBackground = jQuery.Color($header.css('backgroundColor'));

  $headerShadow.css('opacity', 0);

  $(document).scroll(function(e){
    var scrollPercent = (window.scrollY / headerHeight),
        boxesAlpha = (headerBackground.alpha() + ((1 - headerBackground.alpha()) * (window.scrollY / headerHeight))).toFixed(2),
        headerShadowAlpha = (1 * (window.scrollY / (3 * headerHeight))).toFixed(2);

    if (scrollPercent >= 0 && scrollPercent < 3) {
      $headerShadow.css('opacity', headerShadowAlpha);
    }
    if (scrollPercent >= 0 && scrollPercent < 1) {
      boxes.css('backgroundColor', headerBackground.alpha(boxesAlpha) );
    }
  });
});

