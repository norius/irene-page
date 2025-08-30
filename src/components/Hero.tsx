import React, { useEffect, useState } from 'react';
import { ArrowDown, Award, Users, MapPin, Play, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Previeni lo scroll del body quando il modal è aperto
  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-architect-50 via-white to-architect-100 dark:from-architect-900 dark:via-architect-800 dark:to-architect-900">
          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-architect-200 dark:bg-architect-700 rounded-full opacity-20"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-architect-300 dark:bg-architect-600 rounded-full opacity-30"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-16 h-16 bg-architect-400 dark:bg-architect-500 rounded-full opacity-25"
            animate={{
              x: [0, 15, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Parallax Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </motion.div>

        {/* Mouse Follow Effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-architect-400/20 to-architect-600/20 dark:from-architect-300/20 dark:to-architect-500/20 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x * 400 - 200,
            y: mousePosition.y * 400 - 200,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        <motion.div 
          className="container-custom relative z-10"
          style={{ opacity }}
        >
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Main Heading with Text Reveal */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-reveal"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Creiamo</span>
              <span className="block gradient-text">Spazi</span>
              <span className="block">Straordinari</span>
            </motion.h1>

            {/* Subtitle with Stagger Animation */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-architect-600 dark:text-architect-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Trasformiamo le tue visioni in realtà architettoniche che ispirano, 
              funzionano e durano nel tempo.
            </motion.p>

            {/* CTA Buttons with Hover Effects */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="#portfolio" 
                className="btn-primary group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Vedi i Nostri Progetti</span>
                <div className="absolute inset-0 bg-gradient-to-r from-architect-700 to-architect-800 dark:from-architect-200 dark:to-architect-300 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn-secondary group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Parlaci del Tuo Progetto</span>
                <div className="absolute inset-0 bg-architect-800 dark:bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.a>
            </motion.div>

            {/* Video Play Button */}
            <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={openVideoModal}
                className="w-16 h-16 bg-white dark:bg-architect-800 rounded-full shadow-lg flex items-center justify-center group hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="w-6 h-6 text-architect-800 dark:text-white ml-1 group-hover:text-architect-600 dark:group-hover:text-architect-300 transition-colors duration-300" />
              </motion.button>
              <div className="ml-4 text-left">
                <p className="text-sm text-architect-600 dark:text-architect-300 font-medium">Guarda il nostro video</p>
                <p className="text-xs text-architect-500 dark:text-architect-400">Presentazione studio (2:30)</p>
              </div>
            </motion.div>

            {/* Stats with Stagger Animation */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { icon: Award, number: "15+", label: "Anni di Esperienza" },
                { icon: Users, number: "200+", label: "Progetti Completati" },
                { icon: MapPin, number: "50+", label: "Città Servite" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="flex justify-center mb-2"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-architect-600 dark:text-architect-400 group-hover:text-architect-800 dark:group-hover:text-architect-200 transition-colors duration-300" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-architect-800 dark:text-white mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-architect-600 dark:text-architect-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-architect-600 dark:text-architect-400 hover:text-architect-800 dark:hover:text-architect-200 transition-colors duration-300">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeVideoModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white dark:bg-architect-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-300"
              >
                <X size={20} />
              </button>
              
              {/* Video Container */}
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Presentazione Studio Irene Architetti"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-architect-800 dark:text-white mb-2">
                  Presentazione Studio Irene Architetti
                </h3>
                <p className="text-architect-600 dark:text-architect-300">
                  Scopri la nostra filosofia di design, i nostri progetti più significativi e come trasformiamo le visioni in realtà architettoniche straordinarie.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
