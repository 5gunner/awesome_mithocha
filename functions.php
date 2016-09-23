<?php

add_theme_support('menus');
add_theme_support('post-thumbnails');

function my_acf_google_map_api( $api ){

	$api['key'] = 'AIzaSyCVDaX77crKUQaMg9hOukt9a7QMhF944Mo';

	return $api;

}

add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');

function wp_new_styles()
{
    wp_enqueue_style('font_google', "https://fonts.googleapis.com/css?family=Lobster|Raleway:400,600,700,800,900|Raleway+Dots");

    wp_enqueue_style('main_css', get_stylesheet_directory_uri().'/style.css');
}

add_action('wp_enqueue_scripts', 'wp_new_styles');

function all_scripts()
{
    wp_enqueue_script('helpers_js', get_stylesheet_directory_uri().'/js/jsPack.js', '', '', true);

    wp_enqueue_script('app_js', get_stylesheet_directory_uri().'/js/app.js', array('helpers_js', 'bootstrap_lightbox'), '', true);
}

add_action('wp_enqueue_scripts', 'all_scripts');
