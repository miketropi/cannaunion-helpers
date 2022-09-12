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

function ch_shortcode_archive_title_func($atts) {
  global $wp_query;

  $a = shortcode_atts([
    'tag' => 'h1',
    'only_text' => false,
    'classes' => '',
  ], $atts);

  $cat_obj = $wp_query->get_queried_object();
  $cat_id = $cat_obj->term_id;
  $cat_name = $cat_obj->name;
  $cat_subname = get_field('sub_heading_text', 'product_cat_' . $cat_id);

  if(!empty($cat_subname)) {
    $cat_name = $cat_subname;
  }

  $with_tag = "<{$a['tag']} class='". $a['classes'] ."'>%CAT_NAME%</{$a['tag']}>";

  ob_start();
  if($a['only_text'] == true) {
    echo $cat_name;
  } else {
    echo str_replace(['%CAT_NAME%'], [$cat_name], $with_tag);
  }
  return ob_get_clean(); 
}

add_shortcode('archive_custom_title', 'ch_shortcode_archive_title_func');

function ch_shortcode_toc_func($atts = []) {
  $a = shortcode_atts([
    'target' => '.elementor-widget-theme-post-content',
    'start_level' => 2, 
    'end_level' => 2, 
    'class' => '',
  ], $atts);

  ob_start();
  ?>
  <div 
    class="__toc-nav-container __toc-nav-handle-shortcode <?php echo $a['class'] ?>" 
    data-start-level="<?php echo $a['start_level'] ?>"
    data-end-level="<?php echo $a['end_level'] ?>"
    data-content-target="<?php echo $a['target'] ?>">
    <!-- JS Render -->
  </div> <!-- .toc-nav-container -->
  <?php 
  return ob_get_clean();
}

add_shortcode('ch_toc', 'ch_shortcode_toc_func');