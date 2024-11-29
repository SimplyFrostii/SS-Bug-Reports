document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        alert('Navigating to ' + event.target.textContent);
    });
});