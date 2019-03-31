<?php
/*
Plugin Name: My Gutenberg Block
*/
function gutenberg_examples_01_register_block() {

	wp_register_script(
		'gutenberg-examples-01',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);

	register_block_type( 'gutenberg-examples/example-01-basic', array(
		'editor_script' => 'gutenberg-examples-01',
	) );

}
add_action( 'init', 'gutenberg_examples_01_register_block' );
