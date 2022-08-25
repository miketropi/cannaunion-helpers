<?php 
/**
 * Helpers
 */

function ch_query_all_product_cats_fix() {
  $product_cats = get_terms([
    'taxonomy' => 'product_cat',
    'orderby' => 'name',
    'hide_empty' => false,
  ]);

  return array_map(function($term) {
    $_products = get_field('list_product_categories', 'product_cat_' . $term->term_id);

    return [
      'ID' => $term->term_id,
      'term_url' => get_edit_term_link($term->term_id, 'product_cat'),
      'name' => $term->name,
      'count' => $term->count,
      'products' => $_products,
    ];
  }, $product_cats);
}

function ch_fix_products_cat($catID, $products = []) {
  // return [$catID, $products];
  return array_map(function($pid) use ($catID) {
    return wp_set_object_terms((int) $pid, (int) $catID, 'product_cat', true);
  }, $products);
}

add_action('init', function() {
  // echo '<pre>'; var_dump(ch_query_all_product_cats_fix()); echo '</pre>';
});