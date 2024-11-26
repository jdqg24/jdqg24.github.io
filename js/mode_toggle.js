// Funcionalidad para alternar entre modo claro y oscuro
const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav a');
const arvLogo = document.getElementById('arv-logo');
const fbLogo = document.getElementById('fb-logo');
const igLogo = document.getElementById('ig-logo');
const waLogo = document.getElementById('wa-logo');

// Establecemos el modo por defecto según el valor del localStorage (si está disponible)
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
  header.classList.add('dark-mode');
  header.classList.remove('light-mode');
  navLinks.forEach(link => link.classList.add('dark-mode'));
  navLinks.forEach(link => link.classList.remove('light-mode'));
  arvLogo.src = 'res/Icons/arv-logo-dark.svg';
  fbLogo.src = 'res/Icons/facebook-dark.svg';
  igLogo.src = 'res/Icons/instagram-dark.svg';
  waLogo.src = 'res/Icons/whatsapp-dark.svg';
} else {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
  header.classList.add('light-mode');
  header.classList.remove('dark-mode');
  navLinks.forEach(link => link.classList.add('light-mode'));
  navLinks.forEach(link => link.classList.remove('dark-mode'));
  arvLogo.src = 'res/Icons/arv-logo-light.svg';
  fbLogo.src = 'res/Icons/facebook-light.svg';
  igLogo.src = 'res/Icons/instagram-light.svg';
  waLogo.src = 'res/Icons/whatsapp-light.svg';
}

modeToggleButton.addEventListener('click', () => {
  // Alternamos las clases de modo en el body, header, enlaces de navegación y lanzamientos
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  header.classList.toggle('dark-mode');
  header.classList.toggle('light-mode');
  navLinks.forEach(link => link.classList.toggle('dark-mode'));
  navLinks.forEach(link => link.classList.toggle('light-mode'));


  // Guardamos la preferencia en el localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    arvLogo.src = 'res/Icons/arv-logo-dark.svg';
    fbLogo.src = 'res/Icons/facebook-dark.svg';
    igLogo.src = 'res/Icons/instagram-dark.svg';
    waLogo.src = 'res/Icons/whatsapp-dark.svg';
  } else {
    localStorage.setItem('theme', 'light');
    arvLogo.src = 'res/Icons/arv-logo-light.svg';
    fbLogo.src = 'res/Icons/facebook-light.svg';
    igLogo.src = 'res/Icons/instagram-light.svg';
    waLogo.src = 'res/Icons/whatsapp-light.svg';
  }
});