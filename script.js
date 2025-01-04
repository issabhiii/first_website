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
document.addEventListener("DOMContentLoaded", function() {
    const span = document.querySelector(".typing-text span");
    const phrases = ["Web Developer", "Designer", "Problem Solver"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[index];
        if (isDeleting) {
            span.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            span.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % phrases.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 100 : 200);
        }
    }

    typeEffect();

    const darkModeButton = document.getElementById('toggle-dark-mode');
    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top >= 0 && top <= window.innerHeight / 2) {
                const links = document.querySelectorAll('nav a');
                links.forEach(link => link.classList.remove('active'));
                document.querySelector(`nav a[href='#${section.id}']`).classList.add('active');
            }
        });
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});
