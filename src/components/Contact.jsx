import { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-center text-pink-500 mb-12">
          Contact Me
        </h2>

        {/* Contact Card */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-pink-500/20">
          <div className="flex items-center space-x-4 mb-4">
            <MapPin className="text-pink-400" />
            <span className="text-lg">Srinagar, Kashmir</span>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <Phone className="text-pink-400" />
            <span className="text-lg">8082958600</span>
          </div>

          {/* Toggle Email Section */}
          <motion.div
            className="mt-6"
            initial={false}
            animate={{ height: showEmail ? 'auto' : 0, opacity: showEmail ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {showEmail && (
              <div className="flex items-center space-x-4">
                <MailIcon className="text-pink-400" />
                <a
                  href="https://mail.google.com/mail/?view=cm&to=usmansiddiqi2000@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg underline text-pink-400 hover:text-pink-300 transition"
                >
                  usmansiddiqi2000@gmail.com
                </a>
              </div>
            )}
          </motion.div>

          <button
            onClick={() => setShowEmail(prev => !prev)}
            className="mt-6 w-full bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3 rounded-xl shadow-md"
          >
            {showEmail ? 'Hide Email' : 'You can contact me via email'}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
