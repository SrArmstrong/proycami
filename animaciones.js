document.addEventListener('DOMContentLoaded', function() {
  // Configuración para el efecto de aparición
  const scrollReveal = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
  });
  
  // Aplicar a todas las secciones
  scrollReveal.reveal('section', {
    interval: 200
  });
  
  // Crear header para scroll
  const heroSection = document.querySelector('.hero');
  const headerClone = heroSection.cloneNode(true);
  headerClone.classList.add('header-scroll');
  document.body.appendChild(headerClone);
  
  // Observador de intersección para el header
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        headerClone.classList.add('visible');
      } else {
        headerClone.classList.remove('visible');
      }
    });
  }, {threshold: 0.1});
  
  observer.observe(heroSection);
  
  // Observador para las secciones
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {threshold: 0.1});
  
  document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
  });
});