// Navigation functionality for Eden Consultants website

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    highlightActivePage();
});

function initNavigation() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileNav.classList.toggle('active');

            // Toggle icon
            const openIcon = this.querySelector('.menu-open');
            const closeIcon = this.querySelector('.menu-close');

            if (mobileNav.classList.contains('active')) {
                openIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                openIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileNav.classList.remove('active');
                const openIcon = mobileMenuBtn.querySelector('.menu-open');
                const closeIcon = mobileMenuBtn.querySelector('.menu-close');
                openIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            });
        });
    }
}

function highlightActivePage() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a, .mobile-nav a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        // Check if this is the current page
        if (currentPage === linkPath ||
            (currentPage.endsWith('/') && linkPath === '/index.html') ||
            (currentPage === '/' && linkPath === '/index.html')) {
            link.classList.add('active');
        }
    });
}

// Generate header HTML
function generateHeader() {
    return `
    <header>
      <div class="header-container">
        <a href="index.html" class="logo">
          <div class="logo-icon">E</div>
          <div class="logo-text">EDEN <span>CONSULTANTS</span></div>
        </a>
        
        <nav>
          <a href="index.html">Home</a>
          <a href="services.html">Services</a>
          <a href="industries.html">Industries</a>
          <a href="process.html">Process</a>
          <a href="case-studies.html">Case Studies</a>
          <a href="about.html">About</a>
          <a href="resources.html">Resources</a>
          <a href="contact.html">Contact</a>
        </nav>
        
        <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Toggle menu">
          <svg class="menu-open" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="menu-close" style="display: none;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div id="mobile-nav" class="mobile-nav">
        <a href="index.html">Home</a>
        <a href="services.html">Services</a>
        <a href="industries.html">Industries</a>
        <a href="process.html">Process</a>
        <a href="case-studies.html">Case Studies</a>
        <a href="about.html">About</a>
        <a href="resources.html">Resources</a>
        <a href="contact.html">Contact</a>
      </div>
    </header>
  `;
}

// Generate footer HTML
function generateFooter() {
    const currentYear = new Date().getFullYear();

    return `
    <footer>
      <div class="footer-container">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="logo footer-brand">
              <div class="logo-icon" style="background-color: rgba(255, 255, 255, 0.1);">E</div>
              <div class="logo-text" style="color: white; margin-left: 0.5rem;">EDEN <span style="color: var(--color-slate-400); font-size: 0.875rem;">CONSULTANTS</span></div>
            </a>
            <p>Modern development consulting for commercial projects. Site selection, feasibility, and strategic coordination for shopping centers, QSR, and professional condos.</p>
            <div class="footer-contact">
              <a href="tel:#">Tel: (555) 000-0000</a>
              <a href="mailto:info@edenconsultants.com">info@edenconsultants.com</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Expertise</h3>
            <ul class="footer-links">
              <li><a href="services.html">Site Feasibility</a></li>
              <li><a href="services.html">Entitlements</a></li>
              <li><a href="industries.html">Medical Condos</a></li>
              <li><a href="industries.html">QSR / Restaurants</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Company</h3>
            <ul class="footer-links">
              <li><a href="about.html">About Us</a></li>
              <li><a href="process.html">Our Process</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="resources.html">Resources</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>© ${currentYear} Eden Consultants. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Helper function to insert header and footer if placeholders exist
function insertHeaderFooter() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = generateHeader();
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = generateFooter();
    }

    // Re-initialize navigation after inserting HTML
    initNavigation();
    highlightActivePage();
}

// Auto-insert if placeholders exist
document.addEventListener('DOMContentLoaded', insertHeaderFooter);
