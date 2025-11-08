import { motion } from 'motion/react';
import { Github, ExternalLink, Award, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const patent = {
    title: 'Real-Time Crowd Condition Analyzer for Smart Navigation Systems',
    status: 'Patent Published',
    description:
      'Developed an innovative real-time crowd foot detection system using Machine Learning, GPS, and IoT technologies to enable smart navigation and ambulance clearance in crowded areas.',
    tags: ['Machine Learning', 'IoT', 'GPS', 'Smart Systems'],
    highlight: true,
  };

  const projects = [
    {
      title: 'Virtual Reality OpenCV',
      description:
        'A complex VR-based web project that enables hand gesture tracking for touch-free interaction with virtual elements. Features advanced computer vision and real-time gesture recognition.',
      image: 'https://images.unsplash.com/photo-1758526213714-a0743a6c101f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwZ2VzdHVyZSUyMHZpcnR1YWwlMjByZWFsaXR5fGVufDF8fHx8MTc2MTc4NDA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['OpenCV', 'Python', 'Computer Vision', 'VR'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Weather Prediction GUI',
      description:
        'A graphical user interface application displaying live weather data with real-time API integration. Features input validation, user-friendly design, and accurate weather forecasting.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHVUklMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzYxNzg0MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'API Integration', 'GUI', 'Real-time Data'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'URLGC - Learning Resource Hub',
      description:
        'Designed a comprehensive user-friendly interface for an educational web app using Figma. Focuses on accessibility, user engagement, and includes interactive sections for courses and quizzes.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdtYSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE3MzcyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Figma', 'UI/UX', 'Web Design', 'Education'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Projects & Innovation</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From published patents to innovative applications
          </p>
        </motion.div>

        {/* Patent Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-2xl p-8 shadow-xl border-2 border-amber-200 overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full filter blur-3xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl text-white">
                  <Award size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles size={20} className="text-amber-600" />
                    <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm">
                      {patent.status}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="mb-4 text-2xl md:text-3xl">{patent.title}</h3>
              <p className="text-gray-700 mb-6 text-lg">{patent.description}</p>
              <div className="flex flex-wrap gap-2">
                {patent.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-white text-amber-700 rounded-full shadow-md"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
