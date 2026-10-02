import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';

const About = () => {
  return (
    <div className="pt-32 pb-20 bg-dark-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-primary-500">Me</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-primary-500 shadow-xl shadow-primary-500/20">
              <img src="/assets/img/bipro.jpeg" alt="Bipronath Saha" className="w-full h-full object-cover object-top" onError={(e) => { e.target.src = 'https://via.placeholder.com/400'; }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Hello! I'm Bipronath Saha</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I am a passionate Full Stack Web Developer with extensive experience in building robust web applications.
                I thrive on turning complex problems into elegant, user-friendly solutions.
              </p>
              <p>
                My technical journey started with C and embedded systems (like Arduino and ESP32), which gave me
                a deep understanding of how hardware and software interact. I later expanded my expertise into
                modern web development, mastering technologies like Python, Django, JavaScript, React.js, and Tailwind CSS.
              </p>
              <p>
                Whether it's building an AI-powered emotion recognizer, a real-time tracking dashboard like Nexus Explorer,
                or a scalable job portal like JobTrail, I bring dedication and a keen eye for detail to every project.
              </p>
            </div>

            <a href="https://drive.google.com/file/d/1iu483c1vxE6_SVTwTfGRw5VXNMgt5sgD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg">
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FaGraduationCap className="text-primary-500 mr-3" /> Education
            </h3>
            <div className="space-y-8 border-l-2 border-dark-700 ml-3 pl-6 relative">
              <div className="relative">
                <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900"></span>
                <h4 className="text-xl font-bold text-white">B.Sc. in Electrical and Electronic Engineering</h4>
                <p className="text-primary-400 text-sm mb-2">2019 - 2023</p>
                <p className="text-gray-400 text-sm">Graduated with honors, focusing on electronics, embedded systems, and programming fundamentals.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FaBriefcase className="text-primary-500 mr-3" /> Experience
            </h3>
            <div className="space-y-8 border-l-2 border-dark-700 ml-3 pl-6 relative">
              <div className="relative">
                <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900"></span>
                <h4 className="text-xl font-bold text-white">Full Stack Web Developer</h4>
                <p className="text-primary-400 text-sm mb-2">2023 - Present</p>
                <p className="text-gray-400 text-sm">Leading development of scalable web applications using React.js and Django Rest Framework.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900"></span>
                <h4 className="text-xl font-bold text-white">Python Django Developer</h4>
                <p className="text-primary-400 text-sm mb-2">2021 - 2023</p>
                <p className="text-gray-400 text-sm">Learned Python and its utilities like libraries and tools, built various automation tools, web scrapers, event booking systems, and completed several projects.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900"></span>
                <h4 className="text-xl font-bold text-white">C++ Developer & Student</h4>
                <p className="text-primary-400 text-sm mb-2">2019 - 2021</p>
                <p className="text-gray-400 text-sm">Worked with C++ and completed university-grade projects, laying down a strong programming foundation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
