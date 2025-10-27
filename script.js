const currentDate = new Date();
const year = currentDate.getFullYear();

// Format the last updated date (example: October 27, 2025)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const lastUpdated = currentDate.toLocaleDateString('en-US', options);

// Update the year in the footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = year;
}

// Update the last updated date in the footer
const updatedSpan = document.getElementById('updated');
if (updatedSpan) {
    updatedSpan.textContent = lastUpdated;
}

// Example of adding an event listener to a project card
const pathfinderCard = document.querySelector('.pathfinder-Campaign');
if (pathfinderCard) {
    pathfinderCard.addEventListener('click', () => {
        // You could add dynamic behavior here, like navigating to the link
        // or displaying more information.
        console.log("Pathfinder Campaign card clicked!");
        // To navigate, you would typically use:
        // window.location.href = pathfinderCard.querySelector('a').href;
    });
}