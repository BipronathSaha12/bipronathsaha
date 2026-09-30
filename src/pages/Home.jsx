import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaGithub, FaLinkedin, FaEnvelope, FaProjectDiagram, FaCode, FaUsers, FaAward, FaPython, FaReact, FaJs, FaHtml5, FaCss3, FaBootstrap, FaWind, FaGitAlt, FaMicrochip } from 'react-icons/fa';
import { SiDjango, SiAdobephotoshop, SiC } from 'react-icons/si';
import { projects } from '../data/projects';

const Home = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
            particles: {
              color: { value: "#3b82f6" },
              links: { color: "#3b82f6", distance: 150, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1 },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-500 rounded-full text-sm font-mono">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-primary-500">Bipronath Saha</span>
          </motion.h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 font-semibold h-12">
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 1000,
                'Python Django Expert', 1000,
                'React Developer', 1000,
                'IoT Enthusiast', 1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary-400"
            />
          </div>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Full Stack Python Django Developer & Web Developer specializing in building modern, 
            scalable web applications with cutting-edge technologies.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-primary-500/30">
              <FaProjectDiagram className="mr-2" /> View Projects
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-500 text-primary-500 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300">
              <FaEnvelope className="mr-2" /> Contact Me
            </Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} className="flex justify-center gap-6 mt-12">
            <a href="https://linkedin.com/in/bipronath-saha" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-primary-500 transition-transform hover:-translate-y-1">
              <FaLinkedin />
            </a>
            <a href="https://github.com/BipronathSaha12" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-primary-500 transition-transform hover:-translate-y-1">
              <FaGithub />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About <span className="text-primary-500">Me</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm a passionate Full Stack Python Django Developer with expertise in building 
                robust web applications. My journey in technology spans across embedded systems, 
                AI-powered applications, and modern web development.
              </p>
              <Link to="/about" className="inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold transition-colors">
                Learn More &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FaCode, title: "5+ Years", desc: "Experience" },
                { icon: FaProjectDiagram, title: "10+", desc: "Projects" },
                { icon: FaUsers, title: "20+", desc: "Happy Clients" },
                { icon: FaAward, title: "5+", desc: "Awards" },
              ].map((stat, i) => (
                <div key={i} className="bg-dark-700 p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300">
                  <stat.icon className="text-4xl text-primary-500 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl">{stat.title}</h3>
                  <p className="text-gray-400 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="text-primary-500">Skills</span>
            </h2>
            <p className="text-gray-400">Technologies and tools I work with.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: FaPython, name: "Python" },
              { icon: SiDjango, name: "Django" },
              { icon: FaReact, name: "React" },
              { icon: FaJs, name: "JavaScript" },
              { icon: FaHtml5, name: "HTML5" },
              { icon: FaCss3, name: "CSS3" },
              { icon: FaWind, name: "Tailwind" },
              { icon: FaGitAlt, name: "Git" },
              { icon: FaMicrochip, name: "Arduino" },
              { icon: SiC, name: "C / C++" },
              { icon: SiAdobephotoshop, name: "Photoshop" },
            ].map((skill, i) => (
              <div key={i} className="bg-dark-800 p-6 rounded-xl flex flex-col items-center justify-center hover:-translate-y-2 transition-transform duration-300 border border-dark-700 hover:border-primary-500 group">
                <skill.icon className="text-4xl text-primary-500 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-primary-500">Projects</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-dark-900 rounded-xl overflow-hidden hover:border-primary-500 border border-dark-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className={`text-6xl ${project.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm h-16">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0,3).map((t, idx) => (
                      <span key={idx} className={`px-3 py-1 bg-dark-800 text-xs rounded-full border border-dark-700 text-gray-300`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link to="/projects" className="text-primary-500 hover:text-primary-400 font-semibold text-sm">
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors">
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
