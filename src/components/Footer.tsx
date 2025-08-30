import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-architect-800 dark:bg-architect-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Studio Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold mb-6">
                Irene Architetti
              </h3>
              <p className="text-architect-200 dark:text-architect-300 mb-6 leading-relaxed">
                Trasformiamo le tue visioni in realtà architettoniche che ispirano, 
                funzionano e durano nel tempo. Dal 2008, creiamo spazi straordinari 
                con passione e professionalità.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: "Via dell'Architettura, 123, 20100 Milano" },
                  { icon: Phone, text: "+39 02 1234 5678" },
                  { icon: Mail, text: "info@irenearchitetti.it" }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <contact.icon className="w-5 h-5 text-architect-300 dark:text-architect-400" />
                    <span className="text-architect-200 dark:text-architect-300">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Servizi</h4>
              <ul className="space-y-3">
                {[
                  "Progettazione Residenziale",
                  "Architettura Commerciale",
                  "Interior Design",
                  "Ristrutturazione",
                  "Architettura Sostenibile",
                  "Consulenza"
                ].map((service, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a href="#services" className="text-architect-200 dark:text-architect-300 hover:text-white transition-colors duration-300">
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Link Rapidi</h4>
              <ul className="space-y-3">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#about", label: "Chi Siamo" },
                  { href: "#portfolio", label: "Portfolio" },
                  { href: "#contact", label: "Contatti" },
                  { href: "#contact", label: "Consulenza Gratuita" },
                  { href: "#portfolio", label: "Progetti Recenti" }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a href={link.href} className="text-architect-200 dark:text-architect-300 hover:text-white transition-colors duration-300">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-architect-700 dark:border-architect-600 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div 
              className="text-architect-300 dark:text-architect-400 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 Irene Architetti. Tutti i diritti riservati.
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 bg-architect-700 dark:bg-architect-600 rounded-full flex items-center justify-center text-architect-300 dark:text-architect-400 hover:bg-architect-600 dark:hover:bg-architect-500 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
