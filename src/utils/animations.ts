/**
 * Tipos y constantes para animaciones
 */

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

export interface AnimationOptions {
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  threshold?: number;
}

/**
 * Constantes de animación
 */
export const ANIMATION_DEFAULTS = {
  duration: 600, // ms
  delay: 0, // ms
  threshold: 0.1, // 10% visible to trigger
};

/**
 * Clase CSS según dirección de animación
 */
export function getAnimationClass(direction: AnimationDirection = 'up'): string {
  const classMap: Record<AnimationDirection, string> = {
    up: 'animate-fade-in-up',
    down: 'animate-fade-in-down',
    left: 'animate-fade-in-left',
    right: 'animate-fade-in-right',
    fade: 'animate-fade-in',
  };

  return classMap[direction];
}

/**
 * Crear observer para animaciones de scroll
 */
export function createScrollObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: ANIMATION_DEFAULTS.threshold,
    rootMargin: '0px 0px -10% 0px',
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
}

/**
 * Inicializar animaciones de scroll en elementos
 */
export function initScrollAnimations(selector: string = '[data-animate]'): void {
  if (typeof window === 'undefined') return;

  const elements = document.querySelectorAll(selector);

  const observer = createScrollObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const delay = parseInt(element.dataset.animateDelay || '0', 10);

        setTimeout(() => {
          element.classList.add('animate-visible');
        }, delay);

        observer.unobserve(element);
      }
    });
  });

  elements.forEach((element) => observer.observe(element));
}

/**
 * Verificar si el usuario prefiere reducir animaciones
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
