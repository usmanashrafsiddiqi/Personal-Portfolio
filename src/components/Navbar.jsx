import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white text-2xl font-bold tracking-wide"
        >
          Usman <span className="text-yellow-300">Ashraf</span>
        </motion.h1>

        {/* Hamburger Icon for Small/Medium Screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex space-x-6 text-white font-medium ${isMenuOpen ? 'flex flex-col items-center absolute top-14 left-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 z-10' : 'hidden'} lg:flex`}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="cursor-pointer hover:text-yellow-300 py-3 px-4 text-center"
            >
              <a href={`#${item.toLowerCase()}`} className="block">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
