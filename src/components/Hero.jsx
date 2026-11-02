import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text">Hiba Ben Adou</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 dark:text-gray-300 light:text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Final-year Computer Engineering Student at ENSA Tangier
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building scalable software systems, cloud infrastructure, and data-driven solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary-purple to-primary-indigo text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-purple/50 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View projects"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#cv"
              className="px-8 py-3 border-2 border-primary-purple text-primary-purple rounded-full font-semibold hover:bg-primary-purple hover:text-white transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download CV"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-turquoise text-primary-turquoise rounded-full font-semibold hover:bg-primary-turquoise hover:text-white transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Contact me"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-gray-400 hover:text-primary-purple transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
