document.addEventListener('DOMContentLoaded', () => {
  applySavedDarkMode();
});

const body = document.getElementById('body');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const toggleDarkMode = () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    lightIcon.style.display = '';
    darkIcon.style.display = 'none';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
  }
};

const applySavedDarkMode = () => {
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    lightIcon.style.display = '';
    darkIcon.style.display = 'none';
  } else {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
  }
};
