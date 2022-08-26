<?php 
/**
 * ACF register option page
 */

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page([
    'page_title' 	=> 'Cannau Helper Settings',
		'menu_title'	=> 'Cannau Helper Settings',
		'menu_slug' 	=> 'cannau-helper-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
  ]);
}