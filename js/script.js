/* ---------- MOBILE NAV MENU ---------- */
(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (!navToggle || !nav) return;

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });

  // Close the menu after clicking a link (mobile)
  nav.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
})();

/* ---------- READ MORE / READ LESS ---------- */
(function () {
  const buttons = document.querySelectorAll(".read-more-btn");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    const card = button.closest(".card-body");
    if (!card) return;

    const moreText = card.querySelector(".more-text");
    const dots = card.querySelector(".dots");

    if (moreText) moreText.classList.add("hidden");
    if (dots) dots.style.display = "inline";

    button.textContent = "Les mer";
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));

      if (moreText) {
        if (isExpanded) {
          moreText.classList.add("hidden");
        } else {
          moreText.classList.remove("hidden");
        }
      }

      if (dots) dots.style.display = isExpanded ? "inline" : "none";
      button.textContent = isExpanded ? "Les mer" : "Vis mindre";
    });
  });

  // Open via URL param ?open=ID
  const params = new URLSearchParams(location.search);
  const openId = params.get("open");
  if (openId) {
    const card = document.getElementById(openId);
    const body = card ? card.querySelector(".card-body") : null;
    const btn = body ? body.querySelector(".read-more-btn") : null;
    const moreText = body ? body.querySelector(".more-text") : null;
    const dots = body ? body.querySelector(".dots") : null;

    if (btn && moreText) {
      moreText.classList.remove("hidden");
      if (dots) dots.style.display = "none";
      btn.textContent = "Vis mindre";
      btn.setAttribute("aria-expanded", "true");
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
})();

/* ---------- SIMPLE SLIDESHOW (auto-rotate per container) ---------- */
(function () {
  const containers = document.querySelectorAll(".slideshow-container");
  if (!containers.length) return;

  containers.forEach((container) => {
    const slides = Array.from(container.querySelectorAll(".myslide"));
    if (slides.length <= 1) return;

    let i = 0;
    const show = (idx) => {
      slides.forEach((s, j) => s.classList.toggle("active", j === idx));
    };
    show(i);

    setInterval(() => {
      i = (i + 1) % slides.length;
      show(i);
    }, 4000);
  });
})();

/* ---------- FOOTER YEAR ---------- */
(function () {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
