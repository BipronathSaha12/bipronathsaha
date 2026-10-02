import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'React / Django', 'React', 'Python', 'Arduino'];
  
  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    return project.category.includes(filter) || (filter === 'Python' && project.category === 'Python') || (filter === 'React / Django' && project.category === 'React / Django');
  });

  return (
    <div className="pt-32 pb-20 bg-dark-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-primary-500">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my work showcasing expertise in various technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-20 z-30 bg-dark-800/90 backdrop-blur-md py-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' : 'bg-dark-700 text-gray-300 hover:bg-dark-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-dark-900 rounded-xl overflow-hidden hover:border-primary-500 border border-dark-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  {project.image && (
                    <img src={project.image.startsWith('/') ? `${import.meta.env.BASE_URL}${project.image.slice(1)}` : project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm h-16">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className={`px-3 py-1 bg-dark-800 text-xs rounded-full border border-dark-700 text-gray-300`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-500 hover:text-primary-400 transition-colors text-sm font-semibold">
                        <FaGithub className="mr-2" /> Code
                      </a>
                    )}
                    {project.githubFrontend && (
                      <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-500 hover:text-primary-400 transition-colors text-sm font-semibold">
                        <FaGithub className="mr-2" /> Frontend
                      </a>
                    )}
                    {project.githubBackend && (
                      <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary-500 hover:text-primary-400 transition-colors text-sm font-semibold">
                        <FaGithub className="mr-2" /> Backend
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-semibold">
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
