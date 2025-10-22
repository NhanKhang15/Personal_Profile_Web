// assets/main.js
(function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('navLinks');
  if (btn && nav){
    btn.addEventListener('click', ()=> {
      nav.classList.toggle('open');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Simple form handling on contact page
  const form = document.querySelector('form[data-validate="contact"]');
  if (form){
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = "Thanks! Your message was sent (demo).";
      status.className = "success";
      form.reset();
    });
  }
})();
