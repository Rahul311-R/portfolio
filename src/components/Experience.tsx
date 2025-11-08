import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Vault of Code',
      period: 'Sep - Oct 2024',
      location: 'Remote',
      description: 'Contributed to building responsive web applications and collaborative development projects.',
      responsibilities: [
        'Built responsive web pages using Figma designs',
        'Contributed to Git-based version control and code reviews',
        'Collaborated with team members on feature implementation',
        'Implemented modern UI/UX principles in web development',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      role: 'Data Visualization Trainee',
      company: 'TATA',
      period: 'Sep 2024',
      location: 'Remote',
      description: 'Gained hands-on experience in data analytics and business intelligence.',
      responsibilities: [
        'Gained foundational knowledge of creating analytics dashboards',
        'Learned data visualization best practices and techniques',
        'Exposure to business intelligence activities and tools',
        'Worked with real-world datasets for insights generation',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey and internship experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                className={`absolute left-0 md:left-1/2 top-8 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10`}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-50`}
                />
              </motion.div>

              <div className="ml-12 md:ml-0">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 md:p-8 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-10 rounded-bl-full`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} text-white shadow-lg`}>
                        <Briefcase size={24} />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl mb-1">{exp.role}</h3>
                        <p className="text-blue-600 text-lg">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-blue-600" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-blue-600" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 text-lg italic">{exp.description}</p>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3 text-gray-600"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${exp.color} mt-2 flex-shrink-0`}></div>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
