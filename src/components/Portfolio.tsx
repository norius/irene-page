import React, { useState } from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Villa Contemporanea",
      category: "residenziale",
      location: "Milano, Italia",
      year: "2023",
      description: "Villa unifamiliare moderna con design minimalista e sostenibilità integrata.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
    },
    {
      id: 2,
      title: "Uffici Tech Hub",
      category: "commerciale",
      location: "Roma, Italia",
      year: "2023",
      description: "Spazi di lavoro innovativi per startup tecnologiche con aree collaborative.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 3,
      title: "Ristrutturazione Palazzo Storico",
      category: "ristrutturazione",
      location: "Firenze, Italia",
      year: "2022",
      description: "Recupero e adeguamento di un palazzo del '500 per uso residenziale di lusso.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Eco-Resort Montano",
      category: "sostenibile",
      location: "Dolomiti, Italia",
      year: "2022",
      description: "Resort sostenibile integrato nel paesaggio montano con materiali locali.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
    },
    {
      id: 5,
      title: "Appartamento di Design",
      category: "interior",
      location: "Torino, Italia",
      year: "2023",
      description: "Interior design completo per appartamento di 120mq con mobili su misura.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 6,
      title: "Centro Culturale",
      category: "commerciale",
      location: "Bologna, Italia",
      year: "2021",
      description: "Centro culturale polifunzionale con biblioteca, auditorium e spazi espositivi.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const filters = [
    { id: 'all', label: 'Tutti i Progetti' },
    { id: 'residenziale', label: 'Residenziale' },
    { id: 'commerciale', label: 'Commerciale' },
    { id: 'interior', label: 'Interior Design' },
    { id: 'ristrutturazione', label: 'Ristrutturazione' },
    { id: 'sostenibile', label: 'Sostenibile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white dark:bg-architect-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-architect-800 dark:text-white mb-6">
            I Nostri Progetti
          </h2>
          <p className="text-xl text-architect-600 dark:text-architect-300 max-w-3xl mx-auto leading-relaxed">
            Scopri alcuni dei nostri progetti più significativi, 
            realizzati con passione e attenzione ai dettagli.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-architect-800 dark:bg-white text-white dark:text-architect-800 shadow-lg'
                  : 'bg-architect-100 dark:bg-architect-700 text-architect-600 dark:text-architect-300 hover:bg-architect-200 dark:hover:bg-architect-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="bg-white dark:bg-architect-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-architect-200 dark:border-architect-700 card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-architect-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-architect-600 dark:text-architect-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-sm text-architect-500 dark:text-architect-400 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <motion.button 
                    className="w-full bg-architect-100 dark:bg-architect-700 text-architect-800 dark:text-white py-2 px-4 rounded hover:bg-architect-200 dark:hover:bg-architect-600 transition-colors duration-300 font-medium flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Vedi Progetto
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-architect-50 dark:bg-architect-800 p-8 rounded-lg border border-architect-200 dark:border-architect-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-architect-800 dark:text-white mb-4">
              Vuoi vedere altri progetti?
            </h3>
            <p className="text-architect-600 dark:text-architect-300 mb-6">
              Contattaci per vedere il nostro portfolio completo e discutere 
              del tuo prossimo progetto.
            </p>
            <motion.a 
              href="#contact" 
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contattaci
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
