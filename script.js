document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    const body = document.body; // Reference to the body element
    const video = document.querySelector(".video-bg source"); // Reference to the video source
    const textElement = document.getElementById('text'); // For h3
    const paragraph = document.querySelector('p'); // Select the <p> element

    // Toggle the dark mode class on the body
    body.classList.toggle('dark-mode');

    // Update the video source based on the current mode
    if (body.classList.contains('dark-mode')) {
        video.src = 'target.mp4'; // Set video source for dark mode
        textElement.style.color = 'white'; // Set text color for dark mode
        paragraph.style.color = 'white'; // Set paragraph color for dark mode
    } else {
        video.src = 'gif.mp4'; // Set video source for light mode
        textElement.style.color = 'black'; // Set text color for light mode
        paragraph.style.color = 'black'; // Set paragraph color for light mode
    }

    // Reload the video to apply the new source
    video.parentElement.load();
});
