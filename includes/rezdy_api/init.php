<?php

include 'wqs-api-search.php';

define('WQS_API_URL',site_url().'/wqs-api');
define('WQS_WIDGET_URL', get_stylesheet_directory_uri() . '/includes/rezdy_api');
define('WQS_WIDGET_PATH', get_stylesheet_directory() . '/includes/rezdy_api');

/// Register Script
function wqs_load_scripts()
{   
    //$trekksoft_account = get_field('trekksoft_account','option');

    //css
    wp_register_style('wqs_style', WQS_WIDGET_URL . '/css/style.css');
    wp_register_style('wqs_style_daterangepicker', WQS_WIDGET_URL . '/css/daterangepicker.css');

    wp_register_style('wqs_style_multipledatepicker', WQS_WIDGET_URL . '/css/multipleDatePicker.css');

    // js
    wp_register_script('wqs_angular',  WQS_WIDGET_URL . '/js/angular.min.js');
    wp_register_script('wqs_angular_animate', WQS_WIDGET_URL . '/js/angular-animate.min.js');
    wp_register_script('wqs_angular_filter', WQS_WIDGET_URL . '/js/angular-filter.min.js');
    wp_register_script('wqs_ng_infinite_scroll', WQS_WIDGET_URL . '/js/ng-infinite-scroll.min.js');
    //wp_register_script('wqs_angular_moment', WQS_WIDGET_URL . '/js/moment.js');
    wp_register_script('wqs_functions', WQS_WIDGET_URL . '/js/functions.js');
    wp_register_script('wqs_functions_for_search_box', WQS_WIDGET_URL . '/js/functions_for_search_box.js');
    wp_register_script('wqs_functions_for_check_available', WQS_WIDGET_URL . '/js/functions_for_check_available.js');
    //wp_register_script('wqs_trekksoft', ("//$trekksoft_account.trekksoft.com/en/api/public"), array('jquery'), '1.0.0', false);
    wp_register_script('wqs_moment', WQS_WIDGET_URL . '/js/moment.min.js');
    wp_register_script('wqs_daterangepicker', WQS_WIDGET_URL . '/js/daterangepicker.js');

    wp_register_script('wqs_multipledatepicker', WQS_WIDGET_URL . '/js/multipleDatePicker.min.js');

    wp_enqueue_style('wqs_style');
    wp_enqueue_style('wqs_style_daterangepicker');
    wp_enqueue_style('wqs_style_multipledatepicker');

    wp_enqueue_script('wqs_angular');
    wp_enqueue_script('wqs_angular_animate');
    wp_enqueue_script('wqs_angular_filter');
    wp_enqueue_script('wqs_ng_infinite_scroll');
    //wp_enqueue_script('wqs_angular_moment');
    wp_enqueue_script('wqs_functions');
    wp_enqueue_script('wqs_functions_for_search_box');
     wp_enqueue_script('wqs_functions_for_check_available');
    //wp_enqueue_script('wqs_trekksoft');
    wp_enqueue_script('wqs_moment');
    wp_enqueue_script('wqs_daterangepicker');

    wp_enqueue_script('wqs_multipledatepicker');

    wp_localize_script( 'wqs_functions', 'js_var', 
        array( 
            'apikey' => get_field('field_n1993k2903', 'option'),
             )
    );
}

add_action('wp_enqueue_scripts', 'wqs_load_scripts');


function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
//add_action('init','add_cors_http_header');

//add_filter( 'allowed_http_origins', 'add_allowed_origins' );
function add_allowed_origins( $origins ) {
    $origins[] = 'https://api.rezdy.com';
    //$origins[] = 'https://site2.example.com';
    return $origins;
}

