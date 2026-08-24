/**
 * Matcha — official Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 */

const TOKENS = {
  '--bg-base': '#e7edd4',
  '--bg-surface': '#dce4c6',
  '--bg-elevated': '#f3f6e6',
  '--bg-inset': '#d0d9b6',
  '--bg-hover': 'rgba(44, 52, 34, 0.06)',
  '--bg-active': 'rgba(44, 52, 34, 0.1)',
  '--text-primary': '#2c3422',
  '--text-secondary': 'rgba(44, 52, 34, 0.74)',
  '--text-muted': 'rgba(44, 52, 34, 0.52)',
  '--text-faint': 'rgba(44, 52, 34, 0.34)',
  '--border': 'rgba(44, 52, 34, 0.12)',
  '--border-subtle': 'rgba(44, 52, 34, 0.07)',
  '--border-strong': 'rgba(44, 52, 34, 0.18)',
  '--accent': '#4a7c45',
  '--accent-hover': '#3c6738',
  '--accent-muted': 'rgba(74, 124, 69, 0.16)',
  '--accent-subtle': 'rgba(74, 124, 69, 0.1)',
  '--glass-bg': 'rgba(231, 237, 212, 0.9)',
  '--glass-border': 'rgba(44, 52, 34, 0.1)',
  '--glass-bg-menu': 'rgba(243, 246, 230, 0.96)',
  '--glass-border-menu': 'rgba(44, 52, 34, 0.1)',
  '--status-active': '#4a7c45',
  '--status-on-hold': '#b8862a',
  '--status-completed': '#3d8b4a',
  '--status-dropped': '#c44b4b',
};

module.exports = {
  id: 'theme-matcha',
  name: 'Matcha',
  version: '0.1.0',
  description: 'Green-tea paper. Calm reading.',

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-matcha',
      name: 'Matcha',
      description: 'Green-tea paper. Calm reading.',
      author: 'Dripnex',
      colorScheme: 'light',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
