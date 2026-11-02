import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { Code, Server, Database, Cloud, Activity, Brain, Layout, Globe } from 'lucide-react';

const Skills = () => {
  const getIcon = (iconName) => {
    const iconMap = {
      'Code': Code,
      'Server': Server,
      'Database': Database,
      'Cloud': Cloud,
      'Activity': Activity,
      'Brain': Brain,
      'Layout': Layout,
      'Globe': Globe,
    };
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-purple to-primary-turquoise mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary-purple/50 transition-all hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-purple/20 rounded-lg text-primary-purple" aria-hidden="true">
                {getIcon(skillCategory.icon)}
              </div>
              <h3 className="text-xl font-semibold">{skillCategory.category}</h3>
            </div>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-indigo/20 text-sm rounded-full hover:bg-primary-indigo/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
