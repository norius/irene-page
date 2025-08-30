import React from 'react';
import { Home, Building2, Palette, Ruler, Leaf, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Progettazione Residenziale",
      description: "Case unifamiliari, appartamenti e complessi residenziali che combinano comfort e design contemporaneo.",
      features: ["Design personalizzato", "Sostenibilità", "Spazi funzionali"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Architettura Commerciale",
      description: "Uffici, negozi e spazi commerciali che riflettono l'identità del brand e ottimizzano l'esperienza utente.",
      features: ["Brand identity", "Efficienza operativa", "Design moderno"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Interior Design",
      description: "Progettazione di interni che trasforma gli spazi in ambienti accoglienti e funzionali.",
      features: ["Arredamento su misura", "Illuminazione", "Materiali premium"]
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Ristrutturazione",
      description: "Rinnovamento e adeguamento di edifici esistenti per nuove funzioni e standard moderni.",
      features: ["Conservazione storica", "Aggiornamento tecnologico", "Efficienza energetica"]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Architettura Sostenibile",
      description: "Progetti eco-friendly che riducono l'impatto ambientale e ottimizzano il consumo energetico.",
      features: ["Energia rinnovabile", "Materiali green", "Certificazioni LEED"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulenza Architettonica",
      description: "Supporto specializzato per ogni fase del progetto, dalla concezione alla realizzazione.",
      features: ["Analisi preliminare", "Gestione cantieri", "Assistenza post-vendita"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-architect-50 dark:bg-architect-800">
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
            I Nostri Servizi
          </h2>
          <p className="text-xl text-architect-600 dark:text-architect-300 max-w-3xl mx-auto leading-relaxed">
            Offriamo una gamma completa di servizi architettonici per trasformare 
            le tue idee in progetti concreti e realizzabili.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-architect-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-architect-200 dark:border-architect-700 card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-architect-100 dark:bg-architect-700 rounded-lg flex items-center justify-center text-architect-600 dark:text-architect-400 mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-architect-800 dark:text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-architect-600 dark:text-architect-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-architect-600 dark:text-architect-400">
                    <div className="w-2 h-2 bg-architect-400 dark:bg-architect-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-architect-900 p-8 rounded-lg shadow-lg border border-architect-200 dark:border-architect-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-architect-800 dark:text-white mb-4">
              Hai un progetto in mente?
            </h3>
            <p className="text-architect-600 dark:text-architect-300 mb-6">
              Contattaci per una consulenza gratuita e scopri come possiamo 
              trasformare le tue idee in realtà.
            </p>
            <motion.a 
              href="#contact" 
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Richiedi Consulenza
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
