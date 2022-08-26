/**
 * Main js
 */
import algoliaSearchInit from "./app/algolia-search";

((w, $) => {
  'use strict';

  const ready = () => {
    algoliaSearchInit();
  }
  
  $(ready);
})(window, jQuery); 