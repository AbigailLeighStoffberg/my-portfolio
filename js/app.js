
const projects = [
    {
        image: "/images/temp-image.png", // Your first app screenshot
        launchUrl: "https://your-todo-app-link.com", // Link to your To-do app
        aboutUrl: "#projects-todo" // Link to the section about this app on your projects page
    },
    {
        image: "/images/clock-screenshot.png", // Make sure you have this image
        launchUrl: "https://your-dictionary-app-link.com",
        aboutUrl: "#projects-dictionary"
    },
    {
        image: "/images/atom-screenshot.png", // Make sure you have this image
        launchUrl: "https://your-dictionary-app-link.com",
        aboutUrl: "#projects-dictionary"
    }
];

let currentProjectIndex = 0; // Start with the first project

// Get references to the HTML elements
const appScreenshot = document.getElementById('appScreenshot');
const launchAppBtn = document.getElementById('launchAppBtn');
const aboutAppBtn = document.getElementById('aboutAppBtn');
const prevAppBtn = document.getElementById('prevAppBtn');
const nextAppBtn = document.getElementById('nextAppBtn');

// Function to update the displayed project
function updateProjectDisplay() {
    // Ensure all elements exist before trying to access their properties
    if (appScreenshot && launchAppBtn && aboutAppBtn) {
        const project = projects[currentProjectIndex];
        appScreenshot.src = project.image;
        launchAppBtn.href = project.launchUrl;
        aboutAppBtn.href = project.aboutUrl;
    } else {
        console.error("One or more required DOM elements not found for project display update.");
    }
}

// Event listener for the "Next" button
if (nextAppBtn) {
    nextAppBtn.addEventListener('click', () => {
        currentProjectIndex++;
        if (currentProjectIndex >= projects.length) {
            currentProjectIndex = 0; // Loop back to the first project
        }
        updateProjectDisplay();
    });
} else {
    console.warn("Next button not found. Project navigation will not work.");
}


// Event listener for the "Previous" button
if (prevAppBtn) {
    prevAppBtn.addEventListener('click', () => {
        currentProjectIndex--;
        if (currentProjectIndex < 0) {
            currentProjectIndex = projects.length - 1;
        }
        updateProjectDisplay();
    });
} else {
    console.warn("Previous button not found. Project navigation will not work.");
}

document.addEventListener('DOMContentLoaded', updateProjectDisplay);
