// Funcionalidad para alternar entre modo claro y oscuro
const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav a');
const lanzamientos = document.querySelector('.lanzamientos');
const arvLogo = document.getElementById('arv-logo');

// Establecemos el modo por defecto según el valor del localStorage (si está disponible)
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
  header.classList.add('dark-mode');
  header.classList.remove('light-mode');
  navLinks.forEach(link => link.classList.add('dark-mode'));
  navLinks.forEach(link => link.classList.remove('light-mode'));
  lanzamientos.classList.add('dark-mode');
  lanzamientos.classList.remove('light-mode');
  arvLogo.src = 'res/Icons/arv-logo-dark.svg';
} else {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
  header.classList.add('light-mode');
  header.classList.remove('dark-mode');
  navLinks.forEach(link => link.classList.add('light-mode'));
  navLinks.forEach(link => link.classList.remove('dark-mode'));
  lanzamientos.classList.add('light-mode');
  lanzamientos.classList.remove('dark-mode');
  arvLogo.src = 'res/Icons/arv-logo-light.svg';
}

modeToggleButton.addEventListener('click', () => {
  // Alternamos las clases de modo en el body, header, enlaces de navegación y lanzamientos
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  header.classList.toggle('dark-mode');
  header.classList.toggle('light-mode');
  navLinks.forEach(link => link.classList.toggle('dark-mode'));
  navLinks.forEach(link => link.classList.toggle('light-mode'));
  lanzamientos.classList.toggle('dark-mode');
  lanzamientos.classList.toggle('light-mode');


  // Guardamos la preferencia en el localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    arvLogo.src = 'res/Icons/arv-logo-dark.svg';
  } else {
    localStorage.setItem('theme', 'light');
    arvLogo.src = 'res/Icons/arv-logo-light.svg';
  }
});