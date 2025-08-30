import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui andrebbe la logica per inviare il form
    console.log('Form submitted:', formData);
    alert('Grazie per averci contattato! Ti risponderemo al più presto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-architect-50 dark:bg-architect-800">
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
            Contattaci
          </h2>
          <p className="text-xl text-architect-600 dark:text-architect-300 max-w-3xl mx-auto leading-relaxed">
            Pronto a trasformare le tue idee in realtà? 
            Contattaci per una consulenza gratuita e iniziamo a lavorare sul tuo progetto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white dark:bg-architect-900 p-8 rounded-lg shadow-lg border border-architect-200 dark:border-architect-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold text-architect-800 dark:text-white mb-6">
              Invia un Messaggio
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-architect-700 dark:text-architect-300 mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-architect-300 dark:border-architect-600 rounded-lg focus:ring-2 focus:ring-architect-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-architect-800 text-architect-800 dark:text-white"
                    placeholder="Il tuo nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-architect-700 dark:text-architect-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-architect-300 dark:border-architect-600 rounded-lg focus:ring-2 focus:ring-architect-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-architect-800 text-architect-800 dark:text-white"
                    placeholder="la-tua-email@esempio.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-architect-700 dark:text-architect-300 mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-architect-300 dark:border-architect-600 rounded-lg focus:ring-2 focus:ring-architect-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-architect-800 text-architect-800 dark:text-white"
                    placeholder="+39 123 456 7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-architect-700 dark:text-architect-300 mb-2">
                    Tipo di Progetto
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-architect-300 dark:border-architect-600 rounded-lg focus:ring-2 focus:ring-architect-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-architect-800 text-architect-800 dark:text-white"
                  >
                    <option value="">Seleziona un tipo</option>
                    <option value="residenziale">Progettazione Residenziale</option>
                    <option value="commerciale">Architettura Commerciale</option>
                    <option value="interior">Interior Design</option>
                    <option value="ristrutturazione">Ristrutturazione</option>
                    <option value="sostenibile">Architettura Sostenibile</option>
                    <option value="consulenza">Consulenza Architettonica</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-architect-700 dark:text-architect-300 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-architect-300 dark:border-architect-600 rounded-lg focus:ring-2 focus:ring-architect-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-architect-800 text-architect-800 dark:text-white"
                  placeholder="Descrivi il tuo progetto e le tue esigenze..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 mr-2" />
                Invia Messaggio
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Studio Info */}
            <div className="bg-white dark:bg-architect-900 p-8 rounded-lg shadow-lg border border-architect-200 dark:border-architect-700">
              <h3 className="text-2xl font-serif font-bold text-architect-800 dark:text-white mb-6">
                Informazioni Studio
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Indirizzo",
                    content: "Via dell'Architettura, 123\n20100 Milano, Italia"
                  },
                  {
                    icon: Phone,
                    title: "Telefono",
                    content: "+39 02 1234 5678"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@irenearchitetti.it"
                  },
                  {
                    icon: Clock,
                    title: "Orari",
                    content: "Lun - Ven: 9:00 - 18:00\nSab: 9:00 - 12:00\nDom: Chiuso"
                  }
                ].map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <info.icon className="w-6 h-6 text-architect-600 dark:text-architect-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-architect-800 dark:text-white">{info.title}</h4>
                      <p className="text-architect-600 dark:text-architect-300 whitespace-pre-line">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white dark:bg-architect-900 p-8 rounded-lg shadow-lg border border-architect-200 dark:border-architect-700">
              <h3 className="text-2xl font-serif font-bold text-architect-800 dark:text-white mb-6">
                Perché Scegliere Noi
              </h3>
              
              <div className="space-y-4">
                {[
                  "Consulenza gratuita e personalizzata",
                  "Esperienza pluriennale nel settore",
                  "Approccio sostenibile e innovativo",
                  "Supporto completo dalla progettazione alla realizzazione"
                ].map((reason, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-architect-600 dark:bg-architect-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-architect-600 dark:text-architect-300">{reason}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
