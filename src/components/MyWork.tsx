import React from 'react';

const MyWork: React.FC = () => {
  const placeholderImages = [
    '/img/screenshot (2).png', // تغییر مسیر به صورت عمومی
    '/img/screenshot (3).png',
    '/img/screenshot (4).png',
    '/img/screenshot (5).png',
    '/img/screenshot (6).png',
    '/img/screenshot.png',
  ];

  return (
    <section id="work" className="section relative">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-glow">
            <span className="text-gradient">My Work</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {placeholderImages.map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg glass glass-hover">
              <img
                src={src}
                alt={`Portfolio sample ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy" // اضافه کردن lazy loading
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;