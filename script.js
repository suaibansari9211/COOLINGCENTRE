// List of services
const services = [
  {
    name: "AC Installation",
    key: "ac_installation",
    desc: "Certified installation of all AC types for homes and offices.",
    wa: "Hello, I want AC installation."
  },
  {
    name: "AC Repair",
    key: "ac_repair",
    desc: "Fast, reliable repairs for all brands and models.",
    wa: "Hello, I want AC repair."
  },
  {
    name: "AC Maintenance",
    key: "ac_maintenance",
    desc: "Annual and seasonal maintenance packages for efficient cooling.",
    wa: "Hello, I want AC maintenance."
  },
  {
    name: "AC Cleaning",
    key: "ac_cleaning",
    desc: "Deep cleaning of filters, coils, and ducts for healthy air.",
    wa: "Hello, I want AC cleaning."
  },
  {
    name: "HVAC Solutions",
    key: "hvac_solutions",
    desc: "Custom HVAC solutions for homes, offices, and industries.",
    wa: "Hello, I want to know about HVAC solutions."
  },
  {
    name: "Emergency AC Support",
    key: "emergency_ac_support",
    desc: "24/7 emergency AC repair and support.",
    wa: "Hello, I need emergency AC support."
  },
  {
    name: "Commercial AC Solutions",
    key: "commercial_ac_solutions",
    desc: "Design, installation, and maintenance for large-scale AC systems.",
    wa: "Hello, I want to discuss commercial AC solutions."
  }
];

// Supported image extensions
const extensions = ["jpg", "jpeg", "png"];

// Helper to check if image exists (async, so we use fallback if not found)
function getImagePath(key, callback) {
  let idx = 0;
  function tryNext() {
    if (idx >= extensions.length) {
      callback("images/default.jpg");
      return;
    }
    const path = `images/${key}.${extensions[idx]}`;
    const img = new window.Image();
    img.onload = () => callback(path);
    img.onerror = () => { idx++; tryNext(); };
    img.src = path;
  }
  tryNext();
}

// Render services
window.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("services-grid");
  services.forEach((service, i) => {
    getImagePath(service.key, (imgPath) => {
      const delay = 50 + i * 50;
      const waMsg = encodeURIComponent(service.wa);
      const card = document.createElement("div");
      card.className = "service-card";
      card.setAttribute("data-aos", "fade-up");
      card.setAttribute("data-aos-delay", delay);
      card.innerHTML = `
        <img src="${imgPath}" alt="${service.name}">
        <h3>${service.name}</h3>
        <p>${service.desc}</p>
        <a class="enquiry-btn" href="https://wa.me/918418944572?text=${waMsg}" target="_blank">Enquiry via WhatsApp</a>
      `;
      grid.appendChild(card);
      // Refresh AOS
      if (window.AOS) AOS.refresh();
    });
  });
});
