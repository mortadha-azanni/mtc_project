// Asset exports for easy importing
export const IMAGES = {
  LOGO: '/logo.svg',
  HERO_BACKGROUND: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
  PLACEHOLDER_AVATAR: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  NOT_FOUND: 'https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
} as const;

// SVG icons as components (if needed for custom icons)
export const ICONS = {
  // You can add custom SVG icons here if needed
} as const;

// Color palette
export const COLORS = {
  PRIMARY: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    900: '#1e3a8a',
  },
  SECONDARY: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    500: '#14b8a6',
    900: '#134e4a',
  }
} as const;