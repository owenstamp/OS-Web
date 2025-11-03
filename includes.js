function loadInclude(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error('Failed to load include:', err));
}

document.addEventListener('DOMContentLoaded', () => {
  loadInclude('header-placeholder', 'header.html');
  loadInclude('footer-placeholder', 'footer.html');
});