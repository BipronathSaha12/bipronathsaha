import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-900 py-12 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-primary-500">&lt;</span>BS<span className="text-primary-500">/&gt;</span>
            </Link>
            <p className="text-gray-400 mt-4">
              Full Stack Python Django Developer & Web Developer based in Bangladesh.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://linkedin.com/in/bipronath-saha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors text-xl">
                <FaLinkedin />
              </a>
              <a href="https://github.com/BipronathSaha12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors text-xl">
                <FaGithub />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-primary-500 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><FaEnvelope className="text-primary-500 mr-2" /> bipronathsaha@gmail.com</li>
              <li className="flex items-center"><FaMapMarkerAlt className="text-primary-500 mr-2" /> Bangladesh</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Bipronath Saha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
