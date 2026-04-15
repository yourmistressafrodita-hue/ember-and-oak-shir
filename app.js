/* ============================================================
   EMBER & OAK — App JavaScript
   SPA routing, menu tabs, hamburger menu, form, scroll animations
   ============================================================ */

(function () {
  'use strict';

  // ---- DOM References ----
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-nav]');
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuCategories = document.querySelectorAll('.menu-category');
  const reservationForm = document.getElementById('reservationForm');
  const reservationConfirmation = document.getElementById('reservationConfirmation');

  // ---- SPA Routing ----
  function getHash() {
    const hash = window.location.hash.replace('#', '') || 'home';
    return hash;
  }

  function navigateTo(pageId) {
    // Hide all pages
    pages.forEach(p => {
      p.classList.remove('page--active', 'page--visible');
    });

    // Show target page
    const target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.add('page--active');
      // Trigger transition after a tick
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          target.classList.add('page--visible');
        });
      });
    }

    // Update nav links
    navLinks.forEach(link => {
      const isActive = link.getAttribute('data-nav') === pageId;
      link.classList.toggle('nav__link--active', isActive);
      link.classList.toggle('nav__mobile-link--active', isActive);
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Close mobile menu if open
    closeMobileMenu();

    // Re-observe fade-in elements
    observeFadeIns();

    // Reset reservation form when navigating away
    if (pageId !== 'reservations') {
      resetReservationForm();
    }
  }

  // Listen for hash changes
  window.addEventListener('hashchange', () => {
    navigateTo(getHash());
  });

  // Handle nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('data-nav');
      if (target) {
        e.preventDefault();
        window.location.hash = target;
      }
    });
  });

  // Handle CTA buttons and footer links that use href="#..."
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    if (!link.hasAttribute('data-nav')) {
      link.addEventListener('click', (e) => {
        const hash = link.getAttribute('href').replace('#', '');
        if (hash && document.getElementById('page-' + hash)) {
          e.preventDefault();
          window.location.hash = hash;
        }
      });
    }
  });

  // ---- Mobile Menu ----
  function closeMobileMenu() {
    hamburger.classList.remove('nav__hamburger--open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('nav__mobile-menu--open');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    hamburger.classList.add('nav__hamburger--open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('nav__mobile-menu--open');
    document.body.style.overflow = 'hidden';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('nav__hamburger--open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // ---- Nav Scroll Effect ----
  let lastScrollY = 0;
  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ---- Menu Tabs ----
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-tab');

      // Update tab states
      menuTabs.forEach(t => t.classList.remove('menu-tab--active'));
      tab.classList.add('menu-tab--active');

      // Show category
      menuCategories.forEach(c => c.classList.remove('menu-category--active'));
      const target = document.getElementById('cat-' + category);
      if (target) {
        target.classList.add('menu-category--active');
      }
    });
  });

  // ---- Reservation Form ----
  // Set min date to today
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.value = today;
  }

  function resetReservationForm() {
    if (reservationForm) {
      reservationForm.style.display = '';
      reservationForm.reset();
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
      }
    }
    if (reservationConfirmation) {
      reservationConfirmation.classList.remove('reservation-confirmation--show');
    }
  }

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Hide form, show confirmation
      reservationForm.style.display = 'none';
      reservationConfirmation.classList.add('reservation-confirmation--show');

      // Scroll confirmation into view
      reservationConfirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // ---- Scroll Fade-In Animations ----
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in--visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  function observeFadeIns() {
    document.querySelectorAll('.fade-in:not(.fade-in--visible)').forEach(el => {
      fadeObserver.observe(el);
    });
  }

  // ---- Initialize ----
  navigateTo(getHash());
  handleScroll();

})();
