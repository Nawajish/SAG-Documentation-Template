function dV(obj, val)
{
		obj.value = (obj.value == val) ? '' : (obj.value == '') ? val : obj.value;
}

$(document).ready(function ()
  {
		 $.fn.mmenu_content();
		 $.fn.tabular_content();
		 $.fn.accordion_content();
		 add_arrow_class();
		 share_via_email();
		 move_to_top();
		 show_info(); 
		 slide_country();       
		 responsive_logos_rotation();  
		 scrollToAnchor();
		 innerLinksScrollTo();
		
	   
	  //initialize swiper for banner rotation
	  var bannerSwiper = new Swiper ('.swiper-container.rotate', {
			// Optional parameters
			direction: 'horizontal', 
			pagination: {
			    el: '.swiper-pagination',
			    clickable: true
			},
			autoplay: {
			    delay: 8000
			},
			loop: true
		  });        
	  
	  $('.content_swiper').bxSlider({
					auto: true,
					pause: 10000,
					slideWidth: 1150,
							minSlides: 1,
							maxSlides: 1,
							moveSlides: 1,
						pager: false,
						infiniteLoop: true
					});        
  //show description
	 $('.hover_option').hover(function() {
		   $('.box_desc', this).slideToggle(700, 'swing');             
		});
 
 
  }); //end document.ready 

//tabs function 
$.fn.tabular_content = function() 
	{
	  $( ".tabbed_block" ).tabs({       
			beforeLoad: function(event, ui) {
				$('.panel').hide(); 
			},
			load: function(event, ui) {
				$('.panel').show();
			}                             
		});
	}
	 
//initialize accordion
$.fn.accordion_content = function() 
	{
		$( ".accordion" ).accordion({
			heightStyle: "content",
			collapsible : true,
			active : false,
			icons : false,
			header : "h4",
			activate : function(event, ui){
						try {
							 var top_height = $(window).height()/6.5;        
								 $('html, body').animate({scrollTop: ($(ui.newHeader).offset().top) - top_height}, 350);       
							} catch(err){}                          
				  }
		  });
	}

//initialize mobile menu
$.fn.mmenu_content = function()
	{
		var $menu = $("#desktop_menu").clone();
		$menu.attr( "id", "menu" );
		$menu.mmenu({
			searchfield	: true,
			counters	: true,
			offCanvas : {
				  position: "right"
					  },
					navbars		: [
							{
					position	: 'top',
					content		: [ 'searchfield' ]
					   },
					   ],  
				  backButton :{
						  close : true
						  },
				  extensions: ["border-full"],           
						   
			});
			
			var api = $menu.data( "mmenu" );
			api.bind('opening', function() {
				   $('.header').css("position","relative");
				   $('#return-to-top').css("position","relative");
				  });
			api.bind('closing', function() {
				   $('.header').css("position","fixed");
				   $('#return-to-top').css("position","fixed");
				  });        
	  }

//init logos rotation 

var responsive_logos_rotation = function() 
  {
		$('.rotate_logos .partner_logos').bxSlider({
					minSlides: 1,
					maxSlides: 6,
					auto: true,
					moveSlides: 1,
					slideWidth: 200,
					preloadImages: 'all',
					pager: false,
					autoHover: true,
					infiniteLoop: true           
				  });
		  } 
	

// full drop down navi - add class for arrow in case of third level navigation
var add_arrow_class =  function()
	{
	 $('#desktop_menu ul li ul > li:has(> ul)').addClass("show_nav");
	}
  
// ===== Scroll to Top ==== 
var move_to_top = function()
	{
		$(window).scroll(function() {
			if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
				$('#return-to-top').fadeIn(200);    // Fade in the arrow
				$('.header').css("box-shadow", "0 5px 20px #cfcfcf");
			} else {
				$('#return-to-top').fadeOut(200);   // Else fade out the arrow
				$('.header').css("box-shadow", "0 0 0");
			}
		});
		$('#return-to-top').click(function() {      // When arrow is clicked
			$('body,html').animate({
				scrollTop : 0                       // Scroll to top of body
			}, 500);
		});
	}
	
// share via email button
var share_via_email = function()
  {
	   var link = $('#email');
	   var x = location.href;
	   var y = document.title;
	   link.click(function(){
				this.href = "mailto:?body=";
				this.href += getBody(x);
				this.href +="&subject="
				this.href +=getBody(y);
		});
		function getBody(x, y){return x; return y;} 
  }

 var show_info = function()
  {
	$("a.open_txt").click(function(e) {
	  e.preventDefault();
	  var $div = $(this).next('.show_txt_info');
	  $(".show_txt_info").not($div).slideUp();
		if ($div.is(":visible")) {
			$div.slideUp()
		}  else {
		   $div.slideDown();
		}
	});

	$(document).click(function(e){
		var p = $(e.target).closest('.exp_hp_block').length
		if (!p) {
			  $(".show_txt_info").slideUp();
		}
	});
  
  } 

// toggle country selector
var slide_country = function()
  {
	$(".clickable").click(function(e) {
	  e.preventDefault();
	  var $div = $(this).next('.opened');
	  $(".opened").not($div).slideUp();
		if ($div.is(":visible")) {
			$div.slideUp()
		}  else {
		   $div.slideDown();
		}
	});
	
	$(document).click(function(e){
		var p = $(e.target).closest('.selectors').length
		if (!p) {
			  $(".opened").slideUp();
		}
	});
	
  }

//scroll to anchor functionality for offices 

var scrollToAnchor = function() {
	if($(".office_headings").length > 0 && document.URL.indexOf("#") >= 0){
	var anchor = document.URL.split("#")[1];
	var header_height = $(".header").height();
	console.log(header_height);
	$(".office_headings").each(function() {
		if($(this).attr("name") == anchor) {
			$("html,body").animate({
					scrollTop: $(this).offset().top - (header_height + 10)},
				'slow');
			}
		});
	}
}

var innerLinksScrollTo = function(){
 $('a[href*=#_]:not([href=#_])').click(function() {
	   if (location.pathname.replace(/^\//,'')
		== this.pathname.replace(/^\//,'') 
		  || location.hostname == this.hostname) {   
		  var target = $(this.hash);  
		  var header_height = $(".header").height();      
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			 if (target.length) {
			   $('html,body').animate({
				   scrollTop: target.offset().top - (header_height + 10)
			  }, 'slow');
			  return false;
		  }
	  }
  });     
 }