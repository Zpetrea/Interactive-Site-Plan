const doors = document.querySelectorAll('.door-number');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const exteriorImage = document.getElementById('exterior-image');
const interiorImage = document.getElementById('interior-image');
const doorTypeElement = document.getElementById('door-type');
const closePopup = document.querySelector('.popup-close');
const sitePlan = document.getElementById('site-plan');

// List of doors that need the exception styling (Update this list based on the site plan)
const exceptionDoors = [5, 6, 7, 15, 16, 21, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 43, 44, 45, 46]; // Replace with actual exception door numbers

document.addEventListener("DOMContentLoaded", () => {
    // Highlight exception doors by adding a CSS class and setting tooltips
    doors.forEach(door => {
        const doorId = parseInt(door.getAttribute('data-door-id'), 10);
        if (exceptionDoors.includes(doorId)) {
            door.classList.add('door-exception');
            door.setAttribute("data-tooltip", "Exempt Door"); // Set tooltip text
        }
    });

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
    closePopup.addEventListener('click', closePopupFunction);
    overlay.addEventListener('click', closePopupFunction);
});

// Function to close popup
function closePopupFunction() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace('-', ' ');
}

// Function to enable fullscreen mode
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
