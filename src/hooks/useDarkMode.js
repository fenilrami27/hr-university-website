import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('hru-theme');
        if (stored) return stored;
      }
    } catch {
      // Storage access blocked or restricted
    }
    return 'dark'; // Dark theme by default
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('hru-theme', theme);
      }
    } catch {
      // Storage access blocked or restricted
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, isDark: theme === 'dark', toggleTheme };
}
