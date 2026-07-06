// BIANCO CARRARA — shared site behavior
document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-main');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Products dropdown — tap to open on touch/mobile widths
  var productsItem = document.querySelector('.nav-item-products');
  if (productsItem) {
    var trigger = productsItem.querySelector('.nav-link');
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        productsItem.classList.toggle('open');
      }
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal, .vein-divider');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // Contact form — placeholder submit handling (wire up to a real endpoint later)
  var form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var original = btn.textContent;
      btn.textContent = 'Sent — thank you';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }
});
