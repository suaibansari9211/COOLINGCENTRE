<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cooling Centre | AC & Cooling Services</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <!-- AOS Animate On Scroll CSS -->
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  <!-- Bootstrap Icons for contact icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
</head>
<body>
  <header>
    <div class="hero-bg"></div>
    <div class="hero-content" data-aos="fade-down">
      <h1>Cooling Centre</h1>
      <p>Your trusted AC installation, repair, and cooling solution provider.</p>
      <a href="#contact" class="cta-btn">Contact Us Now</a>
    </div>
  </header>

  <main>
    <!-- Services Section with Dynamic Images -->
    <section id="services">
      <h2 data-aos="fade-up">Our Services</h2>
      <div class="services-grid">
        <?php
        // List of services and their details
        $services = [
          [
            'name' => 'AC Installation',
            'key' => 'ac_installation',
            'desc' => 'Certified installation of all AC types for homes and offices.',
            'wa'   => 'Hello, I want AC installation.'
          ],
          [
            'name' => 'AC Repair',
            'key' => 'ac_repair',
            'desc' => 'Fast, reliable repairs for all brands and models.',
            'wa'   => 'Hello, I want AC repair.'
          ],
          [
            'name' => 'AC Maintenance',
            'key' => 'ac_maintenance',
            'desc' => 'Annual and seasonal maintenance packages for efficient cooling.',
            'wa'   => 'Hello, I want AC maintenance.'
          ],
          [
            'name' => 'AC Cleaning',
            'key' => 'ac_cleaning',
            'desc' => 'Deep cleaning of filters, coils, and ducts for healthy air.',
            'wa'   => 'Hello, I want AC cleaning.'
          ],
          [
            'name' => 'HVAC Solutions',
            'key' => 'hvac_solutions',
            'desc' => 'Custom HVAC solutions for homes, offices, and industries.',
            'wa'   => 'Hello, I want to know about HVAC solutions.'
          ],
          [
            'name' => 'Emergency AC Support',
            'key' => 'emergency_ac_support',
            'desc' => '24/7 emergency AC repair and support.',
            'wa'   => 'Hello, I need emergency AC support.'
          ],
          [
            'name' => 'Commercial AC Solutions',
            'key' => 'commercial_ac_solutions',
            'desc' => 'Design, installation, and maintenance for large-scale AC systems.',
            'wa'   => 'Hello, I want to discuss commercial AC solutions.'
          ]
        ];

        // Supported image extensions
        $extensions = ['jpg', 'jpeg', 'png'];

        foreach ($services as $i => $service) {
          $imgPath = '';
          foreach ($extensions as $ext) {
            $testPath = "images/{$service['key']}.$ext";
            if (file_exists($testPath)) {
              $imgPath = $testPath;
              break;
            }
          }
          // Fallback image if not found
          if (!$imgPath) {
            $imgPath = "images/default.jpg";
          }
          $delay = 50 + $i * 50;
          $waMsg = urlencode($service['wa']);
          echo <<<HTML
          <div class="service-card" data-aos="fade-up" data-aos-delay="{$delay}">
            <img src="{$imgPath}" alt="{$service['name']}">
            <h3>{$service['name']}</h3>
            <p>{$service['desc']}</p>
            <a class="enquiry-btn" href="https://wa.me/918418944572?text={$waMsg}" target="_blank">Enquiry via WhatsApp</a>
          </div>
HTML;
        }
        ?>
      </div>
    </section>

    <!-- Google Maps Section -->
    <section id="location">
      <h2 data-aos="fade-up">Our Location</h2>
      <div class="map-responsive" data-aos="zoom-in">
        <!-- Replace with your real Google Maps embed link -->
        <iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" width="100%" height="320" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <p style="text-align:center; margin-top:1rem;">
        <a href="https://goo.gl/maps/yourbusinesslink" target="_blank" class="cta-btn">View on Google Maps</a>
      </p>
    </section>

    <!-- Reviews Section -->
    <section id="reviews">
      <h2 data-aos="fade-up">Customer Reviews</h2>
      <div class="reviews-grid">
        <div class="review-card" data-aos="fade-right" data-aos-delay="100">
          <p>⭐⭐⭐⭐⭐</p>
          <p>"Excellent service and quick installation!"</p>
          <span>- Priya Sharma</span>
        </div>
        <div class="review-card" data-aos="fade-right" data-aos-delay="200">
          <p>⭐⭐⭐⭐⭐</p>
          <p>"Professional and affordable."</p>
          <span>- Rahul Verma</span>
        </div>
      </div>
      <p style="text-align:center; margin-top:1rem;">
        <a href="https://www.google.com/search?q=Cooling+Centre+reviews" target="_blank" class="cta-btn">See More Reviews on Google</a>
      </p>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <h2 data-aos="fade-up">Contact Us</h2>
      <div class="contact-card" data-aos="zoom-in">
        <p><b>Phone:</b> <a href="tel:918418944572">+91 84189 44572</a></p>
        <p><b>Email:</b> <a href="mailto:mdzubair7752@gmail.com">mdzubair7752@gmail.com</a></p>
        <div class="contact-icons">
          <a href="https://wa.me/918418944572" target="_blank" title="WhatsApp"><i class="bi bi-whatsapp"></i></a>
          <a href="tel:918418944572" title="Call"><i class="bi bi-telephone-fill"></i></a>
          <a href="mailto:mdzubair7752@gmail.com" title="Email"><i class="bi bi-envelope-fill"></i></a>
        </div>
        <p style="margin-top:1rem;"><b>Available on WhatsApp & Call for instant response!</b></p>
      </div>
    </section>
  </main>

  <footer>
    &copy; 2025 Cooling Centre | All rights reserved.
  </footer>

  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script src="script.js"></script>
  <script>
    AOS.init({ duration: 900, once: true });
  </script>
</body>
</html>
