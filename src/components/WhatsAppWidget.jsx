import React from 'react';

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/8082958600"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300"
    >
      {/* Use the actual WhatsApp logo image */}
      <img
        src="/whatapp.jpg" // The image you placed in the public folder
        alt="WhatsApp"
        className="w-12 h-12 object-contain" // Adjust size with Tailwind classes
      />
    </a>
  );
};

export default WhatsAppWidget;
