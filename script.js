document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode'); // Toggle the dark mode class
});


document.getElementById("toggle-dark-mode").addEventListener("click", function () {
    const body = document.body; // Reference to the body element
    const video = document.querySelector(".video-bg source"); // Reference to the video source

    // Toggle the dark mode class on the body
    body.classList.toggle("dark-mode");

    // Update the video source based on the current mode
    if (body.classList.contains("dark-mode")) {
        video.src = "gif.mp4"; // Set video source for dark mode
    } else {
        video.src = "target.mp4"; // Set video source for light mode
    }

    // Reload the video to apply the new source
    video.parentElement.load();
});

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    const textElement = document.getElementById('text'); // For h3
    const paragraph = document.querySelector('p'); // Select the <p> element
    const video = document.querySelector(".video-bg source"); // Reference to the video source

    // Toggle color for the h3
    textElement.style.color = textElement.style.color === 'black' ? 'white' : 'black';

    // Toggle color for the <p>
    paragraph.style.color = paragraph.style.color === 'black' ? 'white' : 'black';

    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    // Update the video source based on the current mode
    if (document.body.classList.contains("dark-mode")) {
        video.src = "target.mp4"; // Set the video source for dark mode
    } else {
        video.src = "gif.mp4"; // Set the video source for light mode
    }

    // Reload the video to apply the new source
    video.parentElement.load();
});