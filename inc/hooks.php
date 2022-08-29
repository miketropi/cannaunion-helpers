<?php
/**
 * Hooks
 */

add_action('wp_algolia_search_mobi_action', function() {//elementor/page_templates/header-footer/before_content
  ?>
  <div class="wp-algolia-search-mobi-view-wrapper">
    <div id="WP_Algolia_Search_Mobi_View" class="wp-algolia-search-mobi-view">
      <!-- React render -->
    </div> <!-- #WP_Algolia_Search_Mobi_View -->
  </div>
  <?php
});
