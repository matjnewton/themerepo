"use strict";function checkDisplay(){var e=$(".header-bar-wrapper").height(),n=$(".header-bar-wrapper").find(".hidden-xs");n.is(":visible")?$(".banner-wrapper-inner").css("margin-top",e+"px"):n.is(":hidden")&&$(".banner-wrapper-inner").css("margin-top","0px")}function checkSticky(){var e=$(".header-bar-wrapper").height();"fixed"===$(".sticky").css("position")?$(".under-header .overlay-slider-content").css("margin-top",e+"px"):$(".under-header .overlay-slider-content").css("margin-top","0px")}$(window).resize(function(){$(".sticky").length>0&&($(".below-header").length>0||$(".no-banner").length>0)&&checkDisplay(),$(".sticky").length>0&&$(".under-header").length>0&&checkSticky()}),$(document).ready(function(){if($("input:text").length>0&&($("input:text").addClass("inputDefault"),$("input:text").focus(function(){this.value===this.defaultValue&&(this.value="")}).blur(function(){""===this.value&&(this.value=this.defaultValue)})),$(".banner-top .c-editor ul").length>0&&$(".banner-top .c-editor").find("li").wrapInner("<span></span>"),$(".banner-top .c-editor p").length>0&&$(".banner-top .c-editor").find("p").wrapInner("<span></span>"),$(".banner-top").length>0&&$(".banner-top .c-editor li").find("span").prepend('<i class="fa fa-chevron-right"></i> '),$(".single-tour").length>0&&$(".section-item").length>0&&$(".section-item .c-editor>ul").find("li").prepend('<i class="fa fa-chevron-right"></i> '),$(".page-template-default").length>0&&$(".section-item").length>0&&$(".section-item .c-editor>ul").find("li").prepend('<i class="fa fa-chevron-right"></i> '),$(".single-tour").length>0&&$(".right-col").length>0&&$(".right-col .why-list").find("li").prepend('<i class="fa fa-check"></i> '),$('.main-nav li:contains("search")').replaceWith('<li class="search-wrapper"><a><span class="glyphicon glyphicon-search"></span></a></li>'),$(".search-wrapper a").click(function(){var e=$(this).parents(".site-header").siblings(".above-header");$(e).is(":hidden")?($(this).find("span").removeClass("glyphicon-search").addClass("glyphicon-remove"),$(e).slideDown("slow")):($(this).find("span").removeClass("glyphicon-remove").addClass("glyphicon-search"),$(e).slideUp("slow"))}),$(".front-page-section, .tour-nav, .featured-tours, .featured-tours-2").length>0&&$.scrollIt({upKey:38,downKey:40,easing:"linear",scrollTime:600,activeClass:"active",onPageChange:null}),$(".image-gallery").length>0&&$(".image-gallery").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),$(".page").length>0&&$(".photo-gallery").length>0&&$(".photo-gallery").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),$(".single-tour").length>0&&$(".photo-gallery").length>0&&($(".photo-gallery").hasClass("gallery-one")&&$(".photo-gallery").each(function(e){$(".gallery-"+e).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})}),$(".photo-gallery").hasClass("gallery-two")&&$(".photo-gallery").each(function(e){$(".gallery2-"+e).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})})),$(".flexslider").length>0&&$(".flexslider").flexslider({animation:"fade",controlNav:!1}),$(".testimonials-slider").length>0&&$(".testimonials-slider").flexslider({animation:"fade",controlNav:!1}),$("#booking").length>0&&($(".bear-banner").length>0&&$("#booking").affix({offset:{top:409}}),$(".skip-banner").length>0&&$("#booking").affix({offset:{top:$(".site-header").height()}}),$("#booking").on("affixed-top.bs.affix",function(){$("#booking").css("top","0px")}),$("#booking").on("affix.bs.affix",function(){if($(".sticky").length>0){var e=$(".header-bar-wrapper").height();$("#booking").css("top",e+10+"px")}})),$("#booking2").length>0&&($("#booking2").on("affixed-top.bs.affix",function(){$("#booking2").css("top","0px")}),$("#booking2").on("affix.bs.affix",function(){if($(".sticky").length>0&&"fixed"===$(".sticky").css("position")){var e=$(".header-bar-wrapper").height();$("#booking2").css("top",e+10+"px")}})),$("#booking2").length>0&&$(".bear-banner").length>0&&$("#booking2").affix({offset:{top:409}}),$("#booking2").length>0&&$(".skip-banner").length>0){var e=$(".header-bar-wrapper").height();$("#booking2").affix({offset:{top:e+10}})}if($(".sticky").length>0&&($(".below-header").length>0||$(".no-banner").length>0)&&checkDisplay(),$(".sticky").length>0&&$(".under-header").length>0&&checkSticky(),$(".c-editor iframe[src*=youtube]").length>0&&$(".c-editor iframe[src*=youtube]").wrap('<div class="row video-row"><div class="col-xs-10 col-xs-offset-1"><div class="video-responsive"></div></div></div>'),$(".subcontent iframe[src*=youtube]").length>0&&$(".subcontent iframe[src*=youtube]").wrap('<div class="row video-row"><div class="col-xs-10 col-xs-offset-1"><div class="video-responsive"></div></div></div>'),$(".menu-item-has-children").length>0&&($(".mobile-nav > .menu-item-has-children > a, .mobile-nav > .menu-item-has-children .menu-item-has-children > a, .main-nav > .menu-item-has-children > a").append('<i class="fa fa-angle-down"></i>'),$(".main-nav > .menu-item-has-children > ul > .menu-item-has-children > a").append('<i class="fa fa-angle-right"></i>'),$(".main-nav .menu-item-has-children > a").each(function(){var e=$(this);e.length>0&&"#"===e.attr("href")&&(console.log(e),$(this).click(function(e){e.preventDefault()}))}),$(".main-nav .menu-item-has-children > a").click(function(){var e=$(this).attr("href");return"#"!==e?(console.log(e),window.location.href=e,!1):void 0})),$(".megamenu").length>0&&$(".megamenu.menu-item-has-children > .megalink-wrap > a").append('<i class="fa fa-angle-down"></i>'),$(".mobile-nav")&&($(".mobile-nav .menu-item-has-children").addClass("dropdown"),$(".mobile-nav .menu-item-has-children > a").addClass("dropdown-toggle").attr("data-toggle","dropdown"),$(".mobile-nav .menu-item-has-children > ul").addClass("dropdown-menu"),$(".mobile-nav a.dropdown-toggle").each(function(){var e=$(this);e.length>0&&"#"!==e.attr("href")&&($(this).addClass("disabled"),$(this).siblings("ul").addClass("stay-open"))}),$(".sub-menu > .menu-item-has-children > a").on("click",function(e){var n=$(this).next(),i=$(this).parent().parent();i.find(".sub-menu:visible").not(n).hide(),n.toggle(),$(this).parent().hasClass("menu-item-has-children")&&!$(this).hasClass("disabled")&&e.preventDefault(),e.stopPropagation()}),$(".sub-menu > li > a:not(.dropdown-toggle)").on("click",function(){var e=$(this).closest(".dropdown");e.find(".sub-menu:visible").hide()})),$(".split-menu").length>0){var n=$(".split-menu .mnws>.menu-languages-container");$(n).clone().appendTo(".split-menu .right-menu-part")}$(".even-grid").length>0&&$(".s-item").matchHeight(),$(".gfield_select").length>0&&!($(".keep-dropdown-unstyled").length>0)&&$(".gfield_select").selectpicker({style:"",width:"150px"}),$(".popup-video").length>0&&$(".popup-video").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$(".rpwe-ul").length>0&&($(".rpwe-title").find("a").append(" &gt;&gt;"),$(".rpwe-time").append('<i class="fa fa-calendar"></i>'))});

/**
 * Make properly marging between top and site-inner
 */

!(function ($) {

	/**
	 * Fix header paddings
	 */
	var fix_header_paddings = function fix_header_paddings() {
		var $header    = $('.site-header');
		var $sticky    = $header.find('.sticky');
		var is_home    = $('body').hasClass('home');
		var is_tour    = $('body').hasClass('tour-template-default');
		var is_logged  = $('body').hasClass('logged-in');
		var is_product = $('body').hasClass('single-product');
		var is_404     = $('body').hasClass('error404');
		var is_search  = $('body').hasClass('page-template-rezdy_search');
		var is_blog    = $('body').not('.page-template-front-page3').hasClass('blog');
		var is_banner  = $('.banner-wrapper-inner > .banner').length > 0;

		if ( !is_tour && !is_home && $sticky.length === 1 && $(window).width() >= 768 ) {
			var $unessesarily = $('.banner-wrapper-inner'); 
			var headerWrapper = $sticky.height() || 0;
			var secondary     = $('.secondary-menu-wrapper').height() || 0;
			var newMarginTop  = headerWrapper - secondary;

			if ( !is_logged ) 
				newMarginTop += 32;

			if ( !is_banner ) {
				$('.site-inner').css( 'margin-top', newMarginTop );
				$unessesarily.css('margin-top', 0);
			}

		} else if ( is_404 ) {
			var newMarginTop = $('.header-bar-wrapper').height();
			$('.site-inner').css( 'margin-top', newMarginTop );

		} else if ( is_blog ) {
			var newMarginTop = $('.header-bar-wrapper').height();
			$('.site-inner').css( 'margin-top', newMarginTop );

		} else {
			$('.banner-wrapper-inner').css('margin-top', 0);
		}
	}

	function refresToSeachIframeBtn() {

		$('[data-iframe-popup]').on('click', function (e) {
			e.preventDefault();

			var $button   = $(this);
			var reference = $button.attr('data-iframe-popup');


			// Load hawaiifun api
			if (reference == 'hawaiifun' && global_vars.hawaiifun == 1) {
				// Load backgound layout
				if ( $('.iframe-popup__close').length == 0 ) {
					$('body').append('<a href="javascript:" class="iframe-popup__close" style="opacity:0;pointer-events:none;"></a>');
				}
				
				$('#hawaiifun').addClass('is-active');
				
				$('body').css({
					'overflow': 'hidden'
				});

				$('.iframe-popup__close').css({
					'position': 'fixed',
					'top': '0',
					'left': '0',
					'width': '100%',
					'height': '100%',
					'z-index': '998',
					'background-color': 'rgba(0,0,0,.8)',
					'opacity': 1,
					'pointer-events': 'all'
				});

				/**
				 * Remove iframe and anchor
				 */
				$('.iframe-popup__close, .close-popup').on('click', function () {
					$('.iframe-popup__close').detach();
					$('#hawaiifun').removeClass('is-active');
					$('body').css({
						'overflow': 'auto'
					});

					return false;
				});

				return false;

			// Load new site in iframe
			} else {
			
				if ( $(window).width() > 768 ) {
					// Load backgound layout
					if ( $('.iframe-popup__close').length == 0 ) {
						$('body').append('<a href="javascript:" class="iframe-popup__close" style="opacity:0;pointer-events:none;"></a>');
					}

					$('body').append('<iframe src="'+reference+'" id="iframe-popup" style="opacity:0;pointer-events:none;" class="iframe-popup"></iframe>');

					$('#iframe-popup').load(function(){
						$('body').css({
							'overflow': 'hidden'
						});

						$('.iframe-popup__close').css({
							'position': 'fixed',
							'top': '0',
							'left': '0',
							'width': '100%',
							'height': '100%',
							'z-index': '19999998',
							'background-color': 'rgba(0,0,0,.8)',
							'opacity': 1,
							'pointer-events': 'all'
						});

						$('#iframe-popup').css({
							'position': 'fixed',
							'left': '5vw',
							'width': '90vw',
							'top': '5vh',
							'height': '80vh',
							'max-height': '80vh',
							'z-index': '19999999',
							'background-color': '#fff',
							'overflow-x': 'auto',
							'opacity': 1,
							'pointer-events': 'all'
						});

						/**
						 * Remove iframe and anchor
						 */
						$('.iframe-popup__close, .close-popup').on('click', function () {
							$('.iframe-popup__close').detach();
							$('.iframe-popup').detach();
							$('body').css({
								'overflow': 'auto'
							});

							return false;
						});
					});

				} else {
					document.location.href = reference;
				}

			}

			return false;
		});

	}

	var $iframeBtn = $('.header-bar').find('.open-iframe').find('a');
	var iframeUrl  = $iframeBtn.attr('href');

	$iframeBtn.attr('href', 'javascript:').attr('data-iframe-popup', iframeUrl);
	refresToSeachIframeBtn();
	

	$(function() {

		// $('.pc_featured-products-carousel').slick({
		// 	arrows: false,
		// 	adaptiveHeight: true
		// });

		fix_header_paddings();

		refresToSeachIframeBtn();

		// and when someone scales a browser's window
		$(window).resize(fix_header_paddings);


		/**
		 * Make moto text visible (secondary header left text)
		 */
		if ( $('body').hasClass('show-motto-mobile') && $(window).width() < 768 ) {
			var $moto   = $('.motto');
			var is_moto = $moto.length > 0;
			var bgColor = $('.secondary-menu-wrapper').css('background-color');

			if ( bgColor == 'rgba(0, 0, 0, 0)' ) {
				bgColor = $('.header-bar').css('background-color');
			}

			if (is_moto) {
				$moto.prependTo( $('.site-header') ).css({
					'color': '#fff',
					'background-color': bgColor,
					'display': 'block',
					'padding': '3px',
					'font-size': '13px'
				});
			}
		}


		/**
		 * Functions just for Single Product page
		 */
		if ( $('body').hasClass('single-product') ) {


			/**
			 * Remove unnesesarily paddings
			 */
			$('.custom-header').css('padding', 0);


			/**
			 * Sign header background color same as site content
			 */
			var backgroundColor = $('.single-product .site-inner .content').css('background-color');
			$('.header-bar').css('background-color', backgroundColor );

			$(window).on('scroll', function(){
				if ( $(this).scrollTop() > 0 ) {
					$('.header-bar').css('background-color', '#fff' );
				} else {
					$('.header-bar').css('background-color', backgroundColor );
				}
			});


			/**
			 * Functions for Single Product page 
			 * and devices which has width below 1140px
			 */
			if ( $('body').width() < 1140 ) {

				/**
				 * Fix sidebar displaying
				 */
				var fixProductSidebarOnPad = function () {
					$('.book-tour-wrapper_product').width( $('.col-sm-4').width() );
				};

				// After init
				fixProductSidebarOnPad();

				// After scroll
				$(window).on('scroll', function () {
					fixProductSidebarOnPad();
				});

				// While window resizing
				$(window).resize(function () {
					fixProductSidebarOnPad();
				});

			}

			/**
			 * Functions for Single Product page 
			 * and devices which has width below 768px
			 */
			if ( $('body').width() < 768 ) {


				/**
				 * Male certificate underneath header
				 */
				$('#fixed-on-mobile-productpage').wrap('<div id="js-mob-wrap-buttons"></div>');

				$('.js-show-certificate-mob').appendTo( $('#js-mob-wrap-buttons') );
				$('.js-show-certificate-mob').css({
					    'display': 'block',
					    'margin-bottom': '16px'
				});
				$('.js-show-certificate-mob a').addClass('book-btn2-product-title').css({
					'margin-left': '0px',
				    'display': 'block',
				    'color': '#fff'
				});
				$('.js-show-certificate-mob span').css({'margin-left': '0'});

			}
		}

		if ( $('body').hasClass('page-template-rezdy_search') ) {
			$('.header-bar').css('background-color', $('.page-template-rezdy_search .site-inner .content').css('background-color') );
		}

		$('.js-navigated-gallery__front').slick({
		  infinite: true,
		  arrows: true,
		  dots: false,
		  adaptiveHeight: true,
		  speed: 1000,
		  prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="fa fa-angle-left"></i></button>',
		  nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="fa fa-angle-right"></i></button>'
		});

		$('.js-navigated-gallery__navigation').slick({
		  infinite: true,
		  arrows: false,
		  dots: false,
		  speed: 1000,
		  slidesToShow: 5,
		  variableWidth: true,
  		  focusOnSelect: true
		});

	});
})(jQuery);

/**
 * Gallery slider component
 */
!(function($){
	$(function(){

		/**
		 * Init slick carousel
		 */
		$('.slider-pro--preview').on('click', function(){
			$(this).tourismTiger('initGallery');
		});

		/**
		 * Close carousel
		 */
		$('.slider-pro__close-link, .slider-pro__close-bg').on('click', function(){
			$(this).tourismTiger('destroyGallery');
		});
	});
})(jQuery);



// fly book now button
var FbBookNowButton = function (config) {
    var generateGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    function getCookie(name, accountId) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2)
            return parts.pop().split(";").shift();
        if (window.localStorage)
            return window.localStorage["flybook-front-end-session" + accountId];
    };
    function setCookie(cname, cvalue, exdays, accountId) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        var cookieName = cname + "=" + cvalue + "; " + expires;
        document.cookie = cookieName;
        if (window.localStorage)
            window.localStorage["flybook-front-end-session" + accountId] = cvalue;
    };
    var sessionId = getCookie("flybook-front-end-session" + config.accountId, config.accountId);
    if (!sessionId) {
        sessionId = generateGuid();
        setCookie("flybook-front-end-session" + config.accountId, sessionId, 5, config.accountId);
    }
    var id = "BOOKNOWBUTTON-" + config.entityId + "-" + config.entityType;
    document.getElementById(config.targetId).innerHTML = '<a class="flybook-book-now-button" id="' + id + '" href="' + config.protocol + '://' + config.domain + '/Scheduler/' + config.entityId + '/' + config.entityType + '/' + sessionId + '/' + config.accountId + '/' + window.flybookAgentId + window.location.search + '" target="_blank"><img src="' + config.protocol + '://' + config.domain + '/content/images/buy_now_button.png"/></a>';
};

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {

	var methods = {

		initGallery: function(){
		    
		    // Set DOM elements to the variables
			var $self         = $(this);
			var $wrapper      = $self.closest('.slider-pro');
			var $image        = $wrapper.find('.slider-pro--preview__image');
			var $row          = $self.closest('.pc--r');
			var width         = $image.width();
			var height        = $image.height();
			var $carousel     = $wrapper.find('.slider-pro__carousel');
			var $cover        = $wrapper.find('.slider-pro__cover');
			var $panel        = $wrapper.find('.slider-pro--panel');

            // Core values
			var globalWidth   = $(window).width();
			var globalHeight  = $(window).height();

            // Set width and height values to cover area and image
			$cover
			.width(width)
			.height(height)
			.find('img')
			.width(width)
			.height(height);
			
			$panel.hide();

            // Get cover coordinates relative to the window
			var coverTop  = $cover.offset().top - $(window).scrollTop();
			var coverLeft = $cover.offset().left;

			$image.css({
				'position': 'fixed',
				'z-index': '9999',
				'top': coverTop,
				'left': coverLeft,
			}).animate({
				'top': (globalHeight / 2) - (height / 2),
				'left': (globalWidth / 2) - (width / 2),
			}, 300);

			$image.fadeOut(500);

			if ($row.length > 0)
				$row.css('z-index', 6);

			$carousel
			.css({
				'display': 'flex',
			})
			.animate({
				'opacity': '1'
			}, 300)
			.find('.slider-pro__slider')
			.slick({
				prevArrow: '<button type="button" class="slider-pro__prev slider-pro__arrow"></button>',
				nextArrow: '<button type="button" class="slider-pro__next slider-pro__arrow"></button>',
				adaptiveHeight: true,
				lazyLoad: 'progressive',
			})
			.slick('setOption', 'height', null, true);

			// hide anoying button which usualy used to hover the X - button 
			$('#js-mob-wrap-buttons').fadeOut();
		},

		destroyGallery: function(){
			var $self         = $(this);
			var $wrapper      = $self.closest('.slider-pro');
			var $image        = $wrapper.find('.slider-pro--preview__image');
			var $carousel     = $wrapper.find('.slider-pro__carousel');
			var $cover        = $wrapper.find('.slider-pro__cover');
			var $panel        = $wrapper.find('.slider-pro--panel');
			var $row          = $self.closest('.pc--r');

			var coverTop  = $cover.offset().top - $(window).scrollTop();
			var coverLeft = $cover.offset().left;

			$image
			.css({
				'top': coverTop,
				'left': coverLeft,
				'position': 'static',
			})
			.show();

			$panel.fadeIn(300);

			if ($row.length > 0)
				$row.css('z-index', 5);

			$carousel
			.hide()
			.animate({
				'opacity': '0'
			}, 300)
			.find('.slider-pro__slider')
			.slick('unslick');

			// return the anoying button
			$('#js-mob-wrap-buttons').fadeIn();
		}
	};

	/** 
	 * Include javascript files
	 * which requery DOM reload
	 */
	$.fn.tourismTiger = function( method ) {

	    if ( methods[method] ) {
	      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error( 'Method named ' +  method + ' isn\'t exist within jQuery.tourismTiger' );
	    } 

	};

	$(function(){
        if ( $('.slider-pro--preview').not('[data-inited]') ) {
	        /**
	         * Init slick carousel
	         */
	        $('.slider-pro--preview').not('[data-inited]').on('click', function(){
	          $(this).tourismTiger('initGallery');
	        });
	    }

        if ( $('.slider-pro__close-link').not('[data-inited]') ) {
	        /**
	         * Close carousel
	         */
	        $('.slider-pro__close-link').not('[data-inited]').on('click', function(){
	          $(this).tourismTiger('destroyGallery');
	        });
		}	

        $('.slider-pro--preview, .slider-pro__close-link').attr('data-inited', 1);
	});

}));

/**
 * Sidebar JS
 */

(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {

  var methods = {

    init: function init(parentSelector) {
      var $sidebar = $(this).find('.sidebar').not('.js-inited');
      var parentSelector = parentSelector ? parentSelector : 'body';

      if (!$sidebar.length) return $(this);

      if ($sidebar.hasClass('js-sticky') && $(window).width() >= 769) $sidebar.sidebarModule('initScrolling', parentSelector).addClass('js-inited');

      return $(this);
    },

    /**
     * Init event whether the sidebar exists
     * @todo !$('#body-class').hasClass('view_grid') && $(window).width() > 768
     */
    initScrolling: function initScrolling(parentSelector) {

      function insertPointer() {
        var pointer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0px';
        var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'red';
        var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'inserted-pointer';
        var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'absolute';

        var el = document.createElement(id);

        if (!el) {
          el = document.createElement('div');
          document.body.appendChild(el);
        }

        el.id = id;
        el.style.position = position;
        el.style.top = Number.isInteger(pointer) ? pointer + 'px' : pointer;
        el.style.left = '0px';
        el.style.width = '100%';
        el.style.border = '1px solid ' + color;
        el.style.zIndex = '9999';
      }

      /**
       * @param sidebar
       * @param type
       * @param clientTopBorder
       */
      function setSidebar(sidebar, type) {
        var clientTopBorder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        switch (type) {
          case 'top':
            sidebar.style.top = '0px';
            sidebar.style.bottom = 'auto';
            sidebar.classList.remove('is-sticky');
            break;

          case 'topSticky':
            sidebar.style.top = clientTopBorder + 'px';
            sidebar.style.bottom = 'auto';
            sidebar.classList.add('is-sticky');
            break;

          case 'bottom':
            sidebar.style.top = 'auto';
            sidebar.style.bottom = '0px';
            sidebar.classList.remove('is-sticky');
            break;

          case 'bottomSticky':
            sidebar.style.top = 'auto';
            sidebar.style.bottom = '30px';
            sidebar.classList.add('is-sticky');
            break;

          default:
            sidebar.style.top = 'auto';
            sidebar.style.bottom = 'auto';
            sidebar.classList.remove('is-sticky');
            break;
        }
      }

      function refreshProperties(_ref13) {
        var _ref13$sidebar = _ref13.sidebar,
          sidebar = _ref13$sidebar === undefined ? {} : _ref13$sidebar,
          _ref13$column = _ref13.column,
          column = _ref13$column === undefined ? {} : _ref13$column,
          _ref13$wrapper = _ref13.wrapper,
          wrapper = _ref13$wrapper === undefined ? {} : _ref13$wrapper,
          _ref13$container = _ref13.container,
          container = _ref13$container === undefined ? {} : _ref13$container;

        if (!wrapper || !container) {
          return null;
        }

        column.style.width = wrapper.offsetWidth + 'px';
        column.style.height = container.offsetHeight + 'px';

        sidebar.style.width = wrapper.offsetWidth + 'px';
      }

      function getOffset(elem) {
        // кроме IE8-
        var box = elem.getBoundingClientRect();

        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
      }

      function getClientTopBorder() {
        var value = 30;
        var header = [$('.position_sticky .header--primary'), $('.position_sticky .header--sup')];
        var $wpadminbar = $('#wpadminbar');

        if (header[0].length) {
          value += header[0].height();
        }

        if (header[1].length) {
          value += header[1].height();
        }

        if ($wpadminbar.length) {
          value += $wpadminbar.height();
        }

        return value;
      }

      function getScrolledBottomCorner() {
        return (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight;
      }

      /**
       * @param el - html element
       * @returns int
       */
      function getBottomBorder(el) {
        return getOffset(el).top + $(el).height();
      }

        // const
      var sidebar = this[0];
      var wrapper = sidebar.parentNode;
      var container = wrapper.parentNode.querySelector(parentSelector);
      var column = $(sidebar).wrap('<div class="sidebar__column"></div>').wrap('<div class="sidebar__wrap"></div>').closest('.sidebar__column')[0];

      refreshProperties({
        sidebar: sidebar,
        column: column,
        wrapper: wrapper,
        container: container
      });

      $(document).on('scroll', function () {
        var clientTopBorder = getClientTopBorder();
        var pageYOffset = window.pageYOffset + clientTopBorder;
        var bottomBorderContainer = container ? getBottomBorder(container) : 0;
        var offsetWrapper = getOffset(wrapper).top;
        var offsetSidebar = getOffset(sidebar).top;

        refreshProperties({
          sidebar: sidebar,
          column: column,
          wrapper: wrapper,
          container: container
        });

        //if (getScrolledBottomCorner() - 30 >= getBottomBorder(column)) {
        if (bottomBorderContainer - pageYOffset + 50 <= $(sidebar).height()) {
          setSidebar(sidebar, 'bottom');
        } else {
          if (sidebar.offsetHeight > window.innerHeight - clientTopBorder) {
            if (pageYOffset >= offsetWrapper) {
              if (getBottomBorder(sidebar.lastElementChild) > getScrolledBottomCorner() - 59) {
                setSidebar(sidebar, 'top');
              } else if (offsetSidebar < offsetWrapper) {
                setSidebar(sidebar, 'top');
              } else {
                setSidebar(sidebar, 'bottomSticky');
              }
            } else {
              setSidebar(sidebar, 'top');
            }
          } else {
            if (pageYOffset >= offsetWrapper) {
              setSidebar(sidebar, 'topSticky', clientTopBorder);
            } else {
              setSidebar(sidebar, 'top');
            }
          }
        }
      });

      return $(this);
    }

  };

  /**
   * Init method
   */
  $.fn.sidebarModule = function (method) {

    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method named ' + method + ' isn\'t exist within jQuery.sidebarModule');
    }
  };
});