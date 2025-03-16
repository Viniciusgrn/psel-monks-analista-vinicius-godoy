<?php


function criar_cpt_formulario()
{
    register_post_type('formulario', array(
        'labels' => array(
            'name' => __('Formulários'),
            'singular_name' => __('Formulário'),
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'publicly_queryable'  => true,
        'capability_type' => 'post',
        'capabilities' => array(
            'create_posts' => 'edit_posts',
        ),
        'map_meta_cap' => true,
        'supports' => array('title', 'editor', 'custom-fields'),
    ));
}
add_action('init', 'criar_cpt_formulario');


function my_acf_to_rest_api( $response, $post, $request ) {
    $acf_fields = get_fields($post->ID);
    if ( $acf_fields ) {
        $response->data['acf'] = $acf_fields;
    }
    return $response;
}
add_filter( 'rest_prepare_post', 'my_acf_to_rest_api', 10, 3 );
add_filter( 'rest_prepare_page', 'my_acf_to_rest_api', 10, 3 );
add_filter('acf/settings/rest_api', '__return_true');

