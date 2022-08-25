<?php 
/**
 * Ajax
 */

function ch_ajax_query_all_product_cats_fix() {
  wp_send_json(ch_query_all_product_cats_fix());
}

add_action('wp_ajax_ch_ajax_query_all_product_cats_fix', 'ch_ajax_query_all_product_cats_fix');
add_action('wp_ajax_nopriv_ch_ajax_query_all_product_cats_fix', 'ch_ajax_query_all_product_cats_fix');

function ch_ajax_fix_products_cat() {
  $result = ch_fix_products_cat($_POST['catID'], $_POST['products']);
  wp_send_json($result);
}

add_action('wp_ajax_ch_ajax_fix_products_cat', 'ch_ajax_fix_products_cat');
add_action('wp_ajax_nopriv_ch_ajax_fix_products_cat', 'ch_ajax_fix_products_cat');