import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-primary-500">&lt;</span>BS<span className="text-primary-500">/&gt;</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                end={link.path === '/'}
                className={({isActive}) => `relative font-medium transition-colors hover:text-primary-500 ${isActive ? 'text-primary-500 after:w-full' : 'text-white after:w-0'} after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </NavLink>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-300 text-white transform hover:scale-110 active:scale-95 shadow-md"
            >
              {isLightMode ? <FaSun className="text-yellow-500 text-lg" /> : <FaMoon className="text-blue-400 text-lg" />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-300 text-white"
            >
              {isLightMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-400" />}
            </button>
            <button 
              className="text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-dark-900/95 backdrop-blur-lg transition-all duration-300 ${isOpen ? 'top-16 opacity-100 visible' : '-top-48 opacity-0 invisible'}`}>
        <div className="px-4 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({isActive}) => `block py-2 ${isActive ? 'text-primary-500 font-semibold' : 'text-white'} hover:text-primary-500 transition-colors`}
              >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
