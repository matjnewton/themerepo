                        <?php
                            include(locate_template('includes/integrate_vars.php' ));
                        ?>
                        <div class="view-dropdown-wrapper view-btn-wrapper">
                                <div class="view-dropdown-tour-btn">
                            <div class="btn-group">
                              <button type="button" class="btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <?php echo $button_label; ?> <span class="caret"></span>
                              </button>
                            <?php if( have_rows('button_sub_options') ): ?>
                            <?php $catmobd_counter = 0; ?>
                            	<ul class="dropdown-menu">
                            	<?php while( have_rows('button_sub_options') ): the_row(); 
                            		$button_text = get_sub_field('button_text');
                                    $link = get_sub_field('link');
                                    $catmobd_counter++;
                            		?>
                            		<li>
                            		<?php if($integrate_xola && $use_as_integration_link): ?>
                                        
                                        <?php if($third_party == "xola-single-item"): ?>
                                        <?php
                                            $xsi = explode(",",$link);
                                            $seller = $xsi[0];
                                            $experience = $xsi[1];
                                            $version = $xsi[2];
                                        ?>
                                            <div class="xola-checkout xola-custom" data-seller="<?php echo $seller; ?>" data-experience="<?php echo $experience; ?>" data-version="<?php echo $version; ?>">
                                                <?php echo $button_text; ?>
                                            </div>
                                        <?php elseif($third_party == "xola-multi-item"): ?>
                                            <div class="xola-checkout xola-custom" data-button-id="<?php if($link): echo $link; endif; ?>">
                                                <?php echo $button_text; ?>
                                            </div>
                                        <?php else: ?>
                                            <div data-button-id="<?php if($link): echo $link; endif; ?>" class="<?php if($third_party == "xola-checkout"): ?>xola-checkout <?php elseif($third_party == "xola-gift"): ?>xola-gift <?php endif; ?>xola-custom">
                                                <?php echo $button_text; ?>
                                            </div>
                                        <?php endif; ?>

                                    <?php elseif($integrate_peek && $use_as_integration_link): ?>
                                        <a href="<?php echo $link; ?>" class="peek-book-button-flat" data-purchase-type="activity" data-button-text="" data-activity-gid="<?php echo $link; ?>" style="border-radius:0; text-align:left;"><?php echo $button_text; ?></a>
                                    <?php elseif($integrate_fareharbor && $use_as_integration_link): ?>
                                        <a href="<?php if($fareharbor_shortname): ?>https://fareharbor.com/<?php echo $fareharbor_shortname; ?>/items/<?php if($third_party == 'all-availability'): ?>calendar/<?php endif; ?><?php if($third_party == 'tour-item'): echo $link.'/'; endif; ?><?php if($third_party == 'tour-item-calendar'): echo $link.'/calendar/'; endif; ?><?php else: echo '#'; endif; ?>" onclick="<?php if($fareharbor_shortname): ?>FH.open({ shortname: '<?php echo $fareharbor_shortname; ?>',<?php if($third_party == 'all-availability'): ?> view: 'all-availability',<?php endif; ?><?php if($third_party == 'tour-item' || $third_party == 'tour-item-calendar'): ?> view: { item: <?php echo $link; ?> }<?php endif; ?><?php if(!$third_party == 'tour-item-calendar'): ?>, fullItems: 'yes'<?php endif; ?> }); return false;<?php endif; ?>">
                                            <?php echo $button_text; ?>
                                        </a>
                                    <?php elseif($integrate_getinsellout && $use_as_integration_link): ?>
                                        <a class="giso_cb giso_btn"<?php if($getinsellout_data_pn): ?> data-pn="<?php echo $getinsellout_data_pn; ?>"<?php endif; ?><?php if($getinsellout_data_url): ?> data-url="<?php echo $getinsellout_data_url; ?>"<?php endif; ?><?php if($getinsellout_data_evt): ?> data-evt="<?php echo $getinsellout_data_evt; ?>"<?php endif; ?> href="<?php if($link): echo $link; endif; ?>"><?php echo $button_text; ?></a>
                            		<?php elseif($integrate_trekksoft && $use_as_integration_link): ?>
                            		    <?php
                                            $arr = explode(",",$link);
                                            $format1 = $arr[0];
                                            $format2 = $arr[1];
                                        ?>
                                        <a href="#" id="<?php if($link): echo 'catmobd'.$catmobd_counter.'_trekksoft_' . $format1; endif; ?>">
                                    <?php echo $button_text; ?>    
                                    </a>  
                                    <script>// <![CDATA[
        (function() { var button = new TrekkSoft.Embed.Button(); button .setAttrib("target", "fancy") <?php if($third_party == "tour_details"): ?> .setAttrib("entryPoint", "tour_details") .setAttrib("tourId", "<?php echo $format2; ?>") <?php elseif($third_party == "tour_finder"): ?> .setAttrib("entryPoint", "tour_finder")<?php endif;?> .registerOnClick("#<?php if($link): echo 'catmobd'.$catmobd_counter.'_trekksoft_' . $format1; endif; ?>"); })();
        // ]]></script>
                            		<?php elseif($integrate_rezdy && $use_as_integration_link): ?>
                            		    <a class="button-booking rezdy rezdy-modal" href="<?php echo $link; ?>">
                                        <?php echo $button_text; ?>
                            		    </a>
                                    <?php elseif($integrate_zaui && $use_as_integration_link): ?>
                                        <a onclick="return Zaui.open(event)" class="button-booking zaui-embed-button override" href="<?php echo $link; ?>">
                                        <?php echo $button_text; ?>
                            		    </a>
                                    <?php elseif($integrate_regiondo && $use_as_integration_link): ?>
                                        <a class="regiondo-button" data-url="<?php echo $link; ?>">
                                        <?php echo $button_text; ?>
                                        </a>
                            		<?php else: ?>
                            		    <?php if($button_text): ?>
                                        <a href="<?php echo $link; ?>"><?php echo $button_text; ?></a>
                            		    <?php endif; ?>
                                    <?php endif; ?>
                                    </li>
                            	<?php endwhile; ?>
                            	</ul>
                            <?php endif; ?>
                            </div>
                                </div><!-- end .view-dropdown-tour-btn-->
                        </div><!-- end .view-btn-wrapper-->
                        
                        
                        