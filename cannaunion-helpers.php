<?php
/**
 * Plugin Name: Cannaunion Helpers
 * Plugin URI: #
 * Description: Helper function for Cannaunion
 * Version: 1.0.6
 * Author: Mike
 * Author URI: #
 * License: GNU GENERAL PUBLIC LICENSE
 */

{
  /**
   * Define
   */
  define('CH_VER', '1.0.8');
  define('CH_DIR', plugin_dir_path(__FILE__));
  define('CH_URI', plugin_dir_url(__FILE__));
}

{
  /**
   * Inc
   */
  require(CH_DIR . '/inc/admin/register-menu-page.php');

  require(CH_DIR . '/inc/static.php');
  require(CH_DIR . '/inc/helpers.php');
  require(CH_DIR . '/inc/hooks.php');
  require(CH_DIR . '/inc/ajax.php');
  require(CH_DIR . '/inc/acf-options.php');
  require(CH_DIR . '/inc/shortcodes.php');

  require(CH_DIR . '/inc/elem-widgets.php');

  /**
   * Algolia serach
   */
  require(CH_DIR  .'/inc/algolia-search/index.php');
}
