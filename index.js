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
