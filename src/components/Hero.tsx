import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-orange-900/10 z-0" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-12 lg:py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text section */}
          <div className="order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Frontend</span>
              <br />
              <span className="text-neon-blue">Developer</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting beautiful, interactive web experiences with modern technologies. 
              Passionate about creating <span className="text-neon-orange">user-friendly interfaces</span> that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="btn-primary px-6 py-3 rounded-full">
                View My Work
              </button>
              <button className="btn-secondary px-6 py-3 rounded-full">
                <a href="/CV.pdf" download="My-Resume.pdf" className="block w-full h-full">
                  Download CV  
                </a>
              </button>
            </div>

            <div className="flex justify-center lg:justify-start gap-6">
              <a href="https://github.com/alishojaeix" target="_blank" rel="noopener noreferrer" className="social-link p-3 glass rounded-full hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/alishojaeix" target="_blank" rel="noopener noreferrer" className="social-link p-3 glass rounded-full hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:alishojaei1999x@gmail.com" className="social-link p-3 glass rounded-full hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image section */}
          <div className="order-2 lg:order-none flex justify-center">
            <img
              src="/img/20241220_201009.jpg"
              alt="Developer"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-neon-blue shadow-xl hover:shadow-xl animate-float hover:animate-pulse
                transition-all duration-500
                hover:scale-105 hover:border-neon-orange
                transform-gpu"
            />
          </div>
        </div>
      </div>

      {/* Scroll button */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-8 h-8 text-neon-blue hover:text-neon-orange transition-colors" />
      </button>
    </section>
  );
};

export default Hero;