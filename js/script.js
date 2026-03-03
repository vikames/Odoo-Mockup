// =====================
// FEATURE DATA
// All content lives here - edit text, badges, bullets in one place
// Layout is handled separately in the HTML
// =====================
const features = {
  1: {
    badge: "Tools",
    badgeClass: "bg-warning text-white",
    title: "We build for designers and developers",
    text: "Get components and examples, including tons of variables that will help you grow your business.",
  },
  2: {
    badge: "Features",
    badgeClass: "bg-teal text-white",
    title: "Get components and examples",
    text: "Get components and examples, including tons of variables that will help you grow your business.",
    bullets: ["Perfect for modern startups", "Fully customizable and scalable"],
  },
  3: {
    badge: "Technology",
    badgeClass: "bg-primary text-white",
    title: "We use the latest technologies on the market",
    text: "Get components and examples, including tons of variables that will help you grow your business.",
    link: { text: "See case studies", href: "#" },
  },
  4: {
    badge: "Easy to install",
    badgeClass: "bg-warning text-white",
    title: "Download, install and run.",
    text: "Get components and examples, including tons of variables that will help you grow your business.",
    appButtons: true,
  },
};

// =====================
// RENDER FEATURE TEXT
// Reusable function - reads from features{} above and injects
// the badge, title, text, optional bullets, link, and app buttons
// into the matching feature{id}-text div in the HTML
// =====================
function renderFeatureText(id) {
  const f = features[id];
  const el = document.getElementById(`feature${id}-text`);
  if (!el) return;

  // Optional bullets (used in feature 2)
  const bullets = f.bullets
    ? f.bullets.map(b => `<p class="text-teal mb-1">✔ ${b}</p>`).join("")
    : "";

  // Optional "See case studies" style link (used in feature 3)
  const link = f.link
    ? `<a href="${f.link.href}" class="text-primary border-bottom border-primary text-decoration-none">${f.link.text}</a>`
    : "";

  // Optional app store buttons (used in feature 4)
  // Custom border-radius: 0 12px 0 12px gives the unique corner style from the mockup
  const appButtons = f.appButtons
    ? `<div class="d-flex gap-3 mt-4">
        <a href="#" class="btn text-white d-flex align-items-center gap-2 px-3 py-2" style="background-color:#000; border-radius: 0 12px 0 12px;">
          <i class="bi bi-apple" style="font-size:28px; line-height:1;"></i>
          <div class="text-start lh-sm">
            <div style="font-size:10px;">Download on the</div>
            <div class="fw-bold">App Store</div>
          </div>
        </a>
        <a href="#" class="btn text-white d-flex align-items-center gap-2 px-3 py-2" style="background-color:#000; border-radius: 0 12px 0 12px;">
          <i class="bi bi-google-play" style="font-size:28px; line-height:1;"></i>
          <div class="text-start lh-sm">
            <div style="font-size:10px;">Download on the</div>
            <div class="fw-bold">Play Store</div>
          </div>
        </a>
      </div>`
    : "";

  el.innerHTML = `
    <span class="badge ${f.badgeClass} mb-2" style="${f.badgeStyle || ''}">${f.badge}</span>
    <h2 class="fw-bold mb-4">${f.title}</h2>
    <p class="text-muted">${f.text}</p>
    ${bullets}
    ${link}
    ${appButtons}
  `;
}

// =====================
// PROJECT LIST (Feature 1)
// Generates the progress bar list dynamically from this array
// so I can add/edit/remove projects without touching the HTML
// =====================
const projects = [
  { name: "Create the new logo",      time: "3:20", progress: 80 },
  { name: "Set up the color palette", time: "5:10", progress: 55 },
  { name: "Wireframe and prototype",  time: "6:50", progress: 30 },
];

const projectList = document.getElementById("project-list");
projects.forEach(item => {
  projectList.innerHTML += `
    <div class="d-flex justify-content-between">
      <p class="small mb-1">${item.name}</p>
      <span class="small text-muted">${item.time}</span>
    </div>
    <div class="progress mb-5" style="height: 4px;">
      <div class="progress-bar bg-warning" style="width: ${item.progress}%;"></div>
    </div>
  `;
});

// Render all four feature text blocks
renderFeatureText(1);
renderFeatureText(2);
renderFeatureText(3);
renderFeatureText(4);

// =====================
// FAQ DATA
// Two columns of questions - edit content here, not in the HTML
// Left and right are separate arrays so I control which goes where
// =====================
const faqsLeft = [
  { icon: "bi-file-text", question: "Which license do I need?",            answer: "Lorem ipsum dolor sit amet." },
  { icon: "bi-lock",      question: "How do I get access to my database?",  answer: "Lorem ipsum dolor sit amet." },
  { icon: "bi-bag",       question: "How do I see previous orders?",        answer: "Lorem ipsum dolor sit amet." },
];

const faqsRight = [
  { icon: "bi-file-text", question: "Which license do I need?",            answer: "Lorem ipsum dolor sit amet." },
  { icon: "bi-lock",      question: "How do I get access to my database?",  answer: "Lorem ipsum dolor sit amet." },
  { icon: "bi-bag",       question: "How do I see previous orders?",        answer: "Lorem ipsum dolor sit amet." },
];

// =====================
// FAQ META
// Header text and CTA buttons below the accordion
// =====================
const faqMeta = {
  title: "Helpful answers",
  subtitle: "Start building fast, beautiful and modern looking websites in no time.",
  cta: {
    text: "I want to start a new project.",
    btnPrimary:   { label: "Buy now →", href: "#" },
    btnSecondary: { label: "Learn more", href: "#" },
  }
};

// =====================
// RENDER FAQ COLUMN
// Takes a data array and a container ID, builds the accordion HTML
// Uses Bootstrap's collapse component for open/close behaviour
// The plus icon rotates to an X via CSS when open (see style.scss)
// =====================
function renderFaqColumn(faqs, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  faqs.forEach((faq, i) => {
    const id = `${containerId}-item${i}`;
    container.innerHTML += `
      <div class="accordion-item border rounded-3 mb-3">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed d-flex justify-content-between"
                  type="button" data-bs-toggle="collapse" data-bs-target="#${id}">
            <span><i class="bi ${faq.icon} me-2"></i> ${faq.question}</span>
            <i class="bi bi-plus-lg ms-auto faq-icon"></i>
          </button>
        </h2>
        <div id="${id}" class="accordion-collapse collapse">
          <div class="accordion-body text-muted">${faq.answer}</div>
        </div>
      </div>
    `;
  });
}

// Inject the header and CTA
document.getElementById("faq-header").innerHTML = `
  <h2 class="fw-bold text-center mb-2">${faqMeta.title}</h2>
  <p class="text-muted text-center mb-5">${faqMeta.subtitle}</p>
`;

document.getElementById("faq-cta").innerHTML = `
  <div class="text-center mt-5 pt-3">
    <p class="fw-semibold mb-3">${faqMeta.cta.text}</p>
    <a href="${faqMeta.cta.btnPrimary.href}" class="btn btn-primary text-white me-3">${faqMeta.cta.btnPrimary.label}</a>
    <a href="${faqMeta.cta.btnSecondary.href}" class="btn btn-link text-dark text-decoration-none">${faqMeta.cta.btnSecondary.label}</a>
  </div>
`;

// Render both FAQ columns
renderFaqColumn(faqsLeft, "faqLeft");
renderFaqColumn(faqsRight, "faqRight");