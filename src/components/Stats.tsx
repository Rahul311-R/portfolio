import { motion } from 'motion/react';
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: <GraduationCap size={32} />,
      number: '2026',
      label: 'Expected Graduation',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Award size={32} />,
      number: '1',
      label: 'Patent Published',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: <Code size={32} />,
      number: '4+',
      label: 'Projects Completed',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Briefcase size={32} />,
      number: '2',
      label: 'Internships',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
              >
                <div className="text-4xl mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
