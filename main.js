let bgImages = ['books.jpg', 'cds.jpg', 'shirtrack.jpg']
let bgHeaders1 = ['We Take Garage Sales Seriously', 'Garage, Yard, or Church', 'Plan a Day Trip']
let bgHeaders2 = ['Find Sales in Your Area Today', 'Sales Are Everywhere', 'Map a Sale Path Anytime']
let bgPos = 1;

window.onload = setInterval(function() {
    let bg = document.getElementsByClassName('landing')[0];
    let header1 = document.getElementById('header-1');
    let header2 = document.getElementById('header-2');

    header1.innerText = bgHeaders1[bgPos];
    header2.innerText = bgHeaders2[bgPos];

    bg.style = `background-image: linear-gradient(rgba(57,160,237,.4),rgba(57,160,237,.4)), url('./assets/${bgImages[bgPos]}');`

    bg.classList.add('fadeUp');

    if(bgPos == 2) {
        bgPos = 0;
    } else {
        bgPos++;
    }
    
    setTimeout(bg.classList.remove('fadeUp'), 1000)

}, 10000);


/* Handle animations on scroll */
window.onscroll = function(e) {
    if (!document.getElementsByTagName('nav')[0].classList.contains('nav-sticky') && window.scrollY > 0) {
        document.getElementsByTagName('nav')[0].classList.add('nav-sticky');
    } else if( window.scrollY == 0) {
        document.getElementsByTagName('nav')[0].classList.remove('nav-sticky');
    }

    /* Handle fadeUp Elements */
    let upElements = document.getElementsByClassName('fadeUpOnScroll');

    for( var i = 0; i < upElements.length; i++) {
        if( upElements[i].getBoundingClientRect().top <= window.scrollY &&
            !upElements[i].classList.contains('fadeUp')
        ) {
            upElements[i].classList.add('fadeUp');
            upElements[i].classList.remove('fadeUpOnScroll');
            i--;
        }
    }

    /* Handle fadeRight Elements */
    let rightElements = document.getElementsByClassName('fadeRightOnScroll');

    for( var i = 0; i < rightElements.length; i++) {
        if( rightElements[i].getBoundingClientRect().top <= window.scrollY &&
            !rightElements[i].classList.contains('fadeRight')
        ) {
            rightElements[i].classList.add('fadeRight');
            rightElements[i].classList.remove('fadeRightOnScroll');
            i--;
        }
    }

    /* Handle fadeUp Elements */
    let leftElements = document.getElementsByClassName('fadeLeftOnScroll');

    for( var i = 0; i < leftElements.length; i++) {
        if( leftElements[i].getBoundingClientRect().top <= window.scrollY &&
            !leftElements[i].classList.contains('fadeLeft')
        ) {
            leftElements[i].classList.add('fadeLeft');
            leftElements[i].classList.remove('fadeLeftOnScroll');
            i--;
        }
    }
}