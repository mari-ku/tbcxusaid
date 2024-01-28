function toggleAnswer(question) {
    let answer = question.nextElementSibling;
    let arrow = question.querySelector('.arrow');
    
    if (answer.style.height === 'auto') {
        answer.style.height = '0px';
        arrow.classList.remove('open');
    } else {
        answer.style.height = 'auto';
        arrow.classList.add('open');
    }
}

function fadeIn(index){
    document.getElementById(`slide-${index}`).style.opacity = 1;
}

function fadeOut(index){
    document.getElementById(`slide-${index}`).style.opacity = 0;
}

let sliderIndex = 0;

let sliderInterval = setInterval(() => {
    if(sliderIndex !== 2) {
        fadeOut(sliderIndex);
        sliderIndex = sliderIndex + 1;
        fadeIn(sliderIndex);
    } else {
        fadeOut(sliderIndex);
        sliderIndex = 0;
        fadeIn(sliderIndex);
    }
},4000)

document.addEventListener('DOMContentLoaded', function() {
    fadeIn(0);
    document.getElementById('slider').addEventListener('mouseenter', () => {
        clearInterval(sliderInterval);
    })
    
    document.getElementById('slider').addEventListener('mouseleave', () => {
        sliderInterval = setInterval(() => {
            if(sliderIndex !== 2) {
                fadeOut(sliderIndex);
                sliderIndex = sliderIndex + 1;
                fadeIn(sliderIndex);
            } else {
                fadeOut(sliderIndex);
                sliderIndex = 0;
                fadeIn(sliderIndex);
            }
        },4000)
    })

    document.getElementById('policies').addEventListener('click', toggleMenu)

    document.getElementById('closemenu').addEventListener('click', closeMenu)

    document.addEventListener('scroll', scrollTransparent)
});

function dotSlide(index){
    switch(index) {
        case 0: 
            fadeIn(0);
            fadeOut(1);
            fadeOut(2);
            break;
        case 1: 
            fadeIn(1);
            fadeOut(0);
            fadeOut(2);
            break;
        case 2: 
            fadeIn(2);
            fadeOut(0);
            fadeOut(1);
            break;     
    }
}

function prevSlide() {
    if(sliderIndex !== 0) {
        fadeOut(sliderIndex);
        sliderIndex = sliderIndex - 1;
        fadeIn(sliderIndex);
    } else {
        fadeOut(sliderIndex);
        sliderIndex = 2;
        fadeIn(sliderIndex);
    }
}

function nextSlide() {
    if(sliderIndex !== 2) {
        fadeOut(sliderIndex);
        sliderIndex = sliderIndex + 1;
        fadeIn(sliderIndex);
    } else {
        fadeOut(sliderIndex);
        sliderIndex = 0;
        fadeIn(sliderIndex);
    }
}


function toggleMenu() {
    let sideMenu = document.getElementById('sideMenu');
    let overlay = document.getElementById('overlay');

    // Toggle the menu and overlay visibility
    sideMenu.style.right = (sideMenu.style.right === '0px') ? '-250px' : '0';
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';

    // Toggle the background color of the body
    document.body.style.background = (document.body.style.background === 'rgba(0, 0, 0, 0.5)') ? '#fff' : 'rgba(0, 0, 0, 0.5)';
}

function closeMenu() {
    let sideMenu = document.getElementById('sideMenu');
    let overlay = document.getElementById('overlay');

    if (window.innerWidth < 600) {
        sideMenu.style.right = '-100%';
        overlay.style.display = 'none';
    } else {
        sideMenu.style.right = '-100%';
        overlay.style.display = 'none';
    }
    document.body.style.background = '#fff';
}

function scrollTransparent() {
    let header = document.getElementById('header');

    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(26, 30, 31, 0.9)";
    } else {
        header.style.backgroundColor = "rgba(26, 30, 31, 1)";
    }
}

function updateBurgerIcon() {
    let burgerIcon = document.getElementById('burger-icon');
    let burgerMenu = document.getElementById('burger-menu');
    let burgerNav = document.getElementById('burger-menu-nav');
    let burgerTop = document.getElementById('burger-top');
    let burgerBot = document.getElementById('burger-bot');
    let burgerMid = document.getElementById('burger-mid');

    burgerIcon.classList.toggle('active');

    if (!burgerIcon.classList.contains('active')) {
        burgerTop.classList.remove('burger-top')
        burgerMid.style.transform = 'rotate(0deg) translate(-0%, -50%)';
        burgerMid.style.backgroundColor = 'white';
        burgerBot.classList.remove('burger-bot');
        burgerMenu.style.opacity = '0';
        burgerNav.style.right = '-100%';
        setTimeout(()=>{
            burgerMenu.style.display = 'none';
        },500)
    } else {
        burgerTop.classList.add('burger-top')
        burgerMid.style.transform = 'rotate(-45deg) translate(-0%, -50%)';
        burgerMid.style.backgroundColor = '#8C8C8C';
        burgerBot.classList.add('burger-bot');
        burgerMenu.style.display = 'block';
        burgerMenu.style.opacity = '0.5';
        burgerNav.style.right = '0';
    }
}
let lastScrollTop = 0;
function handleScroll() {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if(screenWidth<=600) {
        let header = document.getElementById("header");
        let scrollTop = window.scrollY;
        if (scrollTop > lastScrollTop && scrollTop>69) {
            header.style.top = '-100%';
        } else {
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
}

window.addEventListener("scroll", handleScroll);