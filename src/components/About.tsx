import React from 'react';
import { Calendar, MapPin, Coffee, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '4+', color: 'text-neon-blue' },
    { icon: Zap, label: 'Projects Completed', value: '50+', color: 'text-neon-orange' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+', color: 'text-neon-green' },
    { icon: MapPin, label: 'Based In', value: 'iran', color: 'text-neon-yellow' },
  ];

  return (
    <section id="about" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-glow">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate frontend developer with a love for creating <span className="text-neon-blue">exceptional digital experiences</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass glass-hover p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-neon-orange">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate frontend developer with over 3 years of experience creating 
                beautiful, responsive web applications. My journey started with curiosity about 
                how websites work, and has evolved into a career focused on <span className="text-neon-blue">user experience</span> 
                and modern web technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in <span className="text-neon-green">React, TypeScript</span>, and modern CSS frameworks, always staying 
                up-to-date with the latest trends and best practices in web development.
              </p>
            </div>
            
            <div className="glass glass-hover p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-neon-yellow">What I Love</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3 hover:text-neon-blue transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse-neon"></div>
                  <span>Building interactive user interfaces</span>
                </li>
                <li className="flex items-center space-x-3 hover:text-neon-orange transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-full animate-pulse-neon"></div>
                  <span>Learning new technologies and frameworks</span>
                </li>
                <li className="flex items-center space-x-3 hover:text-neon-green transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full animate-pulse-neon"></div>
                  <span>Collaborating with designers and developers</span>
                </li>
                <li className="flex items-center space-x-3 hover:text-neon-yellow transition-colors duration-300">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full animate-pulse-neon"></div>
                  <span>Solving complex problems with simple solutions</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, label, value, color }, index) => (
              <div
                key={index}
                className="stat-card glass p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105"
              >
                <Icon className={`stat-icon w-8 h-8 mx-auto mb-4 ${color} transition-all duration-300`} />
                <div className={`text-3xl font-bold mb-2 ${color}`}>{value}</div>
                <div className="text-gray-300 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;