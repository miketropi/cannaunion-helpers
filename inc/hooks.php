<?php
/**
 * Hooks
 */

add_action('wp_algolia_search_mobi_action', function() {
  ?>
  <div class="wp-algolia-search-mobi-view-wrapper">
    <div id="WP_Algolia_Search_Mobi_View" class="wp-algolia-search-mobi-view">
      <!-- React render -->
    </div> <!-- #WP_Algolia_Search_Mobi_View -->
  </div>
  <?php
});

function ch_toc_product_archive_page($content){
  if( is_product_category() ) {
    return "<div class=\"ch-toc-container\">{$content}</div>";
  }
  return $content;
}

add_filter('the_content','ch_toc_product_archive_page', 30);

add_filter('ch/phpdata_script', function($phpdata = []) {

  if( is_product_category() ) {
    $cate = get_queried_object();
    $enable = get_field('table_of_content_enable', 'product_cat_' . $cate->term_id);
    $position = get_field('table_of_content_position', 'product_cat_' . $cate->term_id);
    $phpdata['toc'] = [
      'enable' => $enable,
      'position' => $position,
    ];
  }

  return $phpdata;
}, 30);