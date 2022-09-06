<?php 
class Elementor_Archive_Banner extends \Elementor\Widget_Base {
  public function get_name() {
    return 'archive_banner';
  }

	public function get_title() {
    return esc_html__( 'Archive Banner', 'ch' );
  }

	public function get_icon() {
    return 'eicon-code';
  }

	public function get_custom_help_url() {
    return '#';
  }

	public function get_categories() {
    return [ 'general' ];
  }

	public function get_keywords() {
    return [ 'archive', 'banner' ];
  }

	protected function register_controls() {
    $this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'plugin-name' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'title',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => esc_html__( 'Title', 'plugin-name' ),
				'placeholder' => esc_html__( 'Enter your title', 'plugin-name' ),
			]
		);

		$this->end_controls_section();
  }

	protected function render() {
    $settings = $this->get_settings_for_display();
    ?>
    Hello...
    <?php
  }

	protected function content_template() {
    ?>
    Hello...
    <?php
  }
}