document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const images = document.querySelectorAll(".slider img");
  let currentIndex = 0;

  // Function to create and append buttons
  function createSliderButtons() {
    // Create left and right buttons
    const leftButton = document.createElement("button");
    leftButton.classList.add("slider-button", "left");
    leftButton.innerHTML = "&lt;"; // Left arrow
    const rightButton = document.createElement("button");
    rightButton.classList.add("slider-button", "right");
    rightButton.innerHTML = "&gt;"; // Right arrow

    // Append buttons to the slider
    document.querySelector(".slider").appendChild(leftButton);
    document.querySelector(".slider").appendChild(rightButton);

    // Event listeners for buttons
    leftButton.addEventListener("click", () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1; // Loop back to last image
      updateSlider();
    });

    rightButton.addEventListener("click", () => {
      currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0; // Loop back to first image
      updateSlider();
    });
  }

  // Function to update the slider position
  function updateSlider() {
    const offset = -currentIndex * 100; // Calculate offset
    sliderWrapper.style.transform = `translateX(${offset}%)`; // Move slider
  }

  // Function to initialize the slider buttons based on screen size
  function initializeSliderButtons() {
    // Remove existing buttons if they exist
    const existingButtons = document.querySelectorAll(".slider-button");
    existingButtons.forEach((button) => button.remove());

    // Check if the screen width is less than 769px
    if (window.innerWidth < 769) {
      createSliderButtons(); // Create and append buttons
    }
  }

  // Initialize buttons on page load
  initializeSliderButtons();

  // Add event listener for window resize
  window.addEventListener("resize", () => {
    initializeSliderButtons(); // Reinitialize buttons on resize
  });
});
