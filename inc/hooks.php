<?php 
/**
 * Hooks
 */

add_action('elementor/page_templates/header-footer/before_content', function() {
  ?>
  <div id="WP_Algolia_Search_Mobi_View" class="wp-algolia-search-mobi-view">
    <!-- React render -->
  </div> <!-- #WP_Algolia_Search_Mobi_View -->
  <?php 
});