$(document).ready(function() {

    /*======Menu-toggle=============*/
  
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass('active');
  });
  /*==========/menu-toggle=========*/

  /*=======Fixed Header=========*/
  let header = $(".header");
  let introH = $("#intro").innerHeight();
  let scrollOffset = $(window).scrollTop();


  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  })

  function checkScroll(scrollOffset) {
    if( scrollOffset >= introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
    /*=======/fixed Header=========*/

     /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(".header__nav").removeClass('active');
      $(".burger").removeClass('active');
 
    $("html, body").animate ({
      scrollTop: blockOffset - 170
    }, 500);
  });
/*=========/smooth scroll=============*/
	
	/*======Select-styler=============*/
	$(function() {
		$('select.modif').styler();
	});

	$(".my-select").chosen({
        width:"100%",
	});
	/*======/select=============*/


/*======Slider-about=============*/
  $('.slider-about').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrow_prev'),
      nextArrow: $('.slider-arrow_next'),
    responsive: [
     {
       breakpoint: 992,
      settings: {
        infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrow_prev'),
      nextArrow: $('.slider-arrow_next'),
    }
      },
      {
       breakpoint: 600,
      settings: {
        infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrow_prev'),
      nextArrow: $('.slider-arrow_next'),
    }
      },
      {
       breakpoint: 415,
      settings: {
        infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.slider-arrow_prev'),
      nextArrow: $('.slider-arrow_next'),
    }
      }
  ]
  });
  /*=============/slider-about==============*/

	
});



