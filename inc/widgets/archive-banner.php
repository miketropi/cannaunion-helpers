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
				'label' => esc_html__( 'Content', 'ch' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'title',
			[
				'type' => \Elementor\Controls_Manager::TEXT,
				'label' => esc_html__( 'This is title page', 'ch' ),
				'placeholder' => esc_html__( 'Enter page title', 'ch' ),
        'dynamic' => [
          'active' => true,
        ],
			]
		);

    $this->add_control(
			'description',
			[
				'label' => esc_html__( 'Description', 'ch' ),
				'type' => \Elementor\Controls_Manager::TEXTAREA,
				'rows' => 5,
				'default' => esc_html__( 'This is description, neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur...', 'ch' ),
				'placeholder' => esc_html__( 'Enter page description.', 'ch' ),
        'dynamic' => [
          'active' => true,
        ],
			]
		);

    $this->add_control(
			'image',
			[
				'label' => esc_html__( 'Choose Image', 'ch' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
        'media_types' => ['image'],
        'dynamic' => [
          'active' => true,
        ],
			]
		);

		$this->end_controls_section();
  }

	protected function render() {
    $settings = $this->get_settings_for_display();
    ?>
    <div class="ch-widget ch-widget--container">
      <div class="ch-widget__background-layer"></div>
      <div class="ch-widget__entry">
        <?php var_dump($settings); ?>
      </div>
    </div>
    <?php
  }

	protected function content_template() {
    ?>
    Hello...
    <?php
  }
}