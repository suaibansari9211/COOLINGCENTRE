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

const extensions = ["jpg", "jpeg", "png"];

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

window.addEventListener("DOMContentLoaded", () => {
  // 3D Interactive Title
  const title = document.getElementById("main-title");
  document.addEventListener("mousemove", function(e) {
    if (window.innerWidth < 700) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    title.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg) scale3d(1.18,1.18,1.04)`;
    title.style.textShadow = `${-x*24}px ${y*24}px 36px #00bfae55, 0 12px 44px rgba(0,0,0,0.34)`;
  });
  document.addEventListener("mouseleave", function() {
    title.style.transform = "";
    title.style.textShadow = "";
  });

  // Render service cards
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
      // 3D hover effect and image scale
      card.addEventListener("mousemove", function(e) {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `scale3d(1.10,1.10,1.03) rotateY(${x*14}deg) rotateX(${-y*14}deg)`;
        card.querySelector("img").style.transform = `scale(1.25) rotateZ(${x*8}deg)`;
      });
      card.addEventListener("mouseleave", function() {
        card.style.transform = "";
        card.querySelector("img").style.transform = "";
      });
      grid.appendChild(card);
      if (window.AOS) AOS.refresh();
    });
  });
});
