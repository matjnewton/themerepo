<?php

if ( get_sub_field( 'tour_pc-bd--select' ) == 'repeater' ) {
	echo '<div class="' . $tour_section_bd_class . ' js-divider" data-bg="';
	echo get_sub_field( 'tour_pc-bd--select__repeater' );
	echo '"></div>';
} elseif ( get_sub_field( 'tour_pc-bd--select' ) == 'image' ) {
	echo '<img class="' . $tour_section_bd_class . '" ';
	echo 'src="' . get_sub_field( 'tour_pc-bd--select__image' ) . '" ';
	echo 'alt="" />';
} elseif ( get_sub_field( 'tour_pc-bd--select' ) == 'line' ) {
	echo '<hr class="pc_bot-divider" style="border-top:' . get_sub_field( 'tour_pc-bd--line-thickness' ) . 'px solid ' . get_sub_field( 'tour_pc-bd--line-color' ) . '" />';
}

?>