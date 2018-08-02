<?php 

/* Support 1 */
$cc_style__ccc_css = pc_init_font_css( get_sub_field( 'cc_style__button_supone_font' ) );
$cc_style__ccc_css[1] .= get_sub_field( 'cc_style__button_supone_font-color' ) ? 'color:' . get_sub_field( 'cc_style__button_supone_font-color' ) . ';' : '';
echo $cc_style__ccc_css[0] ? $cc_style__ccc_css[0] : '';
echo $cc_style__ccc_css[1] ? '#pc_wrap .' . $cc_style . ' .pc--c__button-supone {' . $cc_style__ccc_css[1] . '}' : '';

/* Support 2 */
$cc_style__ccc_css = pc_init_font_css( get_sub_field( 'cc_style__button_suptwo_font' ) );
$cc_style__ccc_css[1] .= get_sub_field( 'cc_style__button_suptwo_font-color' ) ? 'color:' . get_sub_field( 'cc_style__button_suptwo_font-color' ) . ';' : '';
echo $cc_style__ccc_css[0] ? $cc_style__ccc_css[0] : '';
echo $cc_style__ccc_css[1] ? '#pc_wrap .' . $cc_style . ' .pc--c__button-suptwo {' . $cc_style__ccc_css[1] . '}' : '';

/* Button lable */
$cc_style__button_font_color = get_sub_field( 'cc_style__button_label_font-color' );
$cc_style__ccc_css = pc_init_font_css( get_sub_field( 'cc_style__button_label_font' ) );
$cc_style__ccc_css[1] .= $cc_style__button_font_color ? 'color:' . $cc_style__button_font_color . ';' : '';


/* Set Button styles */
if ( get_sub_field( 'cc_style__button_style' ) == 'text' ) {
	$cc_style__ccc_css[1] .= 'border-radius: 0;background: none;';
} elseif ( get_sub_field( 'cc_style__button_style' ) == 'square' ) {
	$cc_style__ccc_css[1] .= 'border-radius: 0; padding: .4em .7em;';
} elseif ( get_sub_field( 'cc_style__button_style' ) == 'round' ) {
	$cc_style__ccc_css[1] .= 'border-radius: 50%; padding: .4em .7em;';
} elseif ( get_sub_field( 'cc_style__button_style' ) == 'corner' ) {
	$cc_style__ccc_css[1] .= 'border-radius: 5px; padding: .4em .7em;';
}

/* Button BG */
if ( get_sub_field( 'cc_style__button_bg' ) ) {
	$cc_style__ccc_css[1] .= 'background-color:' . get_sub_field( 'cc_style__button_bg' ) . ';';
} else {
	$cc_style__ccc_css[1] .= 'background-color:transparent;';
}

$cc_style__ccc_css[1] .= 'transition: ease .3s;';
$cc_style__ccc_css_hover = 'transition: ease .3s;';

/* Mouseover effect */
$cc_style__button_hover_object = get_sub_field( 'cc_style__button_hover' );
$cc_style__button_hover_object_color = false;
$cc_style__button_hover_object_text = false;

if ( $cc_style__button_hover_object ) {
	foreach ( $cc_style__button_hover_object as $value ) {
		if ( $value == 'color' ) {
			$cc_style__button_hover_object_color = true;
		} elseif ( $value == 'text' ) {
			$cc_style__button_hover_object_text = true;
		}
	}

	if ( $cc_style__button_hover_object_color ) {
		$cc_style__ccc_css_hover .= 'background-color:' . $cc_style__button_font_color .';';
		$cc_style__ccc_css_hover .= 'color:' . get_sub_field( 'cc_style__button_bg' ) .';';
	} 

	if ( $cc_style__button_hover_object_text ) {
		$cc_style__ccc_css_hover .= 'text-decoration:underline;';
	} 
}

/* Set Button border */
if ( get_sub_field( 'cc_style__button_bor' ) != 'no' ) {
	$cc_style__button_bor_width = get_sub_field( 'cc_style__button_bor_width' );

	if ( get_sub_field( 'border_color_type' ) == 'auto' ) {
		$border_color = $cc_style__button_font_color; 
	} else {
		$border_color_field = get_sub_field( 'border_color' );
		$border_color 	    =  $border_color_field ? $border_color_field : $cc_style__button_font_color; 
	}

	$cc_style__ccc_css_hover .= $cc_style__button_bor_width . 'px solid ' . $border_color . ';';
	$cc_style__ccc_css[1] .= 'padding: .4em .7em;';

	if ( get_sub_field( 'cc_style__button_bor' ) == 'yes' ) {
		$cc_style__button_bor = $cc_style__button_bor_width . 'px solid ' . $border_color;
		$cc_style__ccc_css[1] .= 'border:' . $cc_style__button_bor . ';';
	} elseif ( get_sub_field( 'cc_style__button_bor' ) == 'hover' ) {
		$cc_style__ccc_css[1] .= 'border:' . $cc_style__button_bor_width . 'px solid transparent;';
	}
}

/* Label Shadow */
if ( get_sub_field( 'cc_style__button_label_sha' ) ) {
	$cc_style__ccc_css[1] .= 'text-shadow: 1px 1px 3px rgba(0,0,0,.3), 1px 1px 3px rgba(0,0,0,.3);';
}

echo $cc_style__ccc_css[0] ? $cc_style__ccc_css[0] : '';
echo $cc_style__ccc_css[1] ? '#pc_wrap .' . $cc_style . ' .pc--c__button-link {' . $cc_style__ccc_css[1] . '}' : '';
echo $cc_style__ccc_css_hover ? '#pc_wrap .' . $cc_style . ' .pc--c__button-link:hover {' . $cc_style__ccc_css_hover . '}' : '';