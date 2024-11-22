const doors = document.querySelectorAll('.door-number');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const exteriorImage = document.getElementById('exterior-image');
const interiorImage = document.getElementById('interior-image');
const doorTypeElement = document.getElementById('door-type');
const closePopup = document.querySelector('.popup-close');
const sitePlan = document.getElementById('site-plan');

// Add click event listeners to all door numbers
doors.forEach(door => {
    door.addEventListener('click', () => {
        const doorId = door.getAttribute('data-door-id'); // Get the door's ID
        const doorType = door.getAttribute('data-type'); // Get the door's type

        // Set the exterior and interior image paths
        exteriorImage.src = `doors/${doorId}.jpg`; // Exterior image
        interiorImage.src = `doors/interior/${doorId}.jpg`; // Interior image

        // Display the door type in the popup
        doorTypeElement.textContent = `Door Type: ${capitalize(doorType)}`;

        // Show the popup
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });
});

// Close popup when clicking "Close" or overlay
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});


// Capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace('-', ' ');
}
function openFullscreen() {
    const elem = document.querySelector('.map-container');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
