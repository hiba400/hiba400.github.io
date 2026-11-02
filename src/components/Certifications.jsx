import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-turquoise mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 hover:border-primary-purple/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-purple/20 rounded-lg">
                  <Award className="w-8 h-8 text-primary-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-primary-purple mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
