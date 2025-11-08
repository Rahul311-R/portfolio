import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML5/CSS3', level: 85 },
      ],
    },
    {
      category: 'AI & Data Science',
      icon: '🤖',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'OpenCV', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Data Analysis', level: 85 },
      ],
    },
    {
      category: 'Web Technologies',
      icon: '🌐',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PhpMyAdmin', level: 75 },
        { name: 'XAMPP', level: 80 },
      ],
    },
    {
      category: 'Tools & Cloud',
      icon: '⚙️',
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'Git', level: 85 },
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 70 },
      ],
    },
  ];

  const softSkills = [
    'Communication',
    'Problem-Solving',
    'Teamwork',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Leadership',
    'Creativity',
  ];

  const technologies = [
    'Python',
    'Java',
    'React',
    'OpenCV',
    'Machine Learning',
    'MySQL',
    'VS Code',
    'Git',
    'TensorFlow',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Data Analysis',
    'AWS',
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </motion.div>

        {/* Technical Skills with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl">{category.category}</h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full relative"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-center mb-8 text-2xl">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex items-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center mb-8 text-2xl">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                }}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer text-gray-700 border-2 border-gray-100 hover:border-blue-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
