import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "FinCap",
    description: "A mobile finance product designed to make everyday money management easier through real-time tracking, recurring expenses, automated spending limits, and AI-assisted insights.",
    link: "#",
    tags: ["React Native (Expo)", "TypeScript", "Firebase", "Firestore", "Zustand"],
    featured: true
  },
  {
    name: "Integriguard",
    description: "A transparent supply-chain platform that uses blockchain and real-time tracking to improve trust, visibility, and accountability across the process.",
    link: "https://github.com/Prayrit9/Integriguard",
    tags: ["Blockchain", "Supply Chain", "Web3", "React"],
    featured: true
  },
  {
    name: "DocChain",
    description: "A privacy-focused file-sharing experience using blockchain and IPFS to explore secure, decentralized document storage.",
    link: "https://github.com/Prayrit9/DocChain",
    tags: ["IPFS", "Blockchain", "File Sharing", "Security"],
    featured: true
  },
  {
    name: "Blockchain Voting System",
    description: "A research-backed exploration of how immutable records and blockchain systems can make digital voting more transparent.",
    link: "#",
    tags: ["Blockchain", "Voting", "Democracy", "Research"],
    featured: false
  },
  {
    name: "AI-Powered Weather Predictor",
    description: "A machine-learning experiment that analyzes historical weather patterns to explore more accurate forecasting.",
    link: "#",
    tags: ["AI", "Machine Learning", "Weather", "Data Analysis"],
    featured: false
  },
  {
    name: "SMAPP",
    description: "A student-focused social app for discovering events, joining study groups, and building meaningful campus connections.",
    link: "https://github.com/Prayrit9/smapp",
    tags: ["Social Media", "Mobile App", "React Native", "Community"],
    featured: true
  },
  {
    name: "Carnival2D",
    description: "A playful 2D metaverse concept that combines social interaction, mini-games, and NFT experiences.",
    link: "https://github.com/Prayrit9/Carnival2D",
    tags: ["Metaverse", "Gaming", "NFT", "2D Graphics"],
    featured: false
  },
  {
    name: "ProjectW",
    description: "A social-impact platform connecting restaurants with NGOs to redistribute surplus food and reduce avoidable waste.",
    link: "https://github.com/Prayrit9/ProjectW",
    tags: ["Social Impact", "Food Waste", "Community", "Sustainability"],
    featured: true
  },
  {
    name: "VedyA",
    description: "A healthcare concept that combines symptom-based guidance with location-aware discovery of relevant doctors.",
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
      className={`glass p-5 sm:p-7 rounded-2xl transition-all duration-300 group h-full flex flex-col ${
        isFeatured ? 'glow' : ''
      }`}
    >
      <div className="flex justify-between items-start gap-4 mb-5">
        <div>
          {isFeatured && <span className="text-xs uppercase tracking-[0.2em] text-indigo-300">Featured work</span>}
          <h3 className={`font-normal mt-1 ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} group-hover:text-indigo-400 transition-colors`}>
          {project.name}
          </h3>
        </div>
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
          {project.link !== "#" && <ExternalLink size={22} className="text-gray-400 group-hover:text-indigo-400 transition-colors" />}
        </div>
      </div>
      
      <p className="text-gray-300 mb-7 leading-relaxed text-base flex-1">{project.description}</p>
      
      <div className="flex flex-wrap gap-2.5 mt-auto">
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
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 pt-2 sm:pt-4"
        >
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
          className="pb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              More Experiments
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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