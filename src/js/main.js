

// Landing page javaScript

// JQuery
$(function(){

function navLink(element, value){
    $(element).click(function() {
        $(location).attr('href', value);
    });
}

function anchorLinks(element, value) {
    $(element).attr('href', value);

}

function cardImage(element, image) {
    $(element).attr('src', image);
}
// Nav link injection
navLink('[role="about-link"]', 'about.html');
navLink('[role="contact-link"]', 'contact.html');
navLink('[role="blog-link"]', 'blog.html');

// Anchor links function object, all pages
var anchorLinksObj = {
    linkedIn : 'https://www.linkedin.com/in/matthewahamlet/',
    gitHub : 'https://github.com/MatthewaHamlet',
    // Update this with resume link when created 
    resumeLink : 'http://placeholder.com'
}
// Anchor links injection on all pages that apply
anchorLinks('div.social__icons--btn > a:nth-child(1)', anchorLinksObj.linkedIn);
navLink('[alt="github"]', anchorLinksObj.gitHub);
anchorLinks('[role="resume button"', anchorLinksObj.resumeLink);


// Card image array.
var imgArr = ['./images/cardImages/Mask Group 2.png'];
// Card image 
// Could use a loop/each here
cardImage('[alt="credit card checkout image"]', imgArr[0]);


  
});
