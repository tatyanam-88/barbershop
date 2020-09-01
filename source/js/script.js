var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

var loginButton = document.querySelector(".user-list__login");
var loginPopup = document.querySelector(".modal-login");
var loginClose = document.querySelector(".modal-login__close");
var popupClose = document.querySelector(".modal-close");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        navMain.classList.add("main-nav--opened");        
    } else {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
    }
});

loginButton.addEventListener("click", function() {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");

    loginPopup.classList.add("modal-show");    
});

loginClose.addEventListener("click", function() {
    loginPopup.classList.remove("modal-show"); 
});

popupClose.addEventListener("click", function() {
    loginPopup.classList.remove("modal-show"); 
});

