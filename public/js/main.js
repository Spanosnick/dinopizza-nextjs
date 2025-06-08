(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Preloader
	-------------------------------------------------------------------------------*/
  $(window).on('load', function() {
    $('.ct-preloader').addClass('hidden');
  });

  /*-------------------------------------------------------------------------------
  Aside Menu
	-------------------------------------------------------------------------------*/
  $(".aside-trigger").on('click', function() {
    $(".main-aside").toggleClass('open');
  });
  $(".main-aside .menu-item-has-children > a").on('click', function(e) {
    var submenu = $(this).next(".submenu");
    e.preventDefault();

    submenu.slideToggle(200);
  })

  /*-------------------------------------------------------------------------------
  Cart Trigger
  -------------------------------------------------------------------------------*/
  $(".cart-trigger").on('click', function(e) {
    $("body").toggleClass('cart-open');
  });

  /*-------------------------------------------------------------------------------
  Search Trigger
  -------------------------------------------------------------------------------*/
  $(".search-trigger").on('click', function(e) {
    $(".search-form-wrapper").toggleClass('open');
  });

  /*-------------------------------------------------------------------------------
  Checkout Notices
  -------------------------------------------------------------------------------*/
  $(".ct-notice a").on('click', function(e){
    e.preventDefault();

    $(this).closest('.ct-notice').next().slideToggle();
  });

  /*-------------------------------------------------------------------------------
  Isotope (Menu Categories)
  -------------------------------------------------------------------------------*/
  var $container = $('.menu-container');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
  $('.menu-filter a').on('click', function() {
    $('.menu-filter .active').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });

  /*-------------------------------------------------------------------------------
  Sticky Header
	-------------------------------------------------------------------------------*/
  function doSticky() {
    var header = $(".can-sticky");

    if (window.pageYOffset > 50) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
  doSticky();

  /*-----------------------------------
    Back to Top
    -----------------------------------*/
  $('.back-to-top').on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  })

  /*-------------------------------------------------------------------------------
  Aside Scroll
	-------------------------------------------------------------------------------*/
  function initAsideScrollbar() {
    var scrollHeight = $('.main-aside').innerHeight() - $(".main-aside .navbar-brand").innerHeight(); // Calculate the height of the scroll container
    var calculatedHeight = isNaN(scrollHeight) ? "auto" : scrollHeight;
    $('.aside-scroll').slimScroll({
      height: calculatedHeight,
      position: "right",
      size: "5px",
      color: "#dcdcdc",
      opacity: 1,
      wheelStep: 5,
      touchScrollStep: 50,
    });
  }
  initAsideScrollbar();

  /*-------------------------------------------------------------------------------
  Cart Scroll
  -------------------------------------------------------------------------------*/
  function initCartScrollbar() {
    var scrollHeight = $('.cart-sidebar').innerHeight() - $(".cart-sidebar .cart-sidebar-header").innerHeight() - $(".cart-sidebar .cart-sidebar-footer").innerHeight() - 40; // Calculate the height of the scroll container
    var calculatedHeight = isNaN(scrollHeight) ? "auto" : scrollHeight;
    $('.cart-sidebar-scroll').slimScroll({
      height: calculatedHeight,
      position: "right",
      size: "5px",
      alwaysVisible: true,
      color: "#4e4e4e",
      railVisible: true,
      railColor: '#212222',
      opacity: 1,
      wheelStep: 5,
      touchScrollStep: 50,
    });
  }
  initCartScrollbar();

  /*-------------------------------------------------------------------------------
  Tooltips
  -------------------------------------------------------------------------------*/
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  /*-------------------------------------------------------------------------------
  Magnific Popup
  -------------------------------------------------------------------------------*/
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
  $('.popup-vimeo').magnificPopup({
    type: 'iframe'
  });
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });
  $('.gallery-thumb').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
  });

  /*-------------------------------------------------------------------------------
  Banner Slider (Home 1)
  -------------------------------------------------------------------------------*/
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.banner-slider-nav-inner',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }]
  });

  /*-------------------------------------------------------------------------------
  Banner Slider Nav (Home 1)
  -------------------------------------------------------------------------------*/
  $(".banner-slider-nav-inner").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    loop: true,
    prevArrow: $('.banner-slider-nav .slider-prev'),
    nextArrow: $('.banner-slider-nav .slider-next'),
    asNavFor: '.banner-slider',
    focusOnSelect: true,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          autoplay: true
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Gallery Slider (Home 3)
  -------------------------------------------------------------------------------*/
  $(".gallery-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  /*-------------------------------------------------------------------------------
  Banner Slider (Home 2)
  -------------------------------------------------------------------------------*/
  $(".banner-slider-2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
      }
    }]
  });

  /*-------------------------------------------------------------------------------
  Category Slider (Home 2)
  -------------------------------------------------------------------------------*/
  $(".category-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $('.category-section .slider-prev'),
    nextArrow: $('.category-section .slider-next'),
    responsive: [{
      breakpoint: 768,
      settings: {
        dots: false,
        autoplay: true
      }
    }]
  });

  /*-------------------------------------------------------------------------------
  Banner Slider (Home 3)
  -------------------------------------------------------------------------------*/
  $(".banner-slider-3").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    prevArrow: $('.banner-3 .slider-prev'),
    nextArrow: $('.banner-3 .slider-next'),
    centerPadding: '80px',
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          variableWidth: false,
          centerPadding: '0px',
          centerMode: false,
          arrows: false,
          autoplay: true,
          slidesToShow: 1
        }
      }
    ]
  });
  $('.banner-slider-3').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $(".banner-3 .current-slide span").text(currentSlide + 1);
  });

  /*-------------------------------------------------------------------------------
  Related Posts slider
  -------------------------------------------------------------------------------*/
  $(".related").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  /*-------------------------------------------------------------------------------
  Testimonials Slider (Home 1)
  -------------------------------------------------------------------------------*/
  $(".ct-testimonials-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.testimonials .slider-prev'),
    nextArrow: $('.testimonials .slider-next'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Products Slider (Home 1)
  -------------------------------------------------------------------------------*/
  $(".product-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.products-section .slider-prev'),
    nextArrow: $('.products-section .slider-next'),
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Menu Category Slider
  -------------------------------------------------------------------------------*/
  $(".menu-category-slider").slick({
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  /*-------------------------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------------------*/
  $('.masonry').imagesLoaded(function() {
    var isotopeContainer = $('.masonry');
    isotopeContainer.isotope({
      itemSelector: '.masonry-item',
    });
  });

  /*-------------------------------------------------------------------------------
  Add / Subtract Quantity
  -------------------------------------------------------------------------------*/
  $(".qty span").on('click', function(){
    var qty = $(this).closest('.qty').find('input');
    var qtyVal = parseInt(qty.val());
    if($(this).hasClass('qty-add')){
      qty.val(qtyVal + 1);
    }else{
      return qtyVal > 1 ? qty.val(qtyVal - 1) : 0;
    }
  })

  //On scroll events
  $(window).on('scroll', function() {

    doSticky();

  });

  //On resize events
  $(window).on('resize', function() {

    initAsideScrollbar();
    initCartScrollbar();

  });

})(jQuery);


const changeLanguage = (value, str='') => {
  $.ajax({
    type: "POST",
    url: `${str}changeLanguage.php`,
    data: {
      language: value
    },
    success: function(data) {
      console.log(data);
      window.location.reload();
    }
  });
  console.log(value);
}

function toggleActiveClass() {
  // Get all elements with class 'customize-size'
  const elements = document.querySelectorAll('.customize-size');

  // Add click event listener to each element
  elements.forEach(element => {
    element.addEventListener('click', () => {
      // Remove 'active' class from all elements
      elements.forEach(el => el.classList.remove('active'));
      // Add 'active' class to the clicked element
      element.classList.add('active');
    });
  });
}

toggleActiveClass();

let pizzaSize = 'medium';
let productItems = [];

function calculatePizza() {
  console.log('Calculating pizza.......');
  const pizzaPrice = document.getElementById('customPizzaPrice')

  const selectedItems = getSelectedItems();
  const numberOfItems = selectedItems.length;
  console.log('Number of items: ', numberOfItems);
  if (pizzaSize === 'medium' && numberOfItems === 0) {
    pizzaPrice.innerHTML = '6.50 €';
  } else if (pizzaSize === 'mediumPhil' && numberOfItems === 0) {
    pizzaPrice.innerHTML = '8.00 €';
  } else if (pizzaSize === 'large' && numberOfItems === 0) {
    pizzaPrice.innerHTML = '10.40 €';
  } else if (pizzaSize === 'largePhil' && numberOfItems === 0) {
    pizzaPrice.innerHTML = '13.50 €';
  }

  if (pizzaSize === 'medium'  && numberOfItems !== 0 && numberOfItems < 3) {
    pizzaPrice.innerHTML = '7.00 €';
  } else if (pizzaSize === 'mediumPhil' && numberOfItems !== 0 && numberOfItems < 3) {
    pizzaPrice.innerHTML = '8.70 €';
  } else if (pizzaSize === 'large' && numberOfItems !== 0 && numberOfItems < 3) {
    pizzaPrice.innerHTML = '10.90 €';
  } else if (pizzaSize === 'largePhil' && numberOfItems !== 0 && numberOfItems < 3) {
    pizzaPrice.innerHTML = '13.50 €';
  }

  if (pizzaSize === 'medium'  && numberOfItems > 2 && numberOfItems < 4) {
    pizzaPrice.innerHTML = '7.70 €';
  } else if (pizzaSize === 'mediumPhil' && numberOfItems > 2 && numberOfItems < 4) {
    pizzaPrice.innerHTML = '9.40 €';
  } else if (pizzaSize === 'large' && numberOfItems > 2 && numberOfItems < 4) {
    pizzaPrice.innerHTML = '11.90 €';
  } else if (pizzaSize === 'largePhil' && numberOfItems > 2 && numberOfItems < 4) {
    pizzaPrice.innerHTML = '14.50 €';
  }

  // if (pizzaSize === 'medium' && selectedItems.indexOf('item17') !== -1 ) {
  //   pizzaPrice.innerHTML = '8.50 €';
  // }else if (pizzaSize === 'mediumPhil' && selectedItems.indexOf('item17') !== -1 ) {
  //   pizzaPrice.innerHTML = '10.00 €';
  // }else if (pizzaSize === 'large' && selectedItems.indexOf('item17') !== -1 ) {
  //   pizzaPrice.innerHTML = '12.90 €';
  // }else if (pizzaSize === 'largePhil' && selectedItems.indexOf('item17') !== -1 ) {
  //   pizzaPrice.innerHTML = '15.50 €';
  // }

  if (pizzaSize === 'medium' && numberOfItems > 4 ) {
    pizzaPrice.innerHTML = '8.50 €';
  }else if (pizzaSize === 'mediumPhil' && numberOfItems > 4 ) {
    pizzaPrice.innerHTML = '10.00 €';
  }else if (pizzaSize === 'large' && numberOfItems > 4 ) {
    pizzaPrice.innerHTML = '12.90 €';
  }else if (pizzaSize === 'largePhil' && numberOfItems > 4) {
    pizzaPrice.innerHTML = '15.50 €';
  }

  if (pizzaSize === 'medium' && numberOfItems > 6 ) {
    pizzaPrice.innerHTML = '9.00 €';
  }else if (pizzaSize === 'mediumPhil' && numberOfItems > 6 ) {
    pizzaPrice.innerHTML = '10.50 €';
  }else if (pizzaSize === 'large' && numberOfItems > 6) {
    pizzaPrice.innerHTML = '13.70 €';
  }else if (pizzaSize === 'largePhil' && numberOfItems > 6) {
    pizzaPrice.innerHTML = '16.10 €';
  }


  console.log(selectedItems);
}

function selectPizzaSize(size){
    console.log('Selected pizza size: ', size);
    pizzaSize = size;
  calculatePizza()
}

function getSelectedItems() {
  const selectedItems = [];
  const checkboxes = document.querySelectorAll('.availableItems input');

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selectedItems.push(checkbox.value);
    }
  });

  console.log(selectedItems); // You can replace this with any action you want to perform with the selected items
  return selectedItems;
}


function defaultForm(event,relativePath = '') {
  event.preventDefault();
  const array = $('form').serializeArray();
  if (array[0].value == "" || array[1].value == "" || array[2].value == ""
      || array[3].value == "" || array[4].value == "" ) {
    alert("Παρακαλώ συμπληρώστε όλα τα πεδία");
    return;
  }
  $('#loader').removeClass('d-none');
  $.ajax({
    url: `${relativePath}contact.php`,
    type: 'POST',
    data: array,
    success:function(){
      $('#loader').addClass('d-none');
      alert("Το μήνυμα σου στάλθηκε. Θα επικοινωνήσουμε μαζί σου το συντομότερο δυνατό!");
      document.getElementById("formContact").reset();
    }
  });
}



