let currentSlide = 0; // Keeps track of the current slide

// Function to move the slider
function moveSlide(direction) {
    const slides = document.querySelectorAll('.sliderimg img');
    const totalSlides = slides.length;

    // Update the current slide position
    currentSlide += direction;

    // If the slide moves past the first or last, reset to the other side
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Go to the first slide
    }

    // Move the slider to the new position
    const newTransformValue = -currentSlide * 100; // Shift by 100% for each slide
    document.querySelector('.sliderimg').style.transform = `translateX(${newTransformValue}%)`;
}

// Optional: Automatically slide every 5 seconds
setInterval(() => moveSlide(1), 5000);
