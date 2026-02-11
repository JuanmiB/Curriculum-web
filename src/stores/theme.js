import { atom } from 'nanostores';

/**
 * Store para manejar el estado del tema (light/dark)
 * Integrado con localStorage y prefers-color-scheme
 */
export const isDarkMode = atom(false);

/**
 * Toggle entre light y dark mode
 */
export function toggleDarkMode() {
  const newValue = !isDarkMode.get();
  isDarkMode.set(newValue);
  updateDOM(newValue);
}

/**
 * Inicializar tema desde localStorage o preferencias del sistema
 * Debe ejecutarse en el cliente (navegador)
 */
export function initTheme() {
  if (typeof window === 'undefined') return;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  isDarkMode.set(shouldBeDark);
  updateDOM(shouldBeDark);
}

/**
 * Actualizar el DOM y localStorage
 */
function updateDOM(dark) {
  if (typeof document === 'undefined') return;

  if (dark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

/**
 * Obtener tema actual
 */
export function getCurrentTheme() {
  return isDarkMode.get() ? 'dark' : 'light';
}
