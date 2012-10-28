$(function() {
  var $el = $('.alpha'),
      elHeight = $el.outerHeight();
      elBackground = jQuery.Color($el.css('backgroundColor'));

  $(document).scroll(function(e){
    var scrollPercent = (elHeight - window.scrollY) / elHeight,
        alpha = (elBackground.alpha() + ((1 - elBackground.alpha()) * (window.scrollY / elHeight))).toFixed(2);

    if (scrollPercent >= 0 && scrollPercent < 1) {
      $el.css('backgroundColor', elBackground.alpha(alpha) );
    }
  });
});

