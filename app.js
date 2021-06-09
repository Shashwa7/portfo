const selectElement = element => document.querySelector(element);

const hamburger = selectElement('.hamburger');
const navList = selectElement('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const body = selectElement('body');

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('toggle');
    navList.classList.toggle('active');
    /*prventing scree to scroll whil menu is open */
    body.classList.toggle('screen-freeze');
});


navList.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.remove('toggle'); /*so that the time symbol goes back to bar symbol */

    /*making sure screen-freez class is removed once clicked */
    body.classList.remove('screen-freeze');
});

//prevent pinch zoom in iphones
 document.addEventListener('gesturestart', (e) => {
            e.preventDefault();
 });

//FIXED / STICKY NAVBAR
// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

 // When the user scrolls the page, execute myFunction
 window.onscroll = function() {myFunction()};
