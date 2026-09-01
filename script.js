const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-menu");
const leadForm = document.querySelector("#lead-form");
const formNote = document.querySelector("#form-note");
const backToTop = document.querySelector("#back-to-top");
const brandLink = document.querySelector(".brand");

menuToggle?.addEventListener("click", () => {
  const isOpen = siteMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

brandLink?.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
  siteMenu?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(leadForm);
  const subject = encodeURIComponent("New website inquiry for M Square Professionals");
  const body = encodeURIComponent([
    `Name: ${data.get("name")}`,
    `Company: ${data.get("company") || "Not provided"}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone") || "Not provided"}`,
    `Service Area: ${data.get("service")}`,
    `Budget Range: ${data.get("budget") || "Not selected"}`,
    `Newsletter: ${data.get("newsletter") ? "Yes" : "No"}`,
    "",
    "Project Details:",
    data.get("details")
  ].join("\n"));

  window.location.href = `mailto:info@msquareprofessionals.com?subject=${subject}&body=${body}`;
  formNote.textContent = "Opening your email app with the inquiry details.";
});

const toggleBackToTop = () => {
  if (!backToTop) {
    return;
  }

  const scrollPosition = window.scrollY + window.innerHeight;
  const nearBottom = document.documentElement.scrollHeight - scrollPosition < 900;
  const hasScrolled = window.scrollY > 500;
  backToTop.classList.toggle("visible", nearBottom || hasScrolled);
};

window.addEventListener("scroll", toggleBackToTop, { passive: true });
window.addEventListener("resize", toggleBackToTop);

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

toggleBackToTop();
