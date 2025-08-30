import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Controlla immediatamente la posizione di scroll
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chiudi il menu quando si clicca su un link
  const handleNavClick = (href: string) => {
    // Prima ripristina lo scroll del body
    document.body.style.overflow = 'unset';
 
    // Poi chiudi il menu
    setIsMenuOpen(false);
 
    // Aspetta un momento per permettere la chiusura del menu
    setTimeout(() => {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = (element as HTMLElement).offsetTop - 80; // Sottrai l'altezza della navbar
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  // Previeni lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-architect-900/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 dark:bg-architect-900/80 backdrop-blur-sm'
        } border-b border-architect-200 dark:border-architect-700`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom" style={{ padding: 0 }}>
        <div className="flex items-center justify-between h-16 px-6 sm:px-8 lg:px-8">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-xl sm:text-2xl font-serif font-semibold text-architect-800 dark:text-white">
              Irene Architetti
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'Chi Siamo' },
              { href: '#services', label: 'Servizi' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#contact', label: 'Contatti' }
            ].map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-architect-600 dark:text-architect-300 hover:text-architect-800 dark:hover:text-white transition-colors duration-300 font-medium relative group cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-architect-800 dark:bg-white transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden -mr-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-architect-600 dark:text-architect-300 hover:text-architect-800 dark:hover:text-white transition-colors duration-300 p-3"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-architect-900 border-t border-architect-200 dark:border-architect-700 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-6 space-y-3">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'Chi Siamo' },
                  { href: '#services', label: 'Servizi' },
                  { href: '#portfolio', label: 'Portfolio' },
                  { href: '#contact', label: 'Contatti' }
                ].map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block px-4 py-4 text-architect-600 dark:text-architect-300 hover:text-architect-800 dark:hover:text-white transition-colors duration-300 font-medium rounded-lg hover:bg-architect-50 dark:hover:bg-architect-800 cursor-pointer text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
