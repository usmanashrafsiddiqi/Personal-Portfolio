import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Projects', 'Skills','Education', 'Contact'];

const Navbar = () => {
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
        <ul className="flex space-x-6 text-white font-medium">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="cursor-pointer hover:text-yellow-300"
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
