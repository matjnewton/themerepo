<?php

if ( get_sub_field( 'tour_pc-td--select' ) == 'repeater' ) {
	echo '<div class="' . $tour_section_td_class . '" ';
	echo 'style="background: url(' . get_sub_field( 'tour_pc-td--select__repeater' ) . ');';
	echo '"></div>';
} else {
	echo '<img class="' . $tour_section_td_class . '" ';
	echo 'src="' . get_sub_field( 'tour_pc-td--select__image' ) . '" ';
	echo 'alt="" />';
}

?>