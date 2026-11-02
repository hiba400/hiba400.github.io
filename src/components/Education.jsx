import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-turquoise mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-xl p-8 hover:border-primary-purple/50 transition-all">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-primary-purple/20 rounded-xl">
                <GraduationCap className="w-12 h-12 text-primary-purple" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">École Nationale des Sciences Appliquées de Tanger (ENSA Tangier)</h3>
                <p className="text-xl text-primary-purple mb-3">Computer Engineering</p>
                <div className="flex items-center gap-2 text-gray-400 dark:text-gray-300 light:text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - Present (Final Year)</span>
                </div>
                <p className="text-gray-400 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                  Engineering program focusing on software engineering, cloud computing, DevOps, and data engineering.
                  The program provides comprehensive training in building scalable systems, implementing CI/CD pipelines,
                  and developing data-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
