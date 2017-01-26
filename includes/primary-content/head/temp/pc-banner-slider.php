<div class="flxslider-wrapper">
    <?php 
    $images = get_sub_field('pc_hero_slides');    
    if( $images ) : ?>
        <div id="slider" class="flexslider">
            <ul class="slides">

                <?php 
                foreach( $images as $slider_image ):
                    $simage = aq_resize( $slider_image['url'], 1440, $hero_height_n, true ); ?>

                    <li style="
                        background-image: url(<?php echo $simage; ?>); 
                        background-repeat: no-repeat; 
                        background-size: 1440px auto; 
                        background-position: center center; 
                        -webkit-background-size: cover;
                        background-size: cover;
                        width: 100%; ">                      

                        <?php include ( get_stylesheet_directory() . '/includes/primary-content/head/temp/pc-elements.php' ); ?>

                    </li>

                <?php endforeach; ?>

            </ul>
        </div>
    <?php endif; ?> 
</div>