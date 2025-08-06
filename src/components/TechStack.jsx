import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiSolidity,
  SiIpfs,
  SiPython,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiTensorflow
} from "react-icons/si";
import { 
  Link,
  Globe,
  Scroll
} from "lucide-react";

const SkillBadge = ({ skill, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center gap-4 px-8 py-8 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl border border-indigo-500/30 text-indigo-300 text-lg md:text-xl font-medium whitespace-nowrap min-w-max min-h-[160px] w-48"
  >
    <Icon size={48} />
    <span className="text-center">{skill}</span>
  </motion.div>
);

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  delay: PropTypes.number
};

const TechStack = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  const skills = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Blockchain", icon: Link },
    { name: "Web3", icon: Globe },
    { name: "Solidity", icon: SiSolidity },
    { name: "IPFS", icon: SiIpfs },
    { name: "Smart Contracts", icon: Scroll },
    { name: "Python", icon: SiPython },
    { name: "Machine Learning", icon: SiTensorflow },
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        setScrollProgress(progress);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial calculation
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center py-12 px-4">
      <div className="max-w-6xl mx-auto text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-light mb-12"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Technologies & Skills
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto"
        >
          A diverse skill set covering modern web development, blockchain technology, 
          and emerging digital solutions.
        </motion.p>

        {/* Horizontally scrollable container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
          >
            <div className="flex gap-6 pl-4">
              {skills.map((skill, index) => (
                <SkillBadge key={skill.name} skill={skill.name} icon={skill.icon} delay={index * 0.05} />
              ))}
            </div>
          </div>
          
          {/* Scroll Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-2 mt-4 mx-auto max-w-md">
            <motion.div
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
              style={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          
          {/* Gradient fade effects */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
