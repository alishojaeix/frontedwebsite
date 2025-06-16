import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      titleColor: 'text-neon-blue',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 85 },
      ],
    },
    {
      title: 'Tools & Libraries',
      titleColor: 'text-neon-red',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Three.js', level: 80 },
        { name: 'Framer Motion', level: 85 },
        { name: 'Webpack', level: 75 },
        { name: 'Vite', level: 88 },
        { name: 'Figma', level: 85 },
      ],
    },
    {
      title: 'Backend & Others',
      titleColor: 'text-neon-green',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'python', level: 70 },
        { name: 'MongoDB', level: 70 },
        { name: 'next.js', level: 65 },
        { name: 'REST APIs', level: 80 },
        { name: 'django', level: 65 },
      ],
    },
  ];

  const technologies = [
    'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
    'Three.js', 'Next.js', 'Node.js', 'Git', 'Figma', 'WebGL','python','django'
  ];

  return (
    <section id="skills" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-orange-900/20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-glow">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring <span className="text-neon-yellow">ideas to life</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass glass-hover p-8 rounded-2xl">
              <h3 className={`text-2xl font-bold mb-6 ${category.titleColor}`}>{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 group-hover:text-neon-blue transition-colors duration-300">{skill.name}</span>
                      <span className="text-neon-orange">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="skill-bar h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-neon-yellow animate-glow">Technologies I Use</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-tag glass px-6 py-3 rounded-full text-gray-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;