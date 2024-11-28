const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav a');
const arvLogo = document.getElementById('arv-logo');
const fbLogo = document.getElementById('fb-logo');
const igLogo = document.getElementById('ig-logo');
const waLogo = document.getElementById('wa-logo');

// Función para aplicar el tema
function applyTheme(theme) {
  if (theme === 'dark') {
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
}

// Verificar si hay un tema guardado en localStorage
const savedTheme = localStorage.getItem('theme');

// Si hay un tema guardado, se aplica; si no, se verifica la preferencia del sistema
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDarkMode ? 'dark' : 'light');
}

// Alterna el tema cuando el usuario haga clic en el botón de alternancia
modeToggleButton.addEventListener('click', () => {
  // Alternamos el tema
  const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Aplica el nuevo tema
  applyTheme(newTheme);

  // Guarda la preferencia del tema en localStorage
  localStorage.setItem('theme', newTheme);
});
