import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-6 text-center">
          About Me
        </h2>

        <div className="text-center space-y-6">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm <span className="text-white font-semibold">Usman Ashraf Siddiqi</span>, a frontend-focused MERN Stack Developer obsessed with creating unique, interactive, and visually striking web experiences. With a strong command of React, Tailwind CSS, Framer Motion, and backend logic, I bring ideas to life with clean code and bold creativity.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Every project I take on is an opportunity to innovate — from dynamic UIs to seamless backend integration. I love building interfaces that aren't just functional but unforgettable. Whether it's animations that pop or layouts that impress, I'm here to push the web beyond the ordinary.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pt-6"
          >
            <a
              href="#skills"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full shadow-lg transition-all duration-300"
            >
              Explore My Skills
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
