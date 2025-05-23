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
  // Location tab will be inserted here
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
    title.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg) scale3d(1.13,1.13,1.02)`;
    title.style.textShadow = `${-x*24}px ${y*24}px 36px #00bfae55, 0 8px 32px rgba(0,0,0,0.28)`;
  });
  document.addEventListener("mouseleave", function() {
    title.style.transform = "";
    title.style.textShadow = "";
  });

  // Render service cards and insert location tab after AC Repair
  const grid = document.getElementById("services-grid");
  services.forEach((service, i) => {
    // Insert location tab after AC Repair (index 1)
    if (i === 2) {
      // Location tab as a double-height card
      const locCard = document.createElement("div");
      locCard.className = "service-card location-card";
      locCard.setAttribute("data-aos", "fade-up");
      locCard.setAttribute("data-aos-delay", 120);
      locCard.style.gridColumn = "span 2";
      locCard.innerHTML = `
        <h3 style="font-size:1.5rem;color:#00bfae;margin-bottom:1rem;">Our Location</h3>
        <div class="map-responsive" style="height:220px;min-height:120px;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114011.4929724082!2d80.80549644335936!3d26.74887030000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb040aae5a69%3A0xf83f45d208507f1f!2sCooling%20Centre!5e0!3m2!1sen!2sin!4v1747994965667!5m2!1sen!2sin"
            width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p style="margin-top:1rem;">
          <a href="https://goo.gl/maps/TVSGRKq" target="_blank" class="cta-btn">View on Google Maps</a>
        </p>
      `;
      grid.appendChild(locCard);
    }

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
