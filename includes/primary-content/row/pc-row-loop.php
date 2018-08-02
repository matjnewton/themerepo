<?php 
if ( get_row_layout() == 'tour_pc-row' ) :

		include( get_stylesheet_directory() . '/includes/primary-content/row/pc-row-parameters.php' );

	if ( $tour_row_type == 'blog') :

		include( get_stylesheet_directory() . '/includes/primary-content/column/blog-card/pc-blog-parameters.php' );

	elseif ( $tour_row_type == 'content' ) : ?>

		<div 
			class="<?php echo $tour_column_classes; ?>"
			style="<?php echo $tour_row_styles; ?>" 
			<?php echo $scroll_data; ?>>
		
			<?php if ( have_rows( 'tour_pc-col' ) ) :
				
				include( get_stylesheet_directory() . '/includes/primary-content/column/pc-column-loop.php' ); 

			endif;  ?>

		</div> 

		<?php 
	endif;
endif; 
?>