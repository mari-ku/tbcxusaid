function toggleSection(header) {
    var content = header.nextElementSibling;
    if (content.style.maxHeight === '0px') {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.display = 'block'; // Show the content
    } else {
        content.style.maxHeight = '0px';
        content.style.display = 'none'; // Hide the content
    }
}


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