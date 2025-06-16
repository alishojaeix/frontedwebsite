import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch("https://formspree.io/f/mpwrdyqy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      }),
    });

    if (response.ok) {
      console.log("پیام با موفقیت ارسال شد!");
      setFormData({ name: "", email: "", message: "" }); // پاک کردن فرم
    } else {
      console.error("خطا در ارسال پیام");
    }
  } catch (error) {
    console.error("خطای شبکه:", error);
  }
};

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'alishojaei1999x@gmail.com', href: 'alishojaei1999x@gmail.com', color: 'text-neon-blue' },
    { icon: Phone, label: 'Phone', value: '+98 9024627068', href: 'tel:+98 9024627068', color: 'text-neon-orange' },
    { icon: MapPin, label: 'Location', value: 'iran , tn', href: 'iran/tn', color: 'text-neon-green' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/alishojaeix', label: 'GitHub', color: 'hover:text-neon-green' },
    { icon: Linkedin, href: 'https://linkedin.com/alishojaeix', label: 'LinkedIn', color: 'hover:text-neon-blue' },
    { icon: Instagram, href: 'alishojaeix', label: 'Twitter', color: 'hover:text-neon-orange' },
  ];

  return (
    <section id="contact" className="section relative">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-glow">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's work together to create something <span className="text-neon-yellow">amazing</span>.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass glass-hover p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">Let's Talk</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing <span className="text-neon-orange">new opportunities</span>, creative projects, 
                or just having a chat about web development. Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="contact-info flex items-center space-x-4 text-gray-300 transition-all duration-300"
                  >
                    <div className="contact-icon w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transition-all duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className={`font-medium ${info.color}`}>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-semibold mb-4 text-neon-yellow">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`social-link p-3 glass rounded-full transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass glass-hover p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neon-blue mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input w-full px-4 py-3 rounded-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neon-orange mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input w-full px-4 py-3 rounded-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neon-green mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="form-input w-full px-4 py-3 rounded-lg resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 Frontend Developer Portfolio. Built with  <span className="text-neon-blue">React</span>, <span className="text-neon-yellow">JavaScript</span>, <span className="text-neon-orange">Three.js</span> & <span className="text-neon-green">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;