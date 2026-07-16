/* Inselberg - site interactions */
(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Scroll header shadow
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu + accordion dropdown
  if (toggle && navLinks) {
    const dropdowns = navLinks.querySelectorAll('.nav-dropdown');
    const MOBILE_BP = 768;

    const closeMenu = () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('active');
      document.body.classList.remove('nav-open');
      dropdowns.forEach((d) => d.classList.remove('open'));
    };

    toggle.addEventListener('click', () => {
      const opening = !navLinks.classList.contains('open');
      navLinks.classList.toggle('open', opening);
      toggle.classList.toggle('active', opening);
      document.body.classList.toggle('nav-open', opening);
      if (!opening) dropdowns.forEach((d) => d.classList.remove('open'));
    });

    dropdowns.forEach((dropdown) => {
      const trigger = dropdown.querySelector(':scope > a');
      if (!trigger) return;
      trigger.addEventListener('click', (e) => {
        if (window.innerWidth > MOBILE_BP) return;
        e.preventDefault();
        const willOpen = !dropdown.classList.contains('open');
        dropdowns.forEach((d) => d.classList.remove('open'));
        if (willOpen) dropdown.classList.add('open');
      });
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        if (window.innerWidth <= MOBILE_BP) closeMenu();
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > MOBILE_BP) closeMenu();
    });
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach((a) => {
    if (a.dataset.page === path || (path === '' && a.dataset.page === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Solution tabs
  document.querySelectorAll('[data-tab-group]').forEach((group) => {
    const tabs = group.querySelectorAll('.solution-tab');
    const panels = group.querySelectorAll('[data-tab-panel]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const id = tab.dataset.tab;
        tabs.forEach((t) => t.classList.toggle('active', t === tab));
        panels.forEach((p) => {
          p.hidden = p.dataset.tabPanel !== id;
        });
      });
    });
  });

  // Contact form (Web3Forms)
  const form = document.getElementById('contact-form');
  if (form) {
    const statusEl = document.getElementById('contact-form-status');
    const btn = form.querySelector('button[type="submit"]');
    const btnDefault = btn ? btn.textContent : 'Send Message';

    const setStatus = (message, type) => {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.hidden = !message;
      statusEl.className = 'form-status' + (type ? ' form-status--' + type : '');
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!btn) return;

      const accessKey = window.INSELBERG_CONTACT && window.INSELBERG_CONTACT.web3formsAccessKey;
      if (!accessKey) {
        setStatus('Contact form is not configured yet. Please add your Web3Forms access key in js/contact-config.js.', 'error');
        return;
      }

      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim();
      const email = (formData.get('email') || '').toString().trim();
      const company = (formData.get('company') || '').toString().trim();
      const interest = (formData.get('interest') || '').toString().trim();
      const message = (formData.get('message') || '').toString().trim();

      const payload = {
        access_key: accessKey,
        name,
        email,
        botcheck: '',
        subject: interest
          ? 'Inselberg inquiry: ' + interest
          : 'Inselberg website contact form',
        company,
        interest,
        message: [
          message,
          company ? '\nInstitution: ' + company : '',
          interest ? '\nInterest: ' + interest : ''
        ].join('').trim()
      };

      btn.disabled = true;
      btn.textContent = 'Sending...';
      setStatus('', '');

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Unable to send message. Please try again.');
        }

        form.reset();
        setStatus('Thank you � your message was sent. We\'ll be in touch soon.', 'success');
        btn.textContent = 'Message Sent';
        setTimeout(() => {
          btn.textContent = btnDefault;
          btn.disabled = false;
        }, 4000);
      } catch (err) {
        setStatus(err.message || 'Something went wrong. Please email us directly or try again later.', 'error');
        btn.textContent = btnDefault;
        btn.disabled = false;
      }
    });
  }

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
