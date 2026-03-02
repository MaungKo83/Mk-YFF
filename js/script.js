

/* Read more / less (collapsed baseline) */
const buttons = document.querySelectorAll(".read-more-btn");
buttons.forEach((button) => {
  const card = button.closest(".card-body");
  const moreText = card?.querySelector(".more-text");
  const dots = card?.querySelector(".dots");

  if (moreText) moreText.classList.add("hidden");
  if (dots) dots.style.display = "inline";
  button.textContent = "Les mer";
  button.setAttribute("aria-expanded", "false");

  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    if (moreText) moreText.classList.toggle("hidden", isExpanded);
    if (dots) dots.style.display = isExpanded ? "inline" : "none";
    button.textContent = isExpanded ? "Les mer" : "Vis mindre";
  });
});

/* ✅ Open by URL param ?open=ID */
const params = new URLSearchParams(location.search);
const openId = params.get("open");
if (openId) {
  const card = document.getElementById(openId);
  const body = card?.querySelector(".card-body");
  const btn = body?.querySelector(".read-more-btn");
  const moreText = body?.querySelector(".more-text");
  const dots = body?.querySelector(".dots");

  if (btn && moreText) {
    moreText.classList.remove("hidden");
    if (dots) dots.style.display = "none";
    btn.textContent = "Vis mindre";
    btn.setAttribute("aria-expanded", "true");
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}


