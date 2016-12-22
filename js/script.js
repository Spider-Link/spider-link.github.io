// jshint esversion:6

// MOBILE NAVBAR
function myFunction() {
    var x = document.getElementById("myTopnav");
    var logo = document.getElementsByClassName('logo')[0];
    if (x.className === "topnav") {
        x.className = "responsive-nav";
    } else {
        x.className = "topnav";
    }
    if (logo.style.display === "none") {
        logo.style.display = 'block';
    } else {
        logo.style.display = 'none';
    }

}

// CONTACT MAP

//SCROLL FADE IN EFFECT
window.onscroll = function() {
    changeMenu();
};

function changeMenu() {
    let scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    let services = document.getElementById('services');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact');
    let topnav = document.getElementById("myTopnav");
    let mq = window.matchMedia( "(min-width: 600px)" );
    if (scrollBarPosition > 0 && mq.matches) {
      topnav.style.backgroundColor = "cornflowerblue";

    } else {
      topnav.style.backgroundColor = "transparent";

    }
    if (scrollBarPosition > 30) {
        services.style.animationName = 'fadeIn';
        services.style.WebkitAnimationName = 'fadeIn';
        services.style.animationDuration = '2s';
        services.style.WebkitAnimationDuration = '2s';
    }

    if (scrollBarPosition > 750) {
        about.style.animationName = 'fadeIn';
        about.style.WebkitAnimationName = 'fadeIn';
        about.style.animationDuration = '2s';
        about.style.WebkitAnimationDuration = '2s';
      }

    if (scrollBarPosition > 1080) {
            contact.style.animationName = 'fadeIn';
            contact.style.WebkitAnimationName = 'fadeIn';
            contact.style.animationDuration = '2s';
            contact.style.WebkitAnimationDuration = '2s';
    }
}
