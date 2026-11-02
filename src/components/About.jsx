import { motion } from 'framer-motion';
import { GraduationCap, Globe, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-turquoise mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-400 dark:text-gray-300 light:text-gray-600 leading-relaxed">
              I am a final-year Computer Engineering student at ENSA Tangier, passionate about building
              scalable software systems, cloud infrastructure, and data-driven solutions. Currently
              seeking a Final-Year Internship (PFE) opportunity to apply my skills in a professional
              environment.
            </p>

            <p className="text-lg text-gray-400 dark:text-gray-300 light:text-gray-600 leading-relaxed">
              My technical expertise spans full-stack development, cloud computing, DevOps, and
              data engineering. I have experience building microservices architectures, implementing
              CI/CD pipelines, and developing machine learning models.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-primary-purple">Current Objective</h3>
              <p className="text-gray-400 dark:text-gray-300 light:text-gray-600">
                Actively seeking a PFE internship position in software engineering, cloud computing,
                or data engineering. Particularly interested in opportunities involving full-stack web
                application development, cloud infrastructure and DevOps, or data engineering and AI/ML systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-6 hover:border-primary-purple/50 transition-all">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-primary-purple flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-400 dark:text-gray-300 light:text-gray-600">
                    École Nationale des Sciences Appliquées de Tanger (ENSA Tangier)
                  </p>
                  <p className="text-sm text-gray-500 mt-1">Computer Engineering | 2022 - Present (Final Year)</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover:border-primary-purple/50 transition-all">
              <div className="flex items-start gap-4">
                <Globe className="w-8 h-8 text-primary-indigo flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Languages</h3>
                  <ul className="text-gray-400 dark:text-gray-300 light:text-gray-600 space-y-1">
                    <li>Arabic: Native</li>
                    <li>French: B2</li>
                    <li>English: B2</li>
                    <li>Spanish: A1</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover:border-primary-purple/50 transition-all">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-primary-turquoise flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Focus Areas</h3>
                  <ul className="text-gray-400 dark:text-gray-300 light:text-gray-600 space-y-1">
                    <li>Full-stack web application development</li>
                    <li>Cloud infrastructure and DevOps</li>
                    <li>Data engineering and AI/ML systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
