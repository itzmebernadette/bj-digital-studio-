// B&J Digital Studio — beginner-friendly project settings
// Replace the example links below with your real project URLs when available.

const projects = [
  {
    title: "Elegant Wedding Invitation",
    category: "invitation",
    categoryLabel: "Wedding website",
    description: "A romantic online invitation with event details and a personal touch.",
    style: "wedding",
    symbol: "♡",
    miniLabel: "TOGETHER WITH THEIR FAMILIES",
    previewTitle: "Mark & Carla",
    caption: "INVITE YOU TO CELEBRATE",
    url: "https://wedding-invitation-delta-gules-25.vercel.app/index.html"
  },
  {
    title: "Birthday Invitation",
    category: "invitation",
    categoryLabel: "Birthday website",
    description: "A bold, customizable invitation concept for birthdays at any age.",
    style: "birthday",
    symbol: "✳",
    miniLabel: "LET'S CELEBRATE",
    previewTitle: "It's My Day!",
    caption: "GOOD TIMES AHEAD",
    url: ""
  },
  {
    title: "Business Website Concept",
    category: "business",
    categoryLabel: "Business website",
    description: "A clean online home for a small business to introduce its services.",
    style: "business",
    symbol: "⌘",
    miniLabel: "YOUR BRAND, ONLINE",
    previewTitle: "The Good<br>Company",
    caption: "MADE FOR YOUR NEXT CHAPTER",
    url: ""
  },
  {
    title: "Digital ID & QR Attendance",
    category: "tools",
    categoryLabel: "Digital tool",
    description: "A student project concept for digital identification and QR-based attendance.",
    style: "tools",
    symbol: "◇",
    miniLabel: "SMARTER CHECK-IN",
    previewTitle: "Scan & Go",
    caption: "A DIGITAL EXPERIENCE",
    url: ""
  }
];

const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

// Build project cards from the project list above.
function renderProjects(filter = "all") {
  const visibleProjects = projects.filter(project =>
    filter === "all" || project.category === filter
  );

  projectGrid.innerHTML = visibleProjects.map(project => {
    const projectAction = project.url
      ? `<a class="project-link" href="${project.url}" target="_blank" rel="noreferrer" aria-label="View ${project.title}">↗</a>`
      : `<a class="project-link" href="#contact" aria-label="Ask about ${project.title}">↗</a>`;

    return `
      <article class="project-card">
        <div class="project-preview ${project.style}">
          <span class="preview-decoration decoration-left">${project.style === "birthday" ? "✦" : "✿"}</span>
          <div class="preview-window">
            <span class="window-label">${project.miniLabel}</span>
            <span class="window-symbol">${project.symbol}</span>
            <h3 class="window-title">${project.previewTitle}</h3>
            <span class="window-caption">${project.caption}</span>
          </div>
          <span class="preview-decoration decoration-right">${project.style === "tools" ? "✧" : "✳"}</span>
        </div>
        <div class="project-info">
          <div>
            <p class="project-category">${project.categoryLabel}</p>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
          ${projectAction}
        </div>
      </article>
    `;
  }).join("");
}

// Filter projects when a category button is clicked.
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

// Mobile navigation: open/close the menu.
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// Close the mobile menu after choosing a section.
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Automatically show the current year in the footer.
document.querySelector("#currentYear").textContent = new Date().getFullYear();

// Render all projects on first load.
renderProjects();

// CONTACT SETTINGS:
// In index.html, update the email link and Facebook link with your real details
// before sharing the website publicly.
