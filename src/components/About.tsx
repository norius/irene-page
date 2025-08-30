import React from 'react';
import { CheckCircle, Lightbulb, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-architect-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-architect-800 dark:text-white mb-6">
              Chi Siamo
            </h2>
            <p className="text-lg text-architect-600 dark:text-architect-300 mb-6 leading-relaxed">
              Irene Architetti è uno studio di architettura fondato sulla passione per il design 
              sostenibile e l'innovazione. Dal 2008, abbiamo trasformato oltre 200 progetti in 
              realtà, creando spazi che armonizzano funzionalità, estetica e rispetto per l'ambiente.
            </p>
            <p className="text-lg text-architect-600 dark:text-architect-300 mb-8 leading-relaxed">
              Il nostro team di architetti qualificati lavora a stretto contatto con i clienti 
              per comprendere le loro esigenze e trasformarle in soluzioni architettoniche 
              uniche e personalizzate.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle,
                  title: "Qualità Garantita",
                  description: "Ogni progetto viene realizzato con i più alti standard di qualità e attenzione ai dettagli."
                },
                {
                  icon: Lightbulb,
                  title: "Innovazione",
                  description: "Utilizziamo tecnologie all'avanguardia e materiali sostenibili per creare spazi futuristici."
                },
                {
                  icon: Heart,
                  title: "Passione",
                  description: "La nostra passione per l'architettura si riflette in ogni progetto che realizziamo."
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <value.icon className="w-6 h-6 text-architect-600 dark:text-architect-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-architect-800 dark:text-white mb-1">{value.title}</h3>
                    <p className="text-architect-600 dark:text-architect-300">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-architect-100 to-architect-200 dark:from-architect-800 dark:to-architect-700 p-8 rounded-lg">
              <div className="aspect-square bg-architect-300 dark:bg-architect-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-serif font-bold text-architect-600 dark:text-architect-300 mb-4">15+</div>
                  <div className="text-xl text-architect-700 dark:text-architect-200 font-medium">Anni di Esperienza</div>
                  <div className="text-architect-600 dark:text-architect-400 mt-2">nella progettazione architettonica</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white dark:bg-architect-800 p-4 rounded-lg shadow-lg border border-architect-200 dark:border-architect-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-2xl font-bold text-architect-800 dark:text-white">200+</div>
              <div className="text-sm text-architect-600 dark:text-architect-300">Progetti</div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white dark:bg-architect-800 p-4 rounded-lg shadow-lg border border-architect-200 dark:border-architect-700"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <div className="text-2xl font-bold text-architect-800 dark:text-white">50+</div>
              <div className="text-sm text-architect-600 dark:text-architect-300">Città</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
