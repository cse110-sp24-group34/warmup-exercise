document.getElementById('ratings').addEventListener('click', function(e) {
    if (e.target.classList.contains('rating')) {
        const ratingValue = e.target.getAttribute('data-value');
        alert('You selected a sentiment rating of ' + ratingValue);
    }
});
