// ==========================================
// 1. DATA STRUCTURE DEFINITIONS
// ==========================================

const universities = [
  {
    name: 'Medical University of Plovdiv',
    location: 'Plovdiv, Bulgaria',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'University of Medicine and Pharmacy',
    location: 'Bucharest, Romania',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Kyiv Medical University',
    location: 'Kyiv, Ukraine',
    image: 'https://images.unsplash.com/photo-1532619187602-9c14599c0100?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Penza State Medical University',
    location: 'Penza, Russia',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Kazakh National Medical University',
    location: 'Almaty, Kazakhstan',
    image: 'https://images.unsplash.com/photo-1512218168357-09d23593b3bf?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Charles University',
    location: 'Prague, Czech Republic',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
];

const features = [
  {
    title: 'Expert Counseling',
    description: 'One-to-one guidance from medical education specialists for your best application strategy.',
  },
  {
    title: 'Application Support',
    description: 'End-to-end application review and documentation management for every university.',
  },
  {
    title: 'Visa Assistance',
    description: 'Visa preparation and immigration support for stress-free travel planning.',
  },
  {
    title: 'Finance Planning',
    description: 'Scholarship reviews, fee transparency, and financial guidance for families.',
  },
];

const testimonials = [
  {
    quote: 'Unimed helped me secure admission in a top medical university with scholarship support. Their team guided me through every document and visa detail.',
    name: 'Anika Sharma',
    role: 'MBBS Student, Russia',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'The counseling was precise and very professional. I felt supported from application to arrival, and my departure was stress-free.',
    name: 'Rohan Patel',
    role: 'MBBS Student, Bulgaria',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'I appreciated how fast and clear the process was. The visa assistance made everything simple and my admission was confirmed quickly.',
    name: 'Sania Khan',
    role: 'MBBS Student, India',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'The application review was thorough and the university recommendations were spot on. I got admitted to my first-choice medical school.',
    name: 'Vikram Sethi',
    role: 'MBBS Student, Kazakhstan',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'I loved the personalized follow-up during the visa process. The team answered every question instantly and made the whole journey calm.',
    name: 'Meera Joshi',
    role: 'MBBS Student, Ukraine',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'Their financial planning advice helped me budget for tuition and living costs. I felt confident that nothing was overlooked.',
    name: 'Aarav Kapoor',
    role: 'MBBS Student, Romania',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'I wanted a university with strong clinical exposure, and the team presented excellent options. The scholarship support was a great bonus.',
    name: 'Priya Nair',
    role: 'MBBS Student, Czech Republic',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'Unimed took care of everything from admission letters to pre-departure guidance. I felt prepared and excited to travel.',
    name: 'Aditya Rao',
    role: 'MBBS Student, Bulgaria',
    avatar: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'The admissions package was detailed and easy to follow. I highly recommend Unimed for anyone seeking a smooth medical school journey.',
    name: 'Nisha Verma',
    role: 'MBBS Student, Russia',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: 'Friendly service, quick responses, and consistent updates made the whole process feel professional and supportive.',
    name: 'Sahil Gupta',
    role: 'MBBS Student, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
];

const stats = [
  { value: '5000+', label: 'Students Admitted' },
  { value: '45+', label: 'Partner Universities' },
  { value: '98%', label: 'Success Rate' },
  { value: '15+', label: 'Years Experience' },
];

// ==========================================
// 2. COMPONENT DOM CREATION FUNCTIONS
// ==========================================

function createUniversityCard(university) {
  const article = document.createElement('article');
  article.className = 'university-card';
  article.innerHTML = `
    <div class="university-image">
      <img src="${university.image}" alt="${university.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80'" />
    </div>
    <div class="university-details">
      <h3>${university.name}</h3>
      <p>${university.location}</p>
    </div>
  `;
  return article;
}

function createFeatureCard(feature) {
  const card = document.createElement('div');
  card.className = 'feature-card';
  card.innerHTML = `
    <div class="feature-icon" aria-hidden="true">${feature.title.charAt(0)}</div>
    <h3>${feature.title}</h3>
    <p>${feature.description}</p>
  `;
  return card;
}

function createStatBox(stat) {
  const box = document.createElement('div');
  box.className = 'stat-box';
  box.innerHTML = `
    <strong>${stat.value}</strong>
    <span>${stat.label}</span>
  `;
  return box;
}

function createTestimonialCard(testimonial) {
  const card = document.createElement('div');
  card.className = 'testimonial-card';
  card.innerHTML = `
    <p>${testimonial.quote}</p>
    <div class="testimonial-meta">
      <img src="${testimonial.avatar}" alt="${testimonial.name}" />
      <div>
        <strong>${testimonial.name}</strong>
        <span>${testimonial.role}</span>
      </div>
    </div>
  `;
  return card;
}

// ==========================================
// 3. UI RENDERING CORE ENGINE
// ==========================================

function renderCards() {
  const universitiesGrid = document.getElementById('universities-grid');
  if (universitiesGrid) {
    universitiesGrid.innerHTML = '';
    universities.forEach((university) => {
      universitiesGrid.appendChild(createUniversityCard(university));
    });
  }

  const featureGrid = document.getElementById('feature-grid');
  if (featureGrid) {
    featureGrid.innerHTML = '';
    features.forEach((feature) => {
      featureGrid.appendChild(createFeatureCard(feature));
    });
  }

  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid) {
    statsGrid.innerHTML = '';
    stats.forEach((stat) => {
      statsGrid.appendChild(createStatBox(stat));
    });
  }

  const testimonialGrid = document.getElementById('testimonial-grid');
  if (testimonialGrid) {
    testimonialGrid.innerHTML = '';
    testimonials.forEach((testimonial) => {
      testimonialGrid.appendChild(createTestimonialCard(testimonial));
    });
  }
}

// ==========================================
// 4. MODAL & SCROLL CONTROLLERS
// ==========================================

function toggleModal(open) {
  const modal = document.getElementById('modal');
  if (!modal) return;
  modal.classList.toggle('hidden', !open);
  modal.setAttribute('aria-hidden', String(!open));

  // Reset modal layout views back to clean inputs if launching fresh
  if (open) {
    const form = document.getElementById('modal-form');
    const thankYouBox = document.getElementById('thank-you-message');
    const errorBox = document.getElementById('error-message');
    
    if (form && thankYouBox && errorBox) {
      form.classList.remove('hidden');
      thankYouBox.classList.add('hidden');
      errorBox.classList.add('hidden'); 
      resetButton();
    }
  }
}

function scrollTestimonials(direction) {
  const grid = document.getElementById('testimonial-grid');
  if (!grid) return;
  const card = grid.querySelector('.testimonial-card');
  const cardWidth = card ? card.offsetWidth + 32 : 392;
  grid.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
}

function resetButton() {
  const form = document.getElementById('modal-form');
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  if (submitBtn) {
    submitBtn.textContent = 'Submit Request';
    submitBtn.disabled = false;
  }
}

// ==========================================
// 5. EVENT LISTENERS & BACKEND PLUMBING
// ==========================================

function attachEvents() {
  const openButtons = document.querySelectorAll('[data-open-modal]');
  openButtons.forEach((button) => {
    button.addEventListener('click', () => toggleModal(true));
  });

  const closeButton = document.querySelector('[data-close-modal]');
  if (closeButton) {
    closeButton.addEventListener('click', () => toggleModal(false));
  }

  const modalBackdrop = document.getElementById('modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (event) => {
      if (event.target === modalBackdrop) {
        toggleModal(false);
      }
    });
  }

  const scrollButton = document.querySelector('[data-scroll-target]');
  if (scrollButton) {
    scrollButton.addEventListener('click', () => {
      const target = document.getElementById('universities');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const prevButton = document.querySelector('[data-testimonial-prev]');
  const nextButton = document.querySelector('[data-testimonial-next]');
  if (prevButton) {
    prevButton.addEventListener('click', () => scrollTestimonials(-1));
  }
  if (nextButton) {
    nextButton.addEventListener('click', () => scrollTestimonials(1));
  }

  // INTEGRATION PIPELINE: FASTAPI EMAIL BACKEND SUBMISSION
  const form = document.getElementById('modal-form');
  const thankYouBox = document.getElementById('thank-you-message');
  const errorBox = document.getElementById('error-message');
  const retryBtn = document.getElementById('retry-btn');

  if (form && thankYouBox && errorBox) {
    
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
      }

      const payload = {
        name: form.elements['name'].value,
        email: form.elements['email'].value,
        phone: form.elements['phone'].value,
        message: form.elements['message'].value || 'No message provided.'
      };

      // NOTE: Swap 'http://localhost:8000/api/send-email' with your production URL 
      // (e.g., 'https://unimed-backend.onrender.com/api/send-email') once hosted live.
      fetch('http://localhost:8000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(async (response) => {
        const data = await response.json();
        if (response.ok && data.success) {
          form.classList.add('hidden');
          thankYouBox.classList.remove('hidden');
          form.reset();
        } else {
          console.error('Server side operational error:', data.detail);
          showErrorView();
        }
      })
      .catch((error) => {
        console.error('Network pipeline connection error:', error);
        showErrorView();
      });
    });

    function showErrorView() {
      form.classList.add('hidden');
      errorBox.classList.remove('hidden');
    }

    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        errorBox.classList.add('hidden');
        form.classList.remove('hidden');
        resetButton();
      });
    }
  }
}

// Initialize application on paint complete
window.addEventListener('DOMContentLoaded', () => {
  renderCards();
  attachEvents();
});