document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;
  let isTransitioning = false;

  // Add touch support
  let touchStartX = 0;
  let touchEndX = 0;

  function updateSliderPosition() {
    if (isTransitioning) return;

    isTransitioning = true;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Reset isTransitioning after transition completes
    setTimeout(() => {
      isTransitioning = false;
    }, 500); // Match this with your CSS transition duration
  }

  function showNextSlide() {
    if (isTransitioning) return;

    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSliderPosition();
  }

  function showPrevSlide() {
    if (isTransitioning) return;

    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1;
    }
    updateSliderPosition();
  }

  // Touch events
  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  slider.addEventListener(
    "touchmove",
    (e) => {
      touchEndX = e.touches[0].clientX;
      // Prevent default scrolling while swiping
      e.preventDefault();
    },
    { passive: false }
  );

  slider.addEventListener("touchend", () => {
    const swipeDistance = touchStartX - touchEndX;

    // Minimum swipe distance threshold
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        showNextSlide();
      } else {
        showPrevSlide();
      }
    }
  });

  // Button click events
  nextButton.addEventListener("click", showNextSlide);
  prevButton.addEventListener("click", showPrevSlide);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      showNextSlide();
    } else if (e.key === "ArrowLeft") {
      showPrevSlide();
    }
  });

  // Get navigation buttons
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // Function to handle navigation visibility
  function updateNavigationVisibility() {
    if (window.innerWidth <= 767) {
      // Mobile view - hide navigation
      prevBtn.style.opacity = "0";
      nextBtn.style.opacity = "0";
      prevBtn.style.pointerEvents = "none";
      nextBtn.style.pointerEvents = "none";
    } else {
      // Tablet and desktop view - show navigation
      prevBtn.style.opacity = "1";
      nextBtn.style.opacity = "1";
      prevBtn.style.pointerEvents = "auto";
      nextBtn.style.pointerEvents = "auto";
    }
  }

  // Add to window resize handler
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      // Existing desktop code...
      updateNavigationVisibility();
    } else {
      // Existing mobile/tablet code...
      updateNavigationVisibility();
    }
  });

  // Initial check
  updateNavigationVisibility();
});
