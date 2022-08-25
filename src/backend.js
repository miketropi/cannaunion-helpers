/**
 * Backend js
 */
import fixProductCateInit from "./app/fix-product-cate";

 ((w, $) => {
  'use strict';

  const ready = () => {
    fixProductCateInit();
  } 
   
  $(ready) 
})(window, jQuery); 