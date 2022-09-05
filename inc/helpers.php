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

function ch_get_all_products_no_subscription() {
  $args = [ 
    'numberposts' => -1,
    'post_type' => 'product',
    'post_status' => 'any',
    'meta_query' => [
      'relation' => 'OR', //default AND
      [
        'key' => '_wcsatt_schemes',
        'compare' => 'NOT EXISTS'
      ]
    ]
  ];

  $result = get_posts($args);

  return array_map(function($p) {
    return  $p->ID;
  }, $result);
}

function ch_add_products_no_subscription($p_ids = []) {
  foreach($p_ids as $_index => $id) {
    update_post_meta((int) $id, '_wcsatt_schemes', [
      [
        'subscription_period_interval' => 1,
        'subscription_period' => 'month',
        'subscription_length' => 1,
        'subscription_pricing_method' => 'inherit',
        'subscription_regular_price' => null,
        'subscription_sale_price' => null, 
        'subscription_discount' => 20,
        'position' => 0,
        'subscription_price' => null, 
        'subscription_payment_sync_date' => 0,
      ],
    ]);
  }
}

add_action('init', function() {
  // if(isset($_GET['run_add_p_subscription'])) {
  //   $pids = ch_get_all_products_no_subscription();
  //   ch_add_products_no_subscription($pids);
  // }
  
  // echo '<pre>'; var_dump(ch_query_all_product_cats_fix()); echo '</pre>';
});