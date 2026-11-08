import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Download, ExternalLink, Briefcase, Calendar } from "lucide-react";
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
  const heroOpacity = Math.max(0.45, 1 - scrollY / 900);
  const heroTranslateY = Math.min(scrollY * 0.08, 40);

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
      color: "hover:text-red-400",
      isEmail: true
    },
    {
      name: "Instagram",
      username: "prayrit_9",
      icon: Instagram,
      url: "https://www.instagram.com/prayrit_9/",
      color: "hover:text-pink-400"
    }
  ];

  const experiences = [
    {
      role: "Software Developer",
      company: "Surety Seven Technology Pvt. Ltd.",
      location: "On-site · New Delhi, India",
      duration: "June 2025 - Present",
      highlights: [
        "Build end-to-end products for an InsurTech business, working across responsive interfaces, backend APIs, databases, and cloud deployment.",
        "Ship production-ready features with Next.js, React, TypeScript, PostgreSQL, Prisma ORM, and AWS.",
        "Connect frontend workflows to reliable REST APIs and third-party data across multiple services.",
        "Use AI-assisted development with Claude and GitHub Copilot to move faster while keeping quality and maintainability high."
      ]
    },
    {
      role: "Content Creation Intern",
      company: "Beyond Brands",
      location: "Remote",
      duration: "June 2024 - Aug 2024",
      highlights: [
        "Created 20+ photo and video ad creatives for 3 client brands, helping boost engagement and audience reach.",
        "Delivered 100% of assigned content on time while consistently meeting brand standards and campaign deadlines."
      ]
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

      <div className="relative z-20 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section 
          className="min-h-[calc(100svh-4rem)] flex items-center justify-center px-4 py-16 sm:-mt-20"
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
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-indigo-300 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-5">
                Software Developer · Full-stack builder
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8">
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
              <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
                I build reliable, user-focused web and mobile products from interface to cloud deployment.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
            >
              <motion.a
                href="https://drive.google.com/file/d/10Uptlzo9of7Gqk_mSO5Jlr_7eXYLEbSQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-6 sm:px-10 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 glow group flex items-center justify-center gap-3"
              >
                <Download size={24} />
                View Resume
                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 sm:px-10 py-4 sm:py-5 border border-indigo-500 text-indigo-400 rounded-xl text-base sm:text-lg font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 sm:mt-14 max-w-3xl mx-auto px-5 py-4"
            >
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Currently building products at <span className="text-gray-200">Surety Seven</span>
                <span className="mx-2 text-indigo-400">·</span>
                based in <span className="text-gray-200">New Delhi, India</span>
                <span className="mx-2 text-indigo-400">·</span>
                working across web, mobile, and cloud.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center py-14 sm:py-20 px-4"
        >
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-indigo-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">What I bring</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto">
              I&apos;m a Full-Stack Software Developer at an InsurTech company, finishing my B.E.
              in Computer Science Engineering with a Blockchain Technology specialization.
              I enjoy solving real business problems and turning ideas into useful products.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                ['Full-Stack Development', 'Thoughtful products built across interfaces, APIs, data, and deployment.'],
                ['Product Engineering', 'Full-stack features shipped with clean, maintainable code.'],
                ['Cloud & Web3', 'Practical systems built for scale, security, and experimentation.']
              ].map(([skill, description], index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 sm:p-8 rounded-xl text-left"
                >
                  <span className="text-sm text-indigo-300">0{index + 1}</span>
                  <h3 className="text-xl md:text-2xl font-normal text-white mt-3 mb-3">{skill}</h3>
                  <p className="text-gray-400 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center py-14 sm:py-20 px-4"
        >
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-indigo-300 text-sm font-semibold tracking-[0.2em] uppercase text-center mb-4">Where I&apos;ve made an impact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-10 sm:mb-16">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={`${experience.role}-${experience.company}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01, y: -4 }}
                  className="glass p-5 sm:p-8 rounded-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Briefcase className="text-indigo-400" size={28} />
                      <h3 className="text-xl md:text-3xl font-normal text-white">
                        {experience.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar size={18} />
                      <span className="text-sm md:text-lg">{experience.duration}</span>
                    </div>
                  </div>

                  <p className="text-indigo-400 text-lg md:text-xl mb-4">
                    {experience.company} • {experience.location}
                  </p>

                  <ul className="space-y-3">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-300 text-base md:text-lg leading-relaxed flex items-start gap-3">
                        <span className="text-indigo-400 mt-2 text-sm">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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
          className="flex items-center py-14 sm:py-20 px-4"
        >
          <div className="max-w-6xl mx-auto w-full">
            <p className="text-indigo-300 text-sm font-semibold tracking-[0.2em] uppercase text-center mb-4">Open to meaningful work</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-10 sm:mb-16">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.isEmail ? undefined : "_blank"}
                    rel={social.isEmail ? undefined : "noopener noreferrer"}
                    onClick={(event) => {
                      if (social.isEmail) {
                        event.preventDefault();
                        window.location.href = social.url;
                      }
                    }}
                    aria-label={social.isEmail ? `Email ${social.username}` : `Open ${social.name} profile`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`glass p-6 sm:p-8 rounded-xl text-center transition-all duration-300 group ${social.color}`}
                  >
                    <IconComponent size={48} className="mx-auto mb-5 text-gray-400 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl md:text-2xl font-normal mb-3">{social.name}</h3>
                    <p className="text-gray-400 text-sm md:text-base break-words">{social.username}</p>
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
