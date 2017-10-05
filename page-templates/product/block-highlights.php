		<!-- highlights layout -->
    <?php if( get_row_layout() == 'primary_content_highlights'):
	        $primary_content_columns = get_sub_field('primary_content_columns');
	        $primary_content_highlights_title = get_sub_field('primary_content_highlights_title'); ?>
	        <div class="product_content_wrapper primary_content_highlights">
	        	<?php if($primary_content_highlights_title): ?>
	        		<h3 class="primary_content_subhead"><?php echo $primary_content_highlights_title; ?></h3>
	        	<?php endif; ?>
	        	<?php $highlights_options = get_sub_field('highlights_options');
					if($highlights_options) : ?>
						<ul class="highlights_options customstyle">
							<?php foreach($highlights_options as $row) { ?>
								<li style="<?php if ($primary_content_columns == 2) { echo 'width:49%;'; } else { echo 'width:100%;'; } ?>">
									<i class="fa <?php echo $row['primary_content_highlights_details_icon']; ?>"></i>
									<span><?php echo $row['primary_content_highlights_text']; ?></span>
								</li>
							<?php } ?>
						</ul>
					<?php endif; //end repeter ?>


	        </div>
	        <?php 
	    endif; ?> 

	    <!-- Split column layout -->

	    <?php if (get_row_layout() == 'primary_content_highlights_split'): ?>
	    	<?php if (get_sub_field('highlights_optionss')): 
	    		$highlights_optionss = get_sub_field('highlights_optionss');?>
	    		<div class="product_content_wrapper primary_content_highlights">
		    		<?php $primary_content_highlights_split_title = get_sub_field('primary_content_highlights_split_title'); ?>
		    		<?php foreach ($highlights_optionss as $key): ?>
		    			<div style="width: 49%; display: inline-block;">
		    			    <h3 class="primary_content_subhead"><?php echo $key['primary_content_highlights_split_title']; ?></h3>
		    			    	<ul class="highlights_options customstyle">
		    			    		<?php  $highlights_optiones = $key['highlights_optiones'];?>
				    			    <?php foreach ($highlights_optiones as $fila ) { ?>
				    			    		<li style="width: 100%"><i class="fa fa-angle-double-right"></i>
				    			    		<span><?php echo $fila['primary_content_highlights_text']; ?></span></li>
				    			  <?php  } ?>
		    			  		</ul>
		    			    <br>
		    			</div>
		    		<?php endforeach ?>
	    		</div>
	    	<?php endif ?>
	    <?php endif ?>