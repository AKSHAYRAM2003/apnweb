document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("main > div");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentIndex = 0;
  let isAnimating = false;
  // const slideInterval = 5000; // 3 seconds

  function showSlide(index, direction = "next") {
    if (isAnimating) return;
    isAnimating = true;

    // Remove all transition classes first
    slides.forEach((slide) => {
      slide.classList.remove("active", "prev", "next");
    });

    const currentSlide = slides[currentIndex];
    const nextSlide = slides[index];

    // Set initial positions
    if (direction === "next") {
      currentSlide.classList.add("prev");
      nextSlide.classList.add("next");
    } else {
      currentSlide.classList.add("next");
      nextSlide.classList.add("prev");
    }

    // Force a reflow to ensure the initial positions are set
    void nextSlide.offsetWidth;

    // Trigger the transition
    nextSlide.classList.remove("prev", "next");
    nextSlide.classList.add("active");

    // Update current index
    currentIndex = index;

    // Reset animation lock after transition completes
    setTimeout(() => {
      isAnimating = false;
      slides.forEach((slide) => {
        if (!slide.classList.contains("active")) {
          slide.classList.remove("prev", "next");
          slide.classList.add(direction === "next" ? "next" : "prev");
        }
      });
    }, 400);
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex, "next");
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex, "prev");
  }

  // Event Listeners
  prevButton.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });
  nextButton.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  // Initialize first slide and position others
  slides.forEach((slide, index) => {
    if (index === 0) {
      slide.classList.add("active");
    } else {
      slide.classList.add("next");
    }
  });

  // Automatic slide transition
  let autoSlideTimer = setInterval(nextSlide, slideInterval);

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(nextSlide, slideInterval);
  }

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      showSlide(currentIndex);
    }, 250);
  });
});
