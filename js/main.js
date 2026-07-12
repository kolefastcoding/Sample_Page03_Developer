const themeToggle = document.querySelector(".c-theme-toggle");
const body = document.body;
const themeIcon = document.querySelector(".theme-icon");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle?.setAttribute("aria-pressed", "true");

  if (themeIcon) {
    themeIcon.textContent = "☾";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDarkMode = body.classList.toggle("dark-mode");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    themeToggle.setAttribute("aria-pressed", String(isDarkMode));

    if (themeIcon) {
      themeIcon.textContent = isDarkMode ? "☾" : "☀";
    }
  });
}


// Testimonial Swiper

const testimonialSwiper = new Swiper(".p-section-testimonial__slider", {
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,
  speed: 800,
  grabCursor: true,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".p-section-testimonial__pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

