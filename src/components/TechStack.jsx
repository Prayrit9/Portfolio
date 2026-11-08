import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiSolidity,
  SiPython,
  SiAmazonwebservices,
  SiGit,
  SiTensorflow
} from "react-icons/si";
import { 
  Link,
  Globe,
  Scroll,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const SkillBadge = ({ skill, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center gap-3 px-5 py-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl border border-indigo-500/30 text-indigo-300 text-base md:text-xl font-medium whitespace-nowrap min-w-[132px] min-h-[132px] w-40"
  >
    <Icon size={40} />
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
  const [canScroll, setCanScroll] = useState(false);
  const scrollRef = useRef(null);

  const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "React Native", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "FastAPI", icon: SiPython },
    { name: "Flask", icon: SiPython },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma ORM", icon: SiPostgresql },
    { name: "Firebase", icon: Globe },
    { name: "Zustand", icon: Link },
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Google Cloud", icon: Globe },
    { name: "AI & Agents", icon: SiTensorflow },
    { name: "MCP", icon: Scroll },
    { name: "Web3", icon: SiSolidity },
    { name: "Git", icon: SiGit }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        setScrollProgress(progress);
        setCanScroll(maxScroll > 0);
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

  const scrollSkills = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction * Math.min(scrollRef.current.clientWidth * 0.8, 420),
      behavior: "smooth"
    });
  };

  return (
    <section className="flex items-center py-14 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8"
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
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
        >
          A practical toolkit for shipping complete products: modern interfaces, APIs,
          data systems, cloud infrastructure, and AI-assisted workflows.
        </motion.p>

        {/* Horizontally scrollable container */}
        <div className="relative group">
          {canScroll && (
            <div className="flex justify-end gap-2 mb-4">
              <button
                type="button"
                onClick={() => scrollSkills(-1)}
                aria-label="Scroll skills left"
                className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollSkills(1)}
                aria-label="Scroll skills right"
                className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-indigo-400 hover:bg-indigo-500/10 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
          >
            <div className="flex gap-4 pl-1">
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
