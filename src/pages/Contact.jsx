import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch("https://formsubmit.co/ajax/bipronathsaha@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Failed to send message. Please try again.');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-dark-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-primary-500">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-primary-500 shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:bipronathsaha@gmail.com" className="text-gray-400 hover:text-primary-500 transition-colors">
                    bipronathsaha@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-primary-500 shrink-0">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Bangladesh</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Follow Me</h2>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/bipronath-saha" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/BipronathSaha12" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-dark-800 rounded-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-800 p-8 rounded-xl border border-dark-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-dark-900 border border-dark-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-primary-500 text-white font-bold rounded-lg px-4 py-3 hover:bg-primary-600 transition-colors">
                Send Message
              </button>
              
              {status && (
                <p className={`text-center font-medium ${status.includes('success') ? 'text-green-500' : 'text-primary-500'}`}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
