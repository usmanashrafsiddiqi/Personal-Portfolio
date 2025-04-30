import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Bachelor of Electronics and Communication',
    institution: 'Institute of Technology, University of Kashmir',
    year: '2023',
    marks: 'CGPA: 7/10',
    img: '/university.png',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Boys Higher Secondary',
    year: '2018',
    marks: 'Percentage: 83.4%',
    img: '/boys_school.png',
  },
  {
    degree: 'Secondary School Certificate',
    institution: 'Vision School of Education',
    year: '2016',
    marks: 'Percentage: 90%',
    img: '/vision_school.png',
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-black text-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center text-pink-500 mb-16">
          Education
        </h2>

        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="md:w-1/3 h-64 md:h-auto">
                <img
                  src={edu.img}
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-yellow-300">
                  {edu.degree}
                </h3>
                <p className="text-pink-400 text-lg">{edu.institution}</p>
                <p className="text-sm text-gray-400 mt-1 mb-2">
                  Year of Completion: {edu.year}
                </p>
                <p className="text-white">{edu.marks}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
