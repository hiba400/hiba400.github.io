import { motion } from 'framer-motion';
import { Download, FileText, Database, Cloud, Code } from 'lucide-react';

const DownloadCV = () => {
  const cvOptions = [
    {
      title: 'Data & AI CV',
      description: 'Focus on machine learning, data analytics, and AI/ML projects',
      icon: Database,
      href: '/assets/cv-data-ai.pdf',
      color: 'primary-purple',
      available: false,
    },
    {
      title: 'Cloud & DevOps CV',
      description: 'Focus on cloud infrastructure, CI/CD, and DevOps practices',
      icon: Cloud,
      href: '/assets/cv-cloud-devops.pdf',
      color: 'primary-indigo',
      available: false,
    },
    {
      title: 'Software Engineering CV',
      description: 'Focus on full-stack development and software architecture',
      icon: Code,
      href: '/assets/cv-software-engineering.pdf',
      color: 'primary-turquoise',
      available: false,
    },
  ];

  const cvAvailable = false; // Set to true when CV PDFs are added to /public/assets/

  return (
    <section id="cv" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Download CV</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-turquoise mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 dark:text-gray-300 light:text-gray-600">
            Choose the CV that best matches the position you're applying for
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cvOptions.map((cv, index) => {
            const Icon = cv.icon;
            return (
              <motion.div
                key={cv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`glass rounded-xl p-6 hover:border-primary-purple/50 transition-all group ${cvAvailable ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 bg-${cv.color}/20 rounded-xl group-hover:bg-${cv.color}/30 transition-colors`}>
                    <Icon className="w-12 h-12 text-primary-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{cv.title}</h3>
                    <p className="text-sm text-gray-400 dark:text-gray-300 light:text-gray-600 mb-4">
                      {cv.description}
                    </p>
                  </div>
                  {cvAvailable ? (
                    <Download className="w-6 h-6 text-primary-purple group-hover:text-primary-indigo transition-colors" />
                  ) : (
                    <span className="text-xs text-gray-500">Coming soon</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {!cvAvailable && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-gray-500">
              CV downloads will be available once you add your PDF files to the /public/assets/ directory
            </p>
          </motion.div>
        )}


      </div>
    </section>
  );
};

export default DownloadCV;
