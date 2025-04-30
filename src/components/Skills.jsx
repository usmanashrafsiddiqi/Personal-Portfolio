import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', category: 'Frontend', icon: '/react.jpg' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '/tailwind.png' },
  { name: 'Framer Motion', category: 'Frontend', icon: '/framer.png' },
  { name: 'JavaScript', category: 'Frontend', icon: '/javascript.png' },
  { name: 'HTML5', category: 'Frontend', icon: '/html.png' },
  { name: 'CSS3', category: 'Frontend', icon: '/css.png' },

  { name: 'Node.js', category: 'Backend', icon: '/node.png' },
  { name: 'Express.js', category: 'Backend', icon: '/express.png' },
  { name: 'MongoDB', category: 'Backend', icon: '/mongodb.png' },

  { name: 'Git & GitHub', category: 'Tools', icon: '/github.png' },
  { name: 'Vercel / Netlify', category: 'Tools', icon: '/vercel.png' },
  { name: 'Figma', category: 'Tools', icon: '/figma.png' },
  { name: 'Canva', category: 'Tools', icon: '/canva.jpg' },
  { name: 'Adobe', category: 'Tools', icon: '/adobe.png' },
  { name: 'Postman', category: 'Tools', icon: '/postman.png' },
];

const categories = ['Frontend', 'Backend', 'Tools'];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto z-10 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-16 drop-shadow-lg">
          Explore My Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-14">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="text-2xl font-semibold text-pink-400 mb-6 underline decoration-pink-600 underline-offset-4">
                {cat}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === cat)
                  .map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      className="bg-black/30 backdrop-blur-md border border-pink-500/20 rounded-2xl p-5 flex flex-col items-center shadow-xl hover:shadow-pink-600/50 transition-all duration-300 hover:scale-105 group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.07 }}
                    >
                      <div className="relative w-14 h-14 mb-3 group-hover:scale-110 transition">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain rounded-xl"
                        />
                        <div className="absolute inset-0 rounded-xl border border-pink-500/20 animate-pulse" />
                      </div>
                      <span className="text-sm text-center font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Background animation */}
      <div className="absolute top-1/4 left-[-5%] w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Skills;
