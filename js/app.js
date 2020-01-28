const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar .navbar-list');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navbar-list');
    nav.classList.toggle('navbar--active');
})

const media = window.matchMedia("(max-width: 850px)");
media.addEventListener('change', function(media) {

    if (!media.matches) {
        nav.classList.remove('navbar--active');
        nav.classList.add('navbar-list');
        hamburger.classList.remove('hamburger--active');
    }
})
