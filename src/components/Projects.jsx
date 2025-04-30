import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Maroofa Maqsood Portfolio',
    link: 'https://maroofa-maqsood-portfolio-craftedby-usmanashraf.vercel.app/',
    imgSrc: '/maroofa.png',
  },
  {
    title: 'Briskbold Official Landing Page',
    link: 'https://briskbold.com',
    imgSrc: '/briskbold.png',
  },
  {
    title: 'Briskbold Properties Official',
    link: 'https://briskboldproperties.com',
    imgSrc: '/briskboldproperties.png',
  },
  {
    title: 'Naaaz Enterprises Website',
    link: 'https://www.naaazenterprises.com/',
    imgSrc: '/naaaz.png',
  },
  {
    title: 'Full Stack E-Commerce Site',
    link: '#',
    imgSrc: '/ecomerce.jpg',
  },
  {
    title: 'GoFood MERN App',
    link: '#',
    imgSrc: '/gofood.png',
  },
  {
    title: 'Usman Portfolio',
    link: 'https://port-folio-pi-nine-19.vercel.app/',
    imgSrc: '/portfolio.png',
  },
  {
    title: 'Ramadan App',
    link: 'https://ramadan-app-sigma.vercel.app/',
    imgSrc: '/ramadan.png',
  },
  {
    title: 'AI Image Generator',
    link: 'https://ai-image-generator-kappa-six.vercel.app/',
    imgSrc: '/ai.png',
  },
  {
    title: 'Weather App (HTML/CSS/JS)',
    link: 'https://weatherapp-using-html-css-js.vercel.app/',
    imgSrc: '/weather.png',
  },
  {
    title: 'Todo App (HTML/CSS/JS)',
    link: 'https://todo-app-html-css-js.vercel.app/',
    imgSrc: '/todo.png',
  },
  {
    title: 'Guess the Number Game',
    link: 'https://guess-the-number-game-gilt.vercel.app/',
    imgSrc: '/guess.png',
  },
  {
    title: 'QR-code-generator',
    link: 'https://qr-code-generator-liart-pi.vercel.app/',
    imgSrc: '/code.png',
  },
  {
    title: 'keyboard-event-tracker',
    link: 'https://keyboard-event-tracker.vercel.app/',
    imgSrc: '/key.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-black text-white py-24 px-6 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          },
        }}
      >
        <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-16">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/30 backdrop-blur-md border border-pink-500/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-pink-600/40 transition-all duration-300 hover:scale-105 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="relative w-full h-48">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-pink-500/30 animate-pulse rounded-2xl"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-pink-400">
                  {project.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Background blobs */}
      <div className="absolute top-1/4 left-[-5%] w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
    </section>
  );
};

export default Projects;
