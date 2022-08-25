<?php 
/**
 * Register menu page 
 */

function ch_register_fix_product_cate_menu_page() {
  add_menu_page(
      __('Fix Product Cate', 'ch' ),
      'Fix Product Cate',
      'manage_options',
      'cannaunion-helpers/templates/fix-product-cate.php',
      '',
      'dashicons-block-default'
  );
}

add_action('admin_menu', 'ch_register_fix_product_cate_menu_page');