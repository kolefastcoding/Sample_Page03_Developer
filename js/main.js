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
// open menu mobile
const header = document.querySelector(".l-header");

if (header) {
  const menuButton = header.querySelector(".js-menu-toggle");
  const primaryNavigation = header.querySelector("#primary-navigation");
  const navigationLinks = header.querySelectorAll(".l-header__nav-link");
  const MOBILE_BREAKPOINT = 768;

  if (menuButton && primaryNavigation) {
    const setMenuState = (isOpen) => {
      header.classList.toggle("is-menu-open", isOpen);

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen),
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu",
      );
    };

    menuButton.addEventListener("click", () => {
      const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      setMenuState(!isOpen);
    });

    navigationLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setMenuState(false);
      }
    });
  }
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

