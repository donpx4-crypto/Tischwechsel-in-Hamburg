'use strict';
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
if (header && menuButton) {
  menuButton.hidden = false;
  header.classList.add('menu-ready');
  menuButton.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('menu-open')) {
      header.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}
const hero = document.querySelector('.hero');
const scene = document.querySelector('.hero-scene');
function configureParallax() {
  if (hero && scene) hero.classList.toggle('parallax-enabled', !motion.matches);
}
configureParallax();
let pendingFrame = false;
function updateParallax() {
  pendingFrame = false;
  if (!hero || !scene) return;
  const bounds = hero.getBoundingClientRect();
  const travel = Math.max(1, bounds.height - scene.offsetHeight);
  const progress = motion.matches ? 0 : Math.min(1, Math.max(0, -bounds.top / travel));
  document.documentElement.style.setProperty('--progress', progress.toFixed(3));
}
function requestParallax() {
  if (!pendingFrame && hero) {
    pendingFrame = true;
    window.requestAnimationFrame(updateParallax);
  }
}
window.addEventListener('scroll', requestParallax, { passive: true });
window.addEventListener('resize', requestParallax, { passive: true });
updateParallax();
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !motion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px 20px 0px' });
  revealElements.forEach(element => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('reveal-pending');
      observer.observe(element);
    }
  });
}
motion.addEventListener('change', () => {
  configureParallax();
  if (motion.matches) revealElements.forEach(element => element.classList.remove('reveal-pending'));
  updateParallax();
});
const form = document.querySelector('#ticket-form');
if (form) {
  const people = document.querySelector('#people');
  const packageField = document.querySelector('#package');
  const total = document.querySelector('#total');
  const status = document.querySelector('#form-status');
  const money = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
  function updateTotal() {
    const count = people.valueAsNumber;
    total.textContent = Number.isFinite(count) && count >= 4 && count <= 80
      ? `Beispielsumme für ${count} Personen: ${money.format(count * Number(packageField.value))}`
      : 'Bitte eine Gruppengröße zwischen 4 und 80 Personen eintragen.';
  }
  people.addEventListener('input', updateTotal);
  packageField.addEventListener('change', updateTotal);
  document.querySelectorAll('[data-package]').forEach(link => {
    link.addEventListener('click', () => {
      packageField.value = link.dataset.package;
      updateTotal();
      packageField.focus({ preventScroll: true });
    });
  });
  updateTotal();
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = 'Demo abgeschlossen. Es wurde keine Buchung erstellt und nichts versendet. Eure Eingaben wurden verworfen.';
    form.reset();
    updateTotal();
    status.focus();
  });
}
