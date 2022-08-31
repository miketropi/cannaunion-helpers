<?php
/**
 * Shortcodes
 */

function ch_shortcode_header_icon_tools_func($atts) {
  $a = shortcode_atts([
    'search' => true,
    'minicart' => false, // hold on
    'custom_class' => '',
  ], $atts);

  set_query_var('atts', $a);

  ob_start();
  load_template(CH_DIR . '/templates/header-icon-tools.php', false);
  do_action('wp_algolia_search_mobi_action');
  return ob_get_clean();
}

add_shortcode('header_icon_tools', 'ch_shortcode_header_icon_tools_func');


function ch_shortcode_algolia_search_result_func($atts) {
  $a = shortcode_atts([
    'custom_class' => '',
  ], $atts);

  ob_start();
  ?>
  <div id="WP_Algolia_Search_Page_Result_View" class="wp-algolia-search-page-result-view">
    <!-- React render -->
  </div> <!-- #WP_Algolia_Search_Page_Result_View -->
  <?php
  return ob_get_clean();
}

add_shortcode('algolia_search_result', 'ch_shortcode_algolia_search_result_func');
