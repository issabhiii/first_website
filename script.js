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

const projectsHeader = document.getElementById('projects-header');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const initialFontSize = 39; // Match this with your CSS (10rem)
    const minFontSize = 4; // Minimum font size in rem
    const shrinkStart = 700; // Start shrinking after 10px scroll
    const stickyLimit = 300; // Stop being sticky after 50px

    if (scrollPosition > shrinkStart) {
        const newFontSize = Math.max(
            minFontSize,
            initialFontSize - (scrollPosition - shrinkStart) / 50 // Faster shrink
        );
        projectsHeader.style.fontSize = `${newFontSize}rem`;
    } else {
        projectsHeader.style.fontSize = `${initialFontSize}rem`;
    }

    // Handle the sticky behavior
    if (scrollPosition > stickyLimit) {
        projectsHeader.style.position = 'relative'; // Stop sticking
    } else {
        projectsHeader.style.position = 'sticky'; // Stick to the top
    }
});

// Helper function to detect mobile devices
function isMobile() {
    return window.innerWidth <= 768; // Define mobile as width <= 768px
}

// Scroll event listener

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Set initial and minimum font sizes based on device (optional)
  const initialFontSize = isMobile() ? 10 : 39;
  const minFontSize = isMobile() ? 5 : 4;

  // Adjust these values to control shrink behavior:
  const shrinkStart = 50; // Much later shrink start (adjust as needed)
  const stickyLimit = isMobile() ? 50 : 300; // Sticky duration

  // Handle font shrinking
  if (scrollPosition > shrinkStart) {
    const newFontSize = Math.max(
      minFontSize,
      initialFontSize - (scrollPosition - shrinkStart) / (isMobile() ? 70 : 50)
    );
    projectsHeader.style.fontSize = `${newFontSize}rem`;
  } else {
    projectsHeader.style.fontSize = `${initialFontSize}rem`;
  }

  // Handle sticky behavior (optional, based on your previous code)
  if (scrollPosition > stickyLimit) {
    projectsHeader.style.position = 'relative'; // Stop sticking
  } else {
    projectsHeader.style.position = 'sticky'; // Keep sticky
  }
});
