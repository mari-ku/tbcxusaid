function toggleAnswer(question) {
    let answer = question.nextElementSibling;
    let arrow = question.querySelector('.arrow');
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrow.classList.remove('open');
    } else {
        answer.style.display = 'block';
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

    sideMenu.style.right = '-50%';
    overlay.style.display = 'none';

    
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