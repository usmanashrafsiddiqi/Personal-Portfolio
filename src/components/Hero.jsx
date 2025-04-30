import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text */}
        <div className="space-y-6">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-pink-500">Usman Ashraf Siddiqi</span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-gray-300"
          >
            MERN Stack Developer & Frontend Magician
          </motion.p>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a
              href="#projects"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Explore My Work
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center md:block"
        >
          <img
            src="/new1.jpg"
            alt="Usman Ashraf Siddiqi"
            className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-pink-500"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
