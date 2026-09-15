const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });


// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.links a');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      nav.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
