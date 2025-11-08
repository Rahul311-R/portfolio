import { motion } from 'motion/react';
import { Code, Palette, Zap, Target, Lightbulb, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'AI & Machine Learning',
      description: 'Developing intelligent systems using Python, TensorFlow, and advanced ML algorithms.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Palette size={32} />,
      title: 'Full-Stack Development',
      description: 'Building responsive web applications with React, HTML5, CSS3, and modern frameworks.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: <Zap size={32} />,
      title: 'Data Science',
      description: 'Analyzing complex datasets and creating visualizations with Python and BI tools.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Target size={32} />,
      title: 'Problem Solving',
      description: 'Applying algorithmic thinking to solve real-world challenges efficiently.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'Published patent in smart navigation systems using IoT and ML.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Quick Learner',
      description: 'Constantly exploring new technologies and adapting to industry trends.',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A motivated and detail-oriented AI enthusiast with a passion for innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1562758778-e5638b5b6607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcHJvZ3JhbW1lciUyMGNvZGluZ3xlbnwxfHx8fDE3NjE3ODM2NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Student programming"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-3xl">Hello! I'm an AI & Data Science Student</h3>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              I'm currently pursuing my <strong>B.Tech in Artificial Intelligence and Data Science</strong> at 
              V.S.B College of Engineering Technical Campus, Coimbatore (2023-2026). 
            </p>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              My journey combines a strong foundation in programming with expertise in <strong>machine learning, 
              data analysis, and full-stack web development</strong>. I've published a patent on Real-Time Crowd 
              Condition Analyzer for Smart Navigation Systems, demonstrating my commitment to innovative solutions.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              With hands-on experience from internships at <strong>Vault of Code</strong> and <strong>TATA</strong>, 
              I'm proficient in Python, Java, React, and modern cloud platforms. I'm passionate about applying 
              both technical skills and creative problem-solving to build impactful solutions.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Python', 'Java', 'React', 'Machine Learning', 'OpenCV', 'MySQL'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h4 className="mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
