const btn = document.getElementById('themeBtn');
const img = document.getElementById('themeImg');

btn.addEventListener('click', () => {
  if (btn.textContent === 'Dark Theme') {
    btn.textContent = 'Light Theme';
    img.src = '../3/pages/foto1.jpg';
  } else {
    btn.textContent = 'Dark Theme';
    img.src = '../3/pages/foto.jpg';
  }
});
