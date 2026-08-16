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

/* =========================================================
   SMOOTH SCROLL REVEAL
   ========================================================= */

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -70px 0px"
    }
  );

  revealItems.forEach((item, index) => {
    item.style.setProperty(
      "--reveal-delay",
      `${Math.min(index % 4, 3) * 90}ms`
    );

    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => {
    item.classList.add("is-visible");
  });
}

/* =========================================================
   BUBBLE PARALLAX
   ========================================================= */

const bubbleField = document.querySelector(".bubble-field");

if (bubbleField) {
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || 0;

          bubbleField.style.transform =
            `translate3d(0, ${scrollY * -0.025}px, 0)`;

          ticking = false;
        });

        ticking = true;
      }
    },
    { passive: true }
  );
}

/* =========================================================
   CURRENT YEAR
   ========================================================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
