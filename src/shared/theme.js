export function setTheme(theme) {
  document.documentElement.setAttribute('main-theme', theme);
}
export function getTheme() {
  return document.documentElement.getAttribute('main-theme') || 'light';
}
