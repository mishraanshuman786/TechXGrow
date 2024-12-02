function initializeAnimations() {
  // Check if the screen width is greater than or equal to 769px (desktop)
  if (window.matchMedia("(min-width: 769px)").matches) {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    const containertimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".desktop-slider",
        scroller: "body",
        start: "top 18%",
        end: "top -140%",
        pin: true,
        scrub: 4,
      },
    });

    containertimeline.to(".desktop-slider .desktop-slider-wrapper", {
      duration: 1.5,
      transform: "translateX(-72%)",
    });
    containertimeline.to(
      ".container video",
      {
        transform: "scale(1.3)",
        duration: 0.3,
      },
      "<"
    );
    containertimeline.to(".container video", {
      opacity: 0.5,
      duration: 0.5,
    });

    const container2timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".container2",
        scroller: "body",
        pin: true,
        scrub: 4,
      },
    });

    container2timeline.to(".logo a,.nav-items", {
      color: "white",
      duration: 0.3,
    });
    container2timeline.to(
      ".container2 video",
      {
        opacity: 1,
        duration: 1,
      },
      ">"
    );
    container2timeline.to(
      ".intro-section h1,.intro-section p",
      {
        color: "white",
        duration: 1,
      },
      ">"
    );

    container2timeline.to(".container2-content", {
      transform: "translateX(-80%)",
      duration: 1,
    });

    container2timeline.to(
      ".container2-content",
      {
        transform: "translateX(-200%)",
        duration: 1,
      },
      ">"
    );
  }
}

// Initialize animations on page load
initializeAnimations();

// Add event listener for window resize
window.addEventListener("resize", () => {
  // Clear existing animations if necessary
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  initializeAnimations(); // Reinitialize animations on resize
});
