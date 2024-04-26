// Additional text for a certain sentiment
const encouragementMessages = [
    // veryUnhappy: 
    ["Even the smallest spark of hope can ignite a brighter path!",
    "Hang in there, better days are on their way!",
    "Your strength in enduring this storm will lead you to sunnier skies!"],
    // unhappy: 
    ["Remember, your happiness is worth fighting for!",
    "Find solace in the beauty of simple moments!",
    "Every step you take towards positivity is a victory worth celebrating!"],
    // neutral: 
    ["Embrace the potential for joy in every day!",
    "Seek out the little joys that can turn an ordinary day into an extraordinary one!",
    "Allow yourself to explore new avenues of happiness, even in the ordinary!"],
    // happy: 
    ["Spread your joy like confetti, brightening the world around you!",
    "Savor the happiness you've created and share it with those around you!",
    "Let your happiness be a beacon, guiding others to find their own light!"],
    // veryHappy: 
    ["Your happiness is contagious, inspiring those around you to smile a little brighter!",
    "Bask in the glow of your joy, knowing you've cultivated something truly beautiful!",
    "May your days be filled with the kind of happiness that dances in your heart and shines in your eyes!"]
];

// Generates a message after selecting a sentiment and generating a message
document.getElementById('ratings').addEventListener('click', function(e) {
    const pickSentence = getRandomInt(3)
    if (e.target.classList.contains('rating')) {
        const ratingValue = e.target.getAttribute('data-value');
        alert('You selected a sentiment rating of ' + ratingValue + '. ' + 
        encouragementMessages[Number(ratingValue) - 1][pickSentence]);
    }
});

// Generates a random integer from 0 to max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}