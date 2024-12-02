document.addEventListener("DOMContentLoaded", () => {
  // Function to initialize animations
  function initializeAnimations() {
    // Check if the screen width is greater than or equal to 769px (desktop)
    if (window.matchMedia("(min-width: 769px)").matches) {
      // Animate the logo
      gsap.from(".logo", {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power2.out",
      });

      // Animate the nav items
      gsap.from(".nav-items", {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Add hover animations for nav items
      const navItems = document.querySelectorAll(".nav-items");

      navItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          // GSAP timeline for hover effect
          gsap.to(item, {
            scale: 1.1, // Increase size on hover
            duration: 0.3, // Duration of the hover effect
            ease: "power2.out", // Easing function
          });
        });

        item.addEventListener("mouseleave", () => {
          // GSAP timeline to reset the item back to its original state
          gsap.to(item, {
            scale: 1, // Reset the size
            duration: 0.3, // Duration of reset effect
            ease: "power2.out", // Easing function
          });
        });
      });
    }
  }

  // Initialize animations on page load
  initializeAnimations();

  // Add event listener for window resize
  window.addEventListener("resize", () => {
    // Clear existing animations if necessary
    // (Optional: You can implement logic to reset animations if needed)
    initializeAnimations(); // Reinitialize animations on resize
  });
});
