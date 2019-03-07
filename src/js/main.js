

// Landing page javaScript
$(function(){

function navLink(element, value){
    $(this).click(function() {
        $(location).attr('href', value);
    });
}
navLink('[role="about-link"]', 'about.html');
navLink('[role="contact-link"]', 'contact.html');
navLink('[role="blog-link"]', 'blog.html');

// Get Card Image from array and add src from array 
var imgArr = ['./images/cardImages/Mask Group 2.png'];

function cardImage(element, image) {
    $(element).attr('src', image);
}
cardImage('[alt="credit card checkout image"]', imgArr[0]);


  
});
