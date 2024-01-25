function toggleAnswer(question) {
    var answer = question.nextElementSibling;
    var arrow = question.querySelector('.arrow');
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        arrow.classList.remove('open');
    } else {
        answer.style.display = 'block';
        arrow.classList.add('open');
    }
}