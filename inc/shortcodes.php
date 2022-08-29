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
