const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
  });
});

/* Smooth scroll reveal */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -65px 0px"
  });

  revealItems.forEach((item, index) => {
    item.style.setProperty(
      "--reveal-delay",
      `${Math.min(index % 4, 3) * 90}ms`
    );
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* Subtle bubble parallax */
const bubbleField = document.querySelector(".bubble-field");
let ticking = false;

window.addEventListener("scroll", () => {
  if (!bubbleField || ticking) return;

  window.requestAnimationFrame(() => {
    bubbleField.style.transform =
      `translate3d(0, ${window.scrollY * -0.025}px, 0)`;
    ticking = false;
  });

  ticking = true;
}, { passive: true });

/* Current year */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
