<?php 
/**
 * Algolia search init 
 */

function ch_algolia_search_init() {

}

add_action('init', 'ch_algolia_search_init', 30);

function ch_post_shared_attributes( array $shared_attributes, WP_Post $post) {
  if(get_post_type($post) == 'product') {
    $p = wc_get_product($post->ID);

    // price html
    $shared_attributes['price_html'] = $p->get_price_html();

    // price int
    $price_int = $p->get_regular_price();
    if($p->is_on_sale()) {
      $price_int = $p->get_sale_price();
    }
    $shared_attributes['price_number'] = floatval($price_int);
  }
  return $shared_attributes;
}

add_filter('algolia_post_shared_attributes', 'ch_post_shared_attributes', 10, 2);

function ch_algolia_search_icon() {
  ?>
  <div class="wp-algolia-search-icon" data-toggle-algolia-search>
    <?php echo __('Search product...', 'ch'); ?>
    <span class="__icon">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"> <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
    </span>
  </div>
  <?php 
}

function ch_shortcode_algolia_search_icon_func() {
  ob_start();
  ch_algolia_search_icon();
  return ob_get_clean();
}

add_shortcode('wp_algolia_seach_icon', 'ch_shortcode_algolia_search_icon_func');

add_action('wp_footer', function() {
  load_template(CH_DIR . '/templates/wp-algolia-search-modal.php', false);
});