const projects = [
    {
        image: "/images/temp-image.png",
        launchUrl: "https://hello-weather-cute-app.netlify.app/",
        aboutUrl: "/projects.html"
    },
    {
        image: "/images/clock-screenshot.png",
        launchUrl: "https://world-clocks-for-kids.netlify.app/",
        aboutUrl: "/projects.html"
    },
    {
        image: "/images/atom-screenshot.png",
        launchUrl: "https://atom-big-questions-simple-answers.netlify.app/",
        aboutUrl: "/projects.html"
    }
];

const games = [
    {
        image: "/images/bunny.png",
        launchUrl: "#", // Add your game launch URLs
        aboutUrl: "/games.html" // Add your game about URLs
    },
    {
        image: "/images/shark.png",
        launchUrl: "#",
        aboutUrl: "/games.html"
    },
    {
        image: "/images/shmup.png",
        launchUrl: "#",
        aboutUrl: "/games.html"
    }
];

// Tablet (App) Section
let currentProjectIndex = 0;
const svgAppScreenshot = document.getElementById('svgAppScreenshot');
const launchAppBtn = document.getElementById('launchAppBtn');
const aboutAppBtn = document.getElementById('aboutAppBtn');
const prevAppBtn = document.getElementById('tablet-prev-btn');
const nextAppBtn = document.getElementById('tablet-next-btn');

// Console (Game) Section
let currentGameIndex = 0;
const svgGameScreenshot = document.getElementById('svgGameScreenshot');
const launchGameBtn = document.getElementById('launchGameBtn');
const aboutGameBtn = document.getElementById('aboutGameBtn');
const prevGameBtn = document.getElementById('console-prev-btn');
const nextGameBtn = document.getElementById('console-next-btn');

function updateProjectDisplay() {
    if (svgAppScreenshot && launchAppBtn && aboutAppBtn) {
        const project = projects[currentProjectIndex];
        updateDisplay(svgAppScreenshot, launchAppBtn, aboutAppBtn, project);
        console.log("Updated project display to:", project.image);
    }
}

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

// Tablet navigation event listeners
if (nextAppBtn) {
    nextAppBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        updateProjectDisplay();
    });
}

if (prevAppBtn) {
    prevAppBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        updateProjectDisplay();
    });
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
    updateProjectDisplay();
    updateGameDisplay();
});