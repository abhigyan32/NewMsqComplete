const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-menu");
const leadForm = document.querySelector("#lead-form");
const formNote = document.querySelector("#form-note");
const brandLink = document.querySelector(".brand");

if (
  siteMenu &&
  !siteMenu.querySelector('a[href="index.html"], a[href="/"]')
) {
  const homeLink = document.createElement("a");
  homeLink.href = "index.html";
  homeLink.textContent = "Home";
  siteMenu.prepend(homeLink);
}

document.querySelectorAll(".legal-row").forEach((legalRow) => {
  legalRow.innerHTML = '<p class="legal-copy">&copy; 2026 MSquare Professionals Pvt. Ltd. All rights reserved.</p><div class="legal-links"><a href="contact.html">Privacy Policy</a><a href="contact.html">Terms of Service</a></div>';
});

const contactSection = document.querySelector(".contact-section");
if (contactSection) {
  const contactHero = document.createElement("section");
  contactHero.className = "section-band contact-hero";
  contactHero.innerHTML = '<div class="container"><div class="contact-intro"><p class="eyebrow">Let\'s Talk</p><h1>Scale Your Brand.<br><span>Start Here.</span></h1><p>Tell us about your growth goals. We respond within 24 hours - no boilerplate, no sales scripts. Just a focused conversation with someone who can actually help.</p><div class="contact-metrics"><div><strong class="orange">100+</strong><span>Platforms Built</span></div><div><strong class="blue">3</strong><span>Core Practice Areas</span></div><div><strong class="orange">98%</strong><span>Client Retention</span></div><div><strong class="blue">3.2x</strong><span>Average ROI Delivered</span></div></div></div></div>';
  contactSection.parentNode.insertBefore(contactHero, contactSection);
  const contactIntro = contactSection.querySelector(".contact-intro");
  if (contactIntro) {
    contactIntro.innerHTML = '<p class="eyebrow">Start a project</p><h1>Let\'s build your growth plan.</h1><p>Share a few details and our team will prepare a customised strategy scoped to your business before the first call.</p><div class="contact-highlights"><div><strong>Free consult</strong><span>No commitment, just a focused strategy conversation.</span></div><div><strong>24 hour reply</strong><span>A clear response with useful next steps.</span></div><div><strong>Custom scope</strong><span>No recycled pitch deck or generic package.</span></div></div>';
  }
}

const heroHeading = document.querySelector("main h1");
const heroHeadingParts = {
  "case-studies.html": ["Measurable work", " across campaigns, websites, and systems."],
  "contact.html": ["Scale Your Brand.", " Start Here."],
  "insights.html": ["Practical resources", " for teams building modern growth systems."],
  "services.html": ["Growth systems", " built around your next stage."]
};
const pageName = window.location.pathname.split("/").pop() || "index.html";
const headingParts = heroHeadingParts[pageName];
if (heroHeading && headingParts && !heroHeading.querySelector("span")) {
  heroHeading.innerHTML = `${headingParts[0]}<span>${headingParts[1]}</span>`;
}

if (!document.querySelector(".whatsapp-float")) {
  document.body.insertAdjacentHTML("beforeend", `<a class="whatsapp-float" href="https://api.whatsapp.com/send/?phone=919870202444&amp;text=Hi+MSquare%21+I+visited+your+website+and+would+like+to+know+more+about+your+services.&amp;type=phone_number&amp;app_absent=0" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
    <span class="whatsapp-label">Chat with us on WhatsApp</span>
    <span class="whatsapp-icon" aria-hidden="true">
      <svg viewBox="0 0 32 32" role="img">
        <path d="M16.04 4.4c-6.3 0-11.42 4.98-11.42 11.12 0 2.1.61 4.14 1.77 5.9l-1.88 5.52 5.8-1.82a11.67 11.67 0 0 0 5.73 1.5c6.3 0 11.42-4.98 11.42-11.1 0-6.14-5.12-11.12-11.42-11.12Zm0 20.33c-1.8 0-3.55-.51-5.05-1.48l-.4-.25-3.22 1.01 1.04-3.07-.27-.42a9 9 0 0 1-1.54-5c0-5.09 4.23-9.22 9.44-9.22 5.22 0 9.46 4.13 9.46 9.22 0 5.08-4.24 9.21-9.46 9.21Zm5.18-6.9c-.28-.14-1.67-.8-1.93-.89-.26-.09-.45-.14-.64.14-.19.27-.73.89-.9 1.07-.16.18-.33.2-.61.07-.28-.14-1.18-.42-2.25-1.35-.83-.72-1.39-1.62-1.55-1.89-.16-.28-.02-.43.12-.56.13-.12.28-.32.43-.48.14-.16.19-.27.28-.46.1-.18.05-.34-.02-.48-.07-.14-.64-1.51-.88-2.07-.23-.54-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.34-.26.28-1 1-1 2.42s1.03 2.8 1.17 2.99c.14.18 2.04 3.04 4.94 4.26.69.29 1.23.46 1.65.59.69.21 1.32.18 1.82.11.56-.08 1.67-.66 1.9-1.3.24-.64.24-1.19.17-1.3-.07-.12-.26-.19-.54-.33Z"></path>
      </svg>
    </span>
  </a>`);
}

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
  if (!brandLink.getAttribute("href")?.includes("#top")) {
    return;
  }

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

