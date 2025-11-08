import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100 
            }}
            className="relative mb-8"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-6xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  RR
                </span>
              </div>
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-2"
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 text-5xl md:text-7xl"
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Rahul R</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <h2 className="text-2xl md:text-3xl text-gray-700">
              AI & Data Science Enthusiast
            </h2>
            <p className="text-xl text-gray-600 mt-2">B.Tech Student | Innovator | Problem Solver</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 text-gray-600 max-w-2xl text-lg"
          >
            Passionate about leveraging AI and data science to solve real-world problems.
            Patent holder and full-stack developer with expertise in machine learning applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-8 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" />
              <span>Coimbatore, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-blue-600" />
              <a href="tel:+917358901247" className="hover:text-blue-600 transition-colors">
                +91 7358901247
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-blue-600" />
              <a href="mailto:rahul6747291@gmail.com" className="hover:text-blue-600 transition-colors">
                rahul6747291@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mb-8"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
                <Github size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
                <Linkedin size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
            </a>
            <a
              href="mailto:rahul6747291@gmail.com"
              className="group"
            >
              <div className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
                <Mail size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors" />
              </div>
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            Explore My Work
            <ArrowDown size={20} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={32} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
