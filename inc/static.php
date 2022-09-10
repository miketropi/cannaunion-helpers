<?php 
/**
 * Static 
 */

/**
 * Enqueue scripts frontend
 */
function ch_enqueue_scripts() {
  wp_enqueue_script('cannaunion-script', CH_URI . '/dist/ch.bundle.js', ['jquery'], CH_VER, true);
  wp_enqueue_style('cannaunion-style', CH_URI . '/dist/css/ch.bundle.css', false, CH_VER);

  $phpdata = apply_filters('ch/phpdata_script', [
    'ajax_url' => admin_url('admin-ajax.php'),
    'algolia' => [
      'AppID' => get_option('algolia_application_id'),
      'AdminAPIKey' => get_option('algolia_api_key'),
      'searchIndex' => get_field('algolia_search_index', 'option'),
      'searchInputPlaceholder' => get_field('algolia_search_input_placeholder', 'option'),
    ],
    'lang' => []
  ]);

  wp_localize_script('cannaunion-script', 'CH_PHP_DATA', $phpdata);
}

add_action('wp_enqueue_scripts', 'ch_enqueue_scripts', 30);

/**
 * Enqueue scripts backend 
 */
function ch_admin_enqueue_scripts() {
  wp_enqueue_script('cannaunion-backend-script', CH_URI . '/dist/ch-backend.bundle.js', ['jquery'], CH_VER, true);
  wp_enqueue_style('cannaunion-backend-style', CH_URI . '/dist/css/ch-backend.bundle.css', false, CH_VER);

  wp_localize_script('cannaunion-backend-script', 'CH_PHP_DATA', [
    'ajax_url' => admin_url('admin-ajax.php'),
    'lang' => []
  ]);
}

add_action('admin_enqueue_scripts', 'ch_admin_enqueue_scripts');