import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Prayrit9",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/prayrit-dhingra-05a703229/",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dprayrit@gmail.com",
      color: "hover:text-red-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/prayrit_9/",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-purple-900/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Prayrit Dhingra
              </span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Full Stack Developer & Web3 Enthusiast
            </p>
            <p className="text-gray-500 text-sm">
              Crafting digital experiences with modern technologies
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Projects', 'Certifications'].map((link) => (
                <motion.a
                  key={link}
                  href={link === 'Home' ? '/' : `/${link}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`p-2 rounded-lg glass transition-all duration-300 ${social.color}`}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 flex items-center justify-center gap-2"
          >
            Made with <Heart size={16} className="text-red-500" /> by Prayrit Dhingra © 2025
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
