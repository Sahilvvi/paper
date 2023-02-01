window.onload = function() {
    document.getElementById("loading").style.display = "none";
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
    document.getElementsByTagName("nav")[0].classList.add("come-in-r");

    if (document.getElementById('about-page') != null) {
        document.getElementById('about-page').classList.add("come-in-l");
    }
    if (document.getElementById('contact-contact') != null) {
        document.getElementById('contact-contact').classList.add("come-in-l");
    }

    if (document.getElementById("Landing") != null) {
        document.getElementById("Landing").classList.add("come-in-l");
        document.getElementById("hook-image").style.opacity = 0;
        document.getElementById("hook-headline").style.opacity = 0;
        document.getElementById("hook-intro").style.opacity = 0;
        document.getElementById("hook-buttons").style.opacity = 0;

        setTimeout(() => {
            document.getElementById("hook-headline").style.opacity = 1;
            document.getElementById("hook-headline").classList.add("fade-up");
            document.getElementById("hook-image").style.opacity = 1;
            document.getElementById("hook-image").classList.add("come-in-r");
        }, 1000);
        setTimeout(() => {
            document.getElementById("hook-intro").style.opacity = 1;
            document.getElementById("hook-intro").classList.add("fade-up");
        }, 1100);
        setTimeout(() => {
            document.getElementById("hook-buttons").style.opacity = 1;
            document.getElementById("hook-buttons").classList.add("fade-up");
        }, 1200);
    }
}

accordianToggle = document.querySelectorAll(".accordian-toggle");
for (var i = 0; i < accordianToggle.length; i++) {
    accordianToggle[i].addEventListener("click", function(e) {
        e.stopPropagation();
        e.target.classList.toggle("accordian-toggle-active");
        ele = e.target.parentNode.parentNode;
        ele.children[1].classList.toggle("accordian-visible");


    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 10 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.onscroll = function() {
    if (document.getElementById("About") != null) {
        if (window.scrollY > 200) {

            document.getElementById("About").style.opacity = 1;
            document.getElementById("About").classList.add("come-in-r");
        }

        if (window.scrollY > 400) {

            document.getElementById("Products").style.opacity = 1;
            document.getElementById("Products").classList.add("come-in-l");
        }
    }

    fadEIn = document.querySelectorAll(".fadeIn");
    for (var i = 0; i < fadEIn.length; i++) {
        if (isInViewport(fadEIn[i])) {
            fadEIn[i].style.opacity = 1;
        }
    }
    fadeUp = document.querySelectorAll(".fadeUp");
    for (var i = 0; i < fadeUp.length; i++) {
        if (isInViewport(fadeUp[i])) {
            fadeUp[i].style.opacity = 1;
            fadeUp[i].style.bottom = 0;
        }
    }


}

function toggleMenu(e) {
    e.stopPropagation();
    if (document.getElementById("mobile-menu").classList.contains("mobile-menu-active")) {
        closeMenu();
    } else {
        openmenu();
    }
}



function openmenu() {
    document.getElementById("mobile-menu").classList.add("mobile-menu-active");
    document.body.style.overflowY = "hidden";
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
}

function closeMenu() {
    document.getElementById("mobile-menu").classList.remove("mobile-menu-active");
    document.body.style.overflowY = "auto";
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
}



var position = 0;



function SlideLeft(event) {
    event.stopPropagation();
    element = event.target.parentNode.children[0].children;


    items = element.length;



    if (position < items - 1) {
        ++position;
    }
    for (var i = 0; i < element.length; i++) {
        if (position >= items) {
            break;
        }
        element[i].style.transform = "translateX(-" + position + "00%)";
    }



}

function SlideRight(event) {
    event.stopPropagation();
    element = event.target.parentNode.children[0].children;

    items = element.length;


    if (position > 0) {
        position = position - 1;

    }
    for (var i = 0; i < element.length; i++) {
        if (position < 0) {
            position = 0;
            break;
        }

        element[i].style.transform = "translateX(-" + position + "00%)";


    }



}