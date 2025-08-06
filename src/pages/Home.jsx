import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Download, ExternalLink } from "lucide-react";
import TechStack from "../components/TechStack";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity and translation based on scroll position
  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const heroTranslateY = scrollY * 0.3;

  const socialLinks = [
    {
      name: "GitHub",
      username: "Prayrit9",
      icon: Github,
      url: "https://github.com/Prayrit9",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      username: "Prayrit Dhingra",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/prayrit-dhingra-05a703229/",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      username: "dprayrit@gmail.com",
      icon: Mail,
      url: "mailto:dprayrit@gmail.com",
      color: "hover:text-red-400"
    },
    {
      name: "Instagram",
      username: "prayrit_9",
      icon: Instagram,
      url: "https://www.instagram.com/prayrit_9/",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Mouse follow effect */}
      <div
        className="fixed pointer-events-none z-10"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.15), transparent 80%)`,
          left: 0,
          top: 0,
          width: '100vw',
          height: '100vh',
        }}
      />

      <div className="relative z-20 pt-20">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 -mt-20"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${heroTranslateY}px)`,
            transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
          }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-8">
                <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                  PRAYRIT DHINGRA
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 font-light tracking-wide">
                FULL STACK DEVELOPER • WEB3 ENTHUSIAST
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://drive.google.com/file/d/11YeoYjRU3YtjBwiMxV3iqD2qa8xg-u54/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-10 py-5 rounded-xl text-lg font-medium transition-all duration-300 glow group flex items-center gap-3"
              >
                <Download size={24} />
                View Resume
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 border border-indigo-500 text-indigo-400 rounded-xl text-lg font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="min-h-[70vh] flex items-center py-12 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-12">
              I&apos;m a passionate full-stack developer with a deep interest in blockchain technology and Web3 innovations. 
              With expertise in modern web technologies and decentralized systems, I create solutions that bridge 
              traditional web development with the future of decentralized applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Frontend Development', 'Blockchain & Web3', 'Full Stack Solutions'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-xl"
                >
                  <h3 className="text-2xl md:text-3xl font-normal text-indigo-400 mb-6">{skill}</h3>
                  <p className="text-gray-400 text-lg">Crafting modern, scalable solutions</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <TechStack />

        {/* Contact Section */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="min-h-[70vh] flex items-center py-12 px-4"
        >
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-16">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`glass p-8 rounded-xl text-center transition-all duration-300 group ${social.color}`}
                  >
                    <IconComponent size={60} className="mx-auto mb-6 text-gray-400 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl md:text-2xl font-normal mb-4">{social.name}</h3>
                    <p className="text-gray-400 text-base md:text-lg">{social.username}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
