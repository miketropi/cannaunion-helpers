<?php 
/**
 * Register elementor widgets
 */

function ch_elem_register_widgets( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/archive-banner.php' );

	$widgets_manager->register( new \Elementor_Archive_Banner() );

}
add_action('elementor/widgets/register', 'ch_elem_register_widgets', 9999999);