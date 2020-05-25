const selectElement = element => document.querySelector(element);

const hamburger = selectElement('.hamburger');
const navList = selectElement('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('toggle');
    navList.classList.toggle('active');
})

navList.addEventListener('click',()=>{
    navList.classList.toggle('active');
    hamburger.classList.remove('toggle'); /*so that the time symbol goes back to bar symbol */
})