

// Landing page javaScript

// JQuery
$(function(){
// text injection function for nav link items 
function navLink(element, value){
    $(element).click(function() {
        $(location).attr('href', value);
    });
}
// For all anchor links 
function anchorLinks(element, value) {
    $(element).attr('href', value);

}
// Insert images into the landing page work section cards 
function cardImage(element, image) {
    $(element).attr('src', image);
}
// Anchor link injection
navLink('img[alt="Hamlet-logo"', 'landing.html')


// Anchor links function object, all pages
var anchorLinksObj = {
    linkedIn : 'https://www.linkedin.com/in/matthewahamlet/',
    gitHub : 'https://github.com/MatthewaHamlet',
    worksPost00: 'works--post-page00.html',
    worksPost01: 'works--post-page01.html',
    worksPost02: 'works--post-page02.html',
    worksPost03: 'works--post-page03.html',
    worksPost04: 'works--post-page04.html',
}
// NOTE: A loop may work better here. If the order is to remain the same.
// Anchor links injection on all pages that apply
anchorLinks('div.social__icons--btn > a:nth-child(1)', anchorLinksObj.linkedIn);
anchorLinks('[alt="github"]', anchorLinksObj.gitHub);
anchorLinks('[role="read more link 00"]', anchorLinksObj.worksPost00);
anchorLinks('[role="read more link 01"]', anchorLinksObj.worksPost01);
anchorLinks('[role="read more link 02"]', anchorLinksObj.worksPost02);
anchorLinks('[role="read more link 03"]', anchorLinksObj.worksPost03);
anchorLinks('[role="read more link 04"]', anchorLinksObj.worksPost04);
// Card image array.
var imgArr = [
    '/images/cardImages/creditCardCheckout.png', 
    '/images/cardImages/businessThemeWeb.png',
    '/images/cardImages/cardFarmWeb.png',
    '/images/doctorWhoDiceGame/Images/doctorWhoDiceGameWeb.png',
    '/images/creativeAgency/Images/creativeAgencyWeb.png',
  ];
// Card image 
// NOTE: Could use a loop/each here.
cardImage('[alt="credit card checkout image"]', imgArr[0]);
cardImage('[alt="Inkwell post image"]', imgArr[1]);
cardImage('[alt="Card Farm Game"]', imgArr[2]);
cardImage('[alt="Doctor Who Dice Game"]', imgArr[3]);
cardImage('[alt="Creative Agency Theme"]', imgArr[4]); 


// Gallery 
// Gallery image hover
$( ".img-wrapper" ).hover(
    function() {
      $(this).find(".img-overlay").animate({opacity: 1}, 600);
    }, function() {
      $(this).find(".img-overlay").animate({opacity: 0}, 600);
    }
  );
  
  // Lightbox
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
  var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
  var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
  
  // Add overlay
  $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
  $("#gallery").append($overlay);
  
  // Hide overlay on default
  $overlay.hide();
  
  // When an image is clicked
  $(".img-overlay").click(function(event) {
    // Prevents default behavior
    event.preventDefault();
    // Adds href attribute to variable
    var imageLocation = $(this).prev().attr("href");
    // Add the image src to $image
    $image.attr("src", imageLocation);
    // Fade in the overlay
    $overlay.fadeIn("slow");
  });
  
  // When the overlay is clicked
  $overlay.click(function() {
    // Fade out the overlay
    $(this).fadeOut("slow");
  });
  
  // When next button is clicked
  $nextButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    // All of the images in the gallery
    var $images = $("#image-gallery img");
    // If there is a next image
    if ($nextImg.length > 0) { 
      // Fade in the next image
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
      // Otherwise fade in the first image
      $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
  });
  
  // When previous button is clicked
  $prevButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    // Prevents overlay from being hidden
    event.stopPropagation();
  });
  
  // When the exit button is clicked
  $exitButton.click(function() {
    // Fade out the overlay
    $("#overlay").fadeOut("slow");
  });


  
});
