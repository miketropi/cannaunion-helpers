/**
 * Main js
 */
import algoliaSearchInit from "./app/algolia-search";

((w, $) => {
  'use strict';

  const ready = () => {
    algoliaSearchInit();
  }
  $('.header-icon-tools .search-icon').on("click", function(event) {
    event.preventDefault();

    $(this).parents('.elementor-shortcode').toggleClass('wp-algolia-search-mobi-view--active');
  });



  $(ready);
})(window, jQuery);
