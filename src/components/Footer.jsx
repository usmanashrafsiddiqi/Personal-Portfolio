import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 px-6">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-pink-500 mb-4">
          Usman Ashraf Siddiqi
        </h3>
        <p className="text-sm text-gray-400 mb-6">
          © {new Date().getFullYear()} All rights reserved. Built with 💻 using React, Tailwind CSS & Framer Motion.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/usmanashrafsiddiqi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/usmansiddiqi2000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:usmansiddiqi2000@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://instagram.com/your_instagram_here"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <Instagram size={22} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
