// theme.js
(function () {
  const body = document.body;
  const toggle = document.getElementById('themeToggle');

  // 1) Aplicar tema guardado al cargar
  const savedTheme = localStorage.getItem('theme'); // 'dark' o 'light'
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }

  // 2) Si existe el botón, activar el toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
})();
