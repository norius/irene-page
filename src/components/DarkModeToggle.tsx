import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già una preferenza salvata
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    
    // Marca come inizializzato
    setIsInitialized(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Non renderizzare finché non è inizializzato per evitare flash
  if (!isInitialized) {
    return null;
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-20 right-6 z-50 p-3 bg-white dark:bg-architect-800 rounded-full shadow-lg border border-architect-200 dark:border-architect-700 transition-all duration-300 hover:scale-110 sm:right-4"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-500" />
      ) : (
        <Moon className="w-6 h-6 text-architect-600" />
      )}
    </button>
  );
};

export default DarkModeToggle;
