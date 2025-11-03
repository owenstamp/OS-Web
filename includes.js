function loadInclude(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const element = document.getElementById(id);
      element.innerHTML = data;
      if (window.componentHandler) {
        window.componentHandler.upgradeElement(element);
      }
    })
    .catch(err => console.error('Failed to load include:', err));
}

document.addEventListener('DOMContentLoaded', () => {
  loadInclude('header-placeholder', 'header.html');
  loadInclude('footer-placeholder', 'footer.html');
});