
const games = [
    {
        image: "/images/land.png",
        launchUrl: "#", // Add your game launch URLs
        aboutUrl: "/games.html" // Add your game about URLs
    },
    {
        image: "/images/sea.png",
        launchUrl: "#",
        aboutUrl: "/games.html"
    },
    {
        image: "/images/space.png",
        launchUrl: "#",
        aboutUrl: "/games.html"
    }
];

// Console (Game) Section
let currentGameIndex = 0;
const svgGameScreenshot = document.getElementById('svgGameScreenshot');
const launchGameBtn = document.getElementById('launchGameBtn');
const aboutGameBtn = document.getElementById('aboutGameBtn');
const prevGameBtn = document.getElementById('console-prev-btn');
const nextGameBtn = document.getElementById('console-next-btn');

function updateGameDisplay() {
    if (svgGameScreenshot && launchGameBtn && aboutGameBtn) {
        const game = games[currentGameIndex];
        updateDisplay(svgGameScreenshot, launchGameBtn, aboutGameBtn, game);
        console.log("Updated game display to:", game.image);
    }
}

// Helper function to update any display (project or game)
function updateDisplay(screenshotElement, launchButton, aboutButton, item) {
    const timestamp = new Date().getTime();
    const imageUrl = `${item.image}?${timestamp}`;
    
    // Modern browsers (SVG 2)
    screenshotElement.setAttribute('href', imageUrl);
    
    // For older browsers (SVG 1.1)
    screenshotElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);

    launchButton.href = item.launchUrl;
    aboutButton.href = item.aboutUrl;
}

// Console navigation event listeners
if (nextGameBtn) {
    nextGameBtn.addEventListener('click', () => {
        currentGameIndex = (currentGameIndex + 1) % games.length;
        updateGameDisplay();
    });
}

if (prevGameBtn) {
    prevGameBtn.addEventListener('click', () => {
        currentGameIndex = (currentGameIndex - 1 + games.length) % games.length;
        updateGameDisplay();
    });
}

// Initialize both displays when the page loads
document.addEventListener('DOMContentLoaded', () => {
    updateGameDisplay();
});