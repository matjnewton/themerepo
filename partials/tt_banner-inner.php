    <div class="banner-wrapper-inner">
        <?php if( $background_placement == 'Down Below Header' && $hero_video ) :
            $poster = aq_resize( $poster_url, 1440, 545, true ); ?>
            <video 
                autoplay 
                loop 
                muted 
                poster="<?php if ( $poster ) echo $poster; ?>" 
                id="video1" 
                style="width: 100%; height: auto; position: absolute; z-index: 0;">

                <source src="<?php echo $hero_video; ?>" type="video/mp4">
            </video>
        <?php endif; ?>

        <div 
            class="tint below-header-tint"
            <?php if ( $background_placement == 'Down Below Header' && $hero_video ) echo 'style="height:545px;"'; ?>>
        </div>

        <?php
        $queried_post_type = get_query_var('post_type');
 
        if ( is_page_template( 'page-templates/front-blog.php' ) ) :
            get_template_part( 'content', 'front_hero' );
        elseif ( is_home() ):
            get_template_part( 'content', 'blog_hero' );
        elseif ( is_page_template( 'page-templates/front-page.php' ) ) :
            get_template_part( 'content', 'front_hero' );
        elseif ( is_page_template( 'page-templates/front-page2.php' ) ) :
            get_template_part( 'content', 'front2_hero' );
        elseif ( is_page_template( 'page-templates/front-page3.php' ) ) :
            get_template_part( 'content', 'front3_hero' );
        elseif ( is_single() && 'tour' ==  $queried_post_type ) :
            get_template_part( 'content', 'tour_hero' ); 
        else :    
            get_template_part( 'content', 'default_hero' );    
        endif; ?>
    </div>