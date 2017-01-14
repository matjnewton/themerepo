<?php
/**
 * Tourtiger Header
 */
?>

<?php $custom_header = get_field( 'include_custom_header', 'option' );

if ( $custom_header == true ) : ?>
    <div class="hidden-xs custom-header">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                            <?php 
                                $ch_url = wp_get_attachment_url( get_field('custom_header_image', 'option'),'full');
                                $chimg = aq_resize( $ch_url, 278, 70, true );
                            
                                if ( $ch_url ) : ?>

                                    <img src="<?=$chimg?>" alt="<?=$chimg?>" />

                            <?php endif; ?>
                        </a>
                </div>
            </div>
        </div>
    </div>
<?php endif;

if( have_rows('hero_area') ):
    while ( have_rows('hero_area') ) : the_row();
        if( get_row_layout() == 'hero'):
            $background_placement = get_sub_field( 'background_position' );
            $slides_images = get_sub_field( 'hero_slides' );
            $hero_video = get_sub_field( 'hero_video' );
            $hero_video_webm = get_sub_field( 'hero_video_webm' );
            $hero_video_ogv = get_sub_field( 'hero_video_ogv' );
            $full_video_poster = get_sub_field( 'video_poster' );
            $poster_url = wp_get_attachment_url( $full_video_poster, 'full' ); //get img URL
        endif;
    endwhile;
endif;

include ( get_stylesheet_directory() . '/partials/tt_header-bar.php' ); ?>

<div class="banner-wrapper<?php 
    if ( $background_placement == 'Under Header' ) : 
        echo " under-header"; 
    elseif ( $background_placement == 'Down Below Header' ) : 
        echo " below-header"; 
    else : 
        echo " no-banner"; 
    endif;
?>"

    <?php if( $background_placement == 'Under Header' && $hero_video ) : ?> 
        style="max-width:1440px; max-height:620px; margin-left:auto; margin-right:auto;"
    <?php elseif ( $background_placement == 'Down Below Header' && $hero_video ) : ?> 
        style="max-width:1440px; max-height:545px; margin-left:auto; margin-right:auto;"
    <?php endif; ?> >

    <div class="tint under-header-tint"></div>
    <div class="banner-wrapper-mobile"></div>

    <?php 
    if ( $background_placement == 'Under Header' && $hero_video ) :
        $poster = aq_resize( $poster_url, 1440, 620, true ); ?>

        <video 
            autoplay 
            loop 
            muted 
            poster="<?php if( $poster ) echo $poster; ?>" 
            id="video1" 
            style="width:100%; height:auto; position:absolute; z-index:0;">

            <source src="<?php echo $hero_video; ?>" type="video/mp4">
            <source src="<?php echo $hero_video_webm; ?>" type="video/webm">
            <source src="<?php echo $hero_video_ogv; ?>" type="video/ogv">
        </video>

    <?php endif;

    include ( get_stylesheet_directory() . '/partials/tt_banner-inner.php' ); ?>  
</div>