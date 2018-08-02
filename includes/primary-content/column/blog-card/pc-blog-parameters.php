<?php 

	$bc_style = get_sub_field( 'tour_blog-style' );
	$tour_column_classes .= ' pc--r_blog ' . $bc_style;
	$tour_blog_pullcount = get_sub_field( 'tour_pc-blog--pull' );

	while ( have_rows( 'bc_style-one', 'option' ) ) : the_row();
		$bc_style__title_pos = get_sub_field( 'bc_style__title-pos' );
		$bc_style__date_pos = get_sub_field( 'bc_style__date-pos' );
		$bc_style__button_text = get_sub_field( 'bc_style__button_text' );
	endwhile;

	/* get variables */
	$tour_blog_show     	= get_sub_field( 'tour_pc-rowtype--blog-show' );
	$tour_blog_show_date    = false;
	$tour_blog_show_excerpt = false;
	$tour_blog_show_image   = false;
	$tour_blog_show_button   = false;

	if ( $tour_blog_show ):
		if ( in_array( 'blog-date', $tour_blog_show ) ) :
			$tour_blog_show_date = true;
			$tour_column_classes .= ' pc--r_blog_is-date' . ' pc--r_blog_is-date__' . $bc_style__date_pos;
		endif;

		if ( in_array( 'blog-excerpt', $tour_blog_show ) ) :
			$tour_blog_show_excerpt = true;
			$tour_column_classes .= ' pc--r_blog_is-excerpt';
		endif;

		if ( in_array( 'blog-image', $tour_blog_show ) ) :
			$tour_blog_show_image = true;
			$tour_column_classes .= ' pc--r_blog_is-image';
		endif;

		if ( in_array( 'blog-button', $tour_blog_show ) ) :
			$tour_blog_show_button = true;
			$tour_column_classes .= ' pc--r_blog_is-button';
		endif;
	endif;

	include( get_stylesheet_directory() . '/includes/primary-content/column/blog-card/pc-blog-css.php' );

	$blog_query = new WP_Query( array( 'postype' => 'post', 'posts_per_page' => $tour_blog_pullcount ) ); 
?>

<div 
	class="<?php echo $tour_column_classes; ?>"
	style="<?php echo $tour_row_styles; ?>"
	<?php echo $scroll_data; ?>>
	<?php if  ( $blog_query->have_posts() ) {
		while ( $blog_query->have_posts() ) {
			$blog_query->the_post();

			include( get_stylesheet_directory() . '/includes/primary-content/column/blog-card/pc-blog-post.php' ); 

		}  
	} wp_reset_postdata(); ?>
</div>