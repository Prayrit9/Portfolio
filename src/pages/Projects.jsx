import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Integriguard",
    description: "A blockchain-based supply chain management system ensuring transparency and security with real-time tracking capabilities.",
    link: "https://github.com/Prayrit9/Integriguard",
    tags: ["Blockchain", "Supply Chain", "Web3", "React"],
    featured: true
  },
  {
    name: "DocChain",
    description: "A secure, blockchain-based file-sharing application using IPFS for decentralized storage and enhanced privacy.",
    link: "https://github.com/Prayrit9/DocChain",
    tags: ["IPFS", "Blockchain", "File Sharing", "Security"],
    featured: true
  },
  {
    name: "Blockchain Voting System",
    description: "A research-backed blockchain voting system ensuring transparency, immutability, and democratic trust.",
    link: "#",
    tags: ["Blockchain", "Voting", "Democracy", "Research"],
    featured: false
  },
  {
    name: "AI-Powered Weather Predictor",
    description: "An AI system that analyzes historical data patterns for more accurate weather forecasts using machine learning.",
    link: "#",
    tags: ["AI", "Machine Learning", "Weather", "Data Analysis"],
    featured: false
  },
  {
    name: "SMAPP",
    description: "An all-in-one social app for college students to connect, join events, find study groups, and build friendships.",
    link: "https://github.com/Prayrit9/smapp",
    tags: ["Social Media", "Mobile App", "React Native", "Community"],
    featured: true
  },
  {
    name: "Carnival2D",
    description: "A carnival-themed 2D metaverse platform for user interaction, gaming, and NFT trading experiences.",
    link: "https://github.com/Prayrit9/Carnival2D",
    tags: ["Metaverse", "Gaming", "NFT", "2D Graphics"],
    featured: false
  },
  {
    name: "ProjectW",
    description: "An innovative app connecting restaurants with NGOs to redistribute leftover food, reducing waste and helping communities.",
    link: "https://github.com/Prayrit9/ProjectW",
    tags: ["Social Impact", "Food Waste", "Community", "Sustainability"],
    featured: true
  },
  {
    name: "VedyA",
    description: "A comprehensive health app identifying diseases based on symptoms and connecting users with specialized doctors nearby.",
    link: "https://github.com/Prayrit9/VedyA",
    tags: ["Healthcare", "AI Diagnosis", "Location Services", "Medical"],
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, index, isFeatured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`glass p-8 rounded-xl transition-all duration-300 group h-full ${
        isFeatured ? 'glow' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className={`font-normal ${isFeatured ? 'text-lg md:text-xl' : 'text-base md:text-lg'} group-hover:text-indigo-400 transition-colors`}>
          {project.name}
        </h3>
        <div className="flex gap-3">
          {project.link !== "#" && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
          )}
          <ExternalLink size={24} className="text-gray-400 group-hover:text-indigo-400 transition-colors" />
        </div>
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed text-base">{project.description}</p>
      
      <div className="flex flex-wrap gap-3 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );

  ProjectCard.propTypes = {
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    isFeatured: PropTypes.bool
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 min-h-[30vh] flex flex-col justify-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, 
            blockchain technology, and innovative solutions for real-world problems.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 min-h-[70vh] flex flex-col justify-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-12">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.name} 
                project={project} 
                index={index} 
                isFeatured={true}
              />
            ))}
          </div>
        </motion.section>

        {/* Other Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-8 min-h-[70vh] flex flex-col justify-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-12">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Other Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard 
                key={project.name} 
                project={project} 
                index={index} 
                isFeatured={false}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;