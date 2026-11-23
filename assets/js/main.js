/**
 * SAMANA G RAO - PORTFOLIO INTERACTIVITY SCRIPT
 * Features: Certificate Gallery & Modal Viewer, Category Filters,
 *           Smooth Scroll, Navbar Scroll Spy, Contact Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Certificate Data Store (Extracted directly from user's verified credentials)
  const certificatesData = [
    {
      id: 'cert-hackathon',
      title: '2nd Runner Up - Hackathon Premier League',
      issuer: 'SMVITM in association with CodeTroopers, Ignite AI, Ikya, IAHV & Shirva Police',
      date: 'Sept 16 - Oct 01, 2026',
      category: 'awards',
      badge: 'Hackathon Award',
      badgeClass: 'badge-amber',
      image: 'assets/images/cert-hackathon-runnerup.png',
      summary: 'Awarded 2nd Runner Up position in the flagship Hackathon Premier League for engineering and pitching "Ayuressence", an evidence-based Ayurvedic diagnostic and clinical assessment platform.',
      skills: ['Full Stack Web Development', 'Hackathon Pitching', 'Ayurvedic Healthcare System', 'Team Leadership']
    },
    {
      id: 'cert-beep-da',
      title: 'Data Analytics Proficiency & Skill Test',
      issuer: 'Beep Learning (Recognized by Shark Tank India & Google for Startups Accelerator)',
      date: 'September 17, 2026',
      category: 'data',
      badge: 'Industry Certified',
      badgeClass: 'badge-cyan',
      image: 'assets/images/cert-beep-data-analytics.png',
      summary: 'Demonstrated strong proficiency in core data analytics methodologies, dataset exploration, statistical processing, and passed comprehensive industry skill tests.',
      skills: ['Data Analytics', 'SQL Queries', 'Data Visualization', 'Statistical Analysis']
    },
    {
      id: 'cert-agentic-ai',
      title: 'Hands-on Workshop: Understanding Agentic AI',
      issuer: 'ExvisitX & Dept. of Artificial Intelligence & Data Science, SMVITM',
      date: 'September 09, 2026',
      category: 'ai',
      badge: 'Agentic AI',
      badgeClass: 'badge-purple',
      image: 'assets/images/cert-agentic-ai.png',
      summary: 'Hands-on training exploring autonomous AI agents, tool invocation architectures, multi-agent frameworks, and workflow automation in contemporary software engineering.',
      skills: ['Agentic AI Workflows', 'Autonomous Agents', 'Prompt Architecture', 'AI Engineering']
    },
    {
      id: 'cert-be10x-claude',
      title: 'AI Tools & Claude Mastery Workshop',
      issuer: 'be10x Education (Verified by Co-Founders Aditya Goenka & Aditya Kachave)',
      date: 'October 25, 2026',
      category: 'ai',
      badge: 'Verified Completion',
      badgeClass: 'badge-emerald',
      image: 'assets/images/cert-be10x-claude.png',
      summary: 'Mastered Claude & generative AI tools for accelerated presentations, rapid data analysis in under 30 minutes, and rapid code development & debugging.',
      skills: ['Claude 3.5 Sonnet / Opus', 'AI-Assisted Debugging', 'Rapid Prototyping', 'Prompt Engineering']
    },
    {
      id: 'cert-be10x-chatgpt',
      title: 'AI Tools & ChatGPT Workshop',
      issuer: 'be10x Education',
      date: 'November 15, 2025',
      category: 'ai',
      badge: 'Verified Completion',
      badgeClass: 'badge-emerald',
      image: 'assets/images/cert-be10x-chatgpt.png',
      summary: 'Practical certification in generative AI capabilities: building presentations in <5 mins, data insights in <30 mins, and interactive code debugging in <10 mins.',
      skills: ['ChatGPT Workflows', 'Generative AI Productivity', 'Code Generation', 'Data Summarization']
    },
    {
      id: 'doc-istudio-internship',
      title: 'Artificial Intelligence Internship Offer Letter',
      issuer: 'iStudio Technologies (Pune / Remote)',
      date: 'Offer: Feb 26, 2026 | Joining: March 05, 2026',
      category: 'awards',
      badge: 'Internship Offer',
      badgeClass: 'badge-cyan',
      image: 'assets/images/doc-istudio-internship.png',
      summary: 'Selected for competitive AI Internship following distinguished performance in the Internship Common Aptitude Test (iCAT), covering applied machine learning and practical AI solutions.',
      skills: ['Applied AI', 'Aptitude & Problem Solving', 'Software Lifecycle', 'Professional Development']
    },
    {
      id: 'cert-ideathon',
      title: 'IDEATHON - 2025 (Version 4.0)',
      issuer: 'Indian Society for Technical Education (ISTE) & CIT, Gubbi-Tumakuru',
      date: 'December 05, 2025',
      category: 'awards',
      badge: 'State Level Ideathon',
      badgeClass: 'badge-amber',
      image: 'assets/images/cert-ideathon-2025.png',
      summary: 'Represented SMVITM at the state-level ISTE Ideathon 2025, ideating, defending, and presenting technology-driven solutions for real-world systemic challenges.',
      skills: ['Product Ideation', 'Problem Validation', 'Pitch Presentation', 'Technical Feasibility']
    },
    {
      id: 'cert-cybershe',
      title: 'CyberShe: Empowering Women in Cyber Security',
      issuer: 'IEEE Student Branch & IEEE Women in Engineering (WIE) Bangalore Section',
      date: 'December 19, 2025',
      category: 'workshops',
      badge: 'IEEE WIE Workshop',
      badgeClass: 'badge-purple',
      image: 'assets/images/cert-cybershe-ieee.png',
      summary: 'Comprehensive hands-on immersion in web security fundamentals, cryptographic practices, threat surfaces, and empowering women leaders in cybersecurity engineering.',
      skills: ['Cyber Security Basics', 'Information Security', 'Network Safety', 'IEEE Community']
    },
    {
      id: 'cert-radio',
      title: 'Community Radio Program: "ವಿಜ್ಞಾನ ವಿಸ್ಮಯ" (Science Wonder)',
      issuer: 'NSS-YRC Unit & Women Empowerment Cell, SMVITM',
      date: 'November 05, 2025',
      category: 'workshops',
      badge: 'Community & Science',
      badgeClass: 'badge-emerald',
      image: 'assets/images/cert-community-radio.png',
      summary: 'Actively contributed and presented in the community radio outreach broadcast translating complex scientific phenomena for local awareness and youth inspiration.',
      skills: ['Science Communication', 'Public Speaking', 'Community Outreach', 'Social Impact']
    },
    {
      id: 'cert-vbyld',
      title: 'Viksit Bharat Young Leaders Dialogue (VBYLD) 2026',
      issuer: 'Ministry of Youth Affairs & Sports, Government of India (MYBharat)',
      date: 'October 08, 2025',
      category: 'workshops',
      badge: 'National Quiz',
      badgeClass: 'badge-cyan',
      image: 'assets/images/cert-vbyld-quiz.png',
      summary: 'Participated in the nationwide youth dialogue initiative evaluating national development vision, technology adoption, and youth leadership under the MYBharat framework.',
      skills: ['National Governance', 'Youth Leadership', 'Strategic Vision', 'Innovation Thinking']
    },
    {
      id: 'cert-entrep-quiz',
      title: 'National Entrepreneurship Day 2025 Quiz',
      issuer: "Institution's Innovation Council (IIC - Ministry of Education Initiative), SMVITM",
      date: 'November 09, 2025',
      category: 'awards',
      badge: 'Innovation & Startup',
      badgeClass: 'badge-amber',
      image: 'assets/images/cert-entrepreneurship-quiz.png',
      summary: 'Tested on startup fundamentals, business model canvas, venture financing, and entrepreneurial acumen conducted by the Institution Innovation Council.',
      skills: ['Entrepreneurial Mindset', 'Business Models', 'Startup Fundamentals', 'Innovation Ecosystem']
    }
  ];

  // 2. Render Certificates to DOM
  const certGrid = document.getElementById('certGrid');
  let currentFilteredList = [...certificatesData];
  let currentModalIndex = 0;

  function renderCertificates(filter = 'all') {
    if (!certGrid) return;
    certGrid.innerHTML = '';

    currentFilteredList = filter === 'all' 
      ? certificatesData 
      : certificatesData.filter(c => c.category === filter);

    currentFilteredList.forEach((cert, index) => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.setAttribute('data-id', cert.id);
      card.setAttribute('data-index', index);

      card.innerHTML = `
        <div class="cert-thumb-container">
          <img src="${cert.image}" alt="${cert.title}" class="cert-thumb" loading="lazy">
          <div class="cert-thumb-overlay">
            <span><i class="fas fa-search-plus"></i> View Certificate</span>
          </div>
        </div>
        <div class="cert-body">
          <div>
            <div class="cert-badge-row">
              <span class="badge ${cert.badgeClass}">${cert.badge}</span>
              <span class="cert-date">${cert.date}</span>
            </div>
            <h4 class="cert-title">${cert.title}</h4>
            <p class="cert-issuer"><i class="fas fa-university"></i> ${cert.issuer}</p>
          </div>
          <div style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.75rem;">
            <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">${cert.summary.substring(0, 95)}...</p>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openCertificateModal(index);
      });

      certGrid.appendChild(card);
    });
  }

  // Initial Render
  renderCertificates();

  // 3. Category Filter Buttons
  const filterBtns = document.querySelectorAll('.cert-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderCertificates(filterValue);
    });
  });

  // 4. Modal Viewer Logic
  const modalOverlay = document.getElementById('certModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalIssuer = document.getElementById('modalIssuer');
  const modalImage = document.getElementById('modalImage');
  const modalDate = document.getElementById('modalDate');
  const modalBadge = document.getElementById('modalBadge');
  const modalSummary = document.getElementById('modalSummary');
  const modalSkills = document.getElementById('modalSkills');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');

  function openCertificateModal(index) {
    if (!currentFilteredList[index]) return;
    currentModalIndex = index;
    const cert = currentFilteredList[index];

    modalTitle.textContent = cert.title;
    modalIssuer.textContent = cert.issuer;
    modalImage.src = cert.image;
    modalImage.alt = cert.title;
    modalDate.textContent = cert.date;
    modalBadge.textContent = cert.badge;
    modalBadge.className = `badge ${cert.badgeClass}`;
    modalSummary.textContent = cert.summary;

    modalSkills.innerHTML = cert.skills.map(s => `<span class="tech-pill">${s}</span>`).join(' ');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertificateModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function navigateModal(direction) {
    let nextIndex = currentModalIndex + direction;
    if (nextIndex < 0) nextIndex = currentFilteredList.length - 1;
    if (nextIndex >= currentFilteredList.length) nextIndex = 0;
    openCertificateModal(nextIndex);
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCertificateModal);
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => navigateModal(-1));
  if (modalNextBtn) modalNextBtn.addEventListener('click', () => navigateModal(1));

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeCertificateModal();
    });
  }

  // Keyboard navigation for modal
  document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeCertificateModal();
    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
  });

  // 5. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }

  // 6. Navbar Scroll Effect & Scrollspy
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.background = 'rgba(7, 11, 20, 0.95)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
    } else {
      navbar.style.background = 'rgba(7, 11, 20, 0.8)';
      navbar.style.boxShadow = 'none';
    }

    let currentSection = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // 7. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value;

      // Construct mailto link
      const mailtoUrl = `mailto:samanagrao123@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\nMessage:\n' + message)}`;
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Opening Email Client...';
      submitBtn.classList.remove('btn-primary');
      submitBtn.classList.add('btn-emerald');

      window.location.href = mailtoUrl;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.classList.remove('btn-emerald');
        submitBtn.classList.add('btn-primary');
        contactForm.reset();
      }, 3000);
    });
  }
});
