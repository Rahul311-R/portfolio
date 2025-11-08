import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: 'V.S.B College of Engineering Technical Campus',
      location: 'Coimbatore, India',
      period: '2023 - 2026',
      description: 'Specializing in AI, Machine Learning, Data Science with hands-on projects and research experience.',
      icon: <GraduationCap size={32} />,
      color: 'from-blue-500 to-blue-600',
      highlights: ['AI & ML', 'Data Science', 'Full-Stack Development', 'Research Projects'],
    },
    {
      degree: 'Class XII - Higher Secondary',
      institution: 'Higher Secondary School',
      location: 'India',
      period: '2020 - 2021',
      description: 'Completed with focus on Mathematics, Physics, and Computer Science.',
      icon: <Award size={32} />,
      color: 'from-indigo-500 to-indigo-600',
      highlights: ['Mathematics', 'Physics', 'Computer Science'],
    },
    {
      degree: 'Class X - Secondary',
      institution: 'Secondary School',
      location: 'India',
      period: '2019',
      description: 'Strong foundation in core subjects with excellent academic performance.',
      icon: <BookOpen size={32} />,
      color: 'from-purple-500 to-purple-600',
      highlights: ['Core Subjects', 'Academic Excellence'],
    },
  ];

  const certifications = [
    {
      name: 'Oracle Cloud Foundation',
      issuer: 'Oracle',
      icon: '☁️',
    },
    {
      name: 'Java Certification',
      issuer: 'GUVI',
      icon: '☕',
    },
    {
      name: 'Power BI Mastery',
      issuer: 'Udemy',
      icon: '📊',
    },
    {
      name: 'Figma for Designers',
      issuer: 'StrayLearn, LetsFirst',
      icon: '🎨',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 bg-gradient-to-br ${edu.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        {edu.icon}
                      </motion.div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl md:text-2xl mb-2">{edu.degree}</h3>
                          <p className="text-blue-600 text-lg mb-1">{edu.institution}</p>
                          <p className="text-gray-600">📍 {edu.location}</p>
                        </div>
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 rounded-full text-sm whitespace-nowrap self-start">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-4">{edu.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <motion.span
                            key={highlight}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + idx * 0.1 }}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-center mb-8 text-2xl md:text-3xl">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, rotate: 2 }}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center border-2 border-blue-100"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h4 className="mb-2 text-lg">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
