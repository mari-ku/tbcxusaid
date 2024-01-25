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

var sliderInterval = setInterval(() => {
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