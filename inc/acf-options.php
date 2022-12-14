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

if( function_exists('acf_add_local_field_group') ):

	acf_add_local_field_group(array(
		'key' => 'group_630865ef1d049',
		'title' => 'Cannau Union Helpers Settings',
		'fields' => array(
			array(
				'key' => 'field_630866166cf0f',
				'label' => 'General',
				'name' => '',
				'type' => 'tab',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'placement' => 'top',
				'endpoint' => 0,
			),
			array(
				'key' => 'field_630866226cf10',
				'label' => 'Algolia Search',
				'name' => '',
				'type' => 'tab',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'placement' => 'top',
				'endpoint' => 0,
			),
			array(
				'key' => 'field_63099a329d35c',
				'label' => 'Search Index',
				'name' => 'algolia_search_index',
				'type' => 'text',
				'instructions' => '',
				'required' => 1,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'wp_posts_product',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
			),
			array(
				'key' => 'field_630c10f4ecd44',
				'label' => 'Search Input Placeholder',
				'name' => 'algolia_search_input_placeholder',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Search for products...',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
				'maxlength' => '',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'options_page',
					'operator' => '==',
					'value' => 'cannau-helper-general-settings',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'left',
		'instruction_placement' => 'field',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'is_acf_component' => 0,
		'acf_component_defaults' => array(
			'repeatable' => '0',
			'min' => '',
			'max' => '',
			'layout' => 'block',
			'button_label' => '',
			'appearances' => '',
		),
	));
	
	acf_add_local_field_group(array(
		'key' => 'group_631beac3aba63',
		'title' => 'ToC Product Cat Settings',
		'fields' => array(
			array(
				'key' => 'field_631beafb7ac1e',
				'label' => 'Table of Content',
				'name' => 'table_of_content',
				'type' => 'group',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'layout' => 'block',
				'sub_fields' => array(
					array(
						'key' => 'field_631beb197ac1f',
						'label' => 'Enable',
						'name' => 'enable',
						'type' => 'true_false',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'message' => '',
						'default_value' => 0,
						'ui' => 1,
						'ui_on_text' => '',
						'ui_off_text' => '',
					),
					array(
						'key' => 'field_631beb687ac20',
						'label' => 'Position',
						'name' => 'position',
						'type' => 'select',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'choices' => array(
							'pos_1' => 'After Description Top Page',
							'pos_2' => 'Before Additional Content',
						),
						'default_value' => 'pos_1',
						'allow_null' => 0,
						'multiple' => 0,
						'ui' => 0,
						'return_format' => 'value',
						'ajax' => 0,
						'placeholder' => '',
					),
				),
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'taxonomy',
					'operator' => '==',
					'value' => 'product_cat',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'is_acf_component' => 0,
		'acf_component_defaults' => array(
			'repeatable' => '0',
			'min' => '',
			'max' => '',
			'layout' => 'block',
			'button_label' => '',
			'appearances' => '',
		),
	));
	
endif;		