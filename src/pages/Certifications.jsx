import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ExternalLink, Award, Calendar, Clock } from "lucide-react";

const certifications = [
  {
    title: "Blockchain Revolution Specialization (INSEAD)",
    tags: ["Blockchain", "Finance", "FinTech", "Innovation", "Strategy and Operations"],
    duration: "5 month program",
    completion: "Completed October 2024",
    link: "https://coursera.org/share/4ccfd155cf45f458ce9fd59e73b83de4",
    featured: true
  },
  {
    title: "Blockchain Specialization (University at Buffalo)",
    tags: ["Blockchain", "Cryptography", "Finance", "Problem Solving", "Algorithms"],
    duration: "4 month program",
    completion: "Completed April 2024",
    link: "https://coursera.org/share/94504ab64c1cddce4a30749723a4bd77",
    featured: true
  },
  {
    title: "Introduction to Applied Cryptography Specialization (University of Colorado System)",
    tags: ["Cryptography", "Algorithms", "Mathematics", "Security Engineering", "Mathematical Theory & Analysis"],
    duration: "5 month program",
    completion: "Completed November 2023",
    link: "https://coursera.org/share/3983338b595f8e7fd9bf73fdd5126592",
    featured: true
  },
  {
    title: "Entrepreneurship",
    tags: ["Startups", "Business", "Innovation"],
    completion: "Completed October 31, 2023",
    link: "https://www.linkedin.com/learning/certificates/96785e6a34a7faf978f7e12fc9a230d87c089de1a8e939703dc9af4a8b20d352?trk=share_certificate",
    featured: false
  },
  {
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    tags: ["AI", "Machine Learning", "Generative AI"],
    duration: "5h 43m",
    link: "#",
    featured: false
  }
];

const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, y: -5 }}
    className={`glass p-8 rounded-xl transition-all duration-300 group h-full ${
      cert.featured ? 'glow' : ''
    }`}
  >
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-3">
        <Award className="text-indigo-400" size={32} />
        {cert.featured && (
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30">
            Featured
          </span>
        )}
      </div>
      <motion.a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="text-gray-400 hover:text-indigo-400 transition-colors"
      >
        <ExternalLink size={24} />
      </motion.a>
    </div>

    <h3 className="text-lg md:text-xl font-normal mb-6 group-hover:text-indigo-400 transition-colors">
      {cert.title}
    </h3>

    <div className="space-y-4 mb-6">
      {cert.duration && (
        <div className="flex items-center gap-3 text-gray-300">
          <Clock size={18} />
          <span className="text-sm">{cert.duration}</span>
        </div>
      )}
      {cert.completion && (
        <div className="flex items-center gap-3 text-gray-300">
          <Calendar size={18} />
          <span className="text-sm">{cert.completion}</span>
        </div>
      )}
    </div>

    <div className="flex flex-wrap gap-2">
      {cert.tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

CertificationCard.propTypes = {
  cert: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    duration: PropTypes.string,
    completion: PropTypes.string,
    featured: PropTypes.bool
  }).isRequired,
  index: PropTypes.number.isRequired
};

const CertificationsPage = () => {
  const featuredCertifications = certifications.filter(cert => cert.featured);
  const otherCertifications = certifications.filter(cert => !cert.featured);

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
              Certifications
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
            Professional certifications and specialized training that demonstrate my commitment to 
            continuous learning and expertise in cutting-edge technologies.
          </p>
        </motion.div>

        {/* Featured Certifications */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 min-h-[70vh] flex flex-col justify-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-12">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Specializations
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCertifications.map((cert, index) => (
              <CertificationCard key={cert.title} cert={cert} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Other Certifications */}
        {otherCertifications.length > 0 && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pb-8 min-h-[70vh] flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-12">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Additional Certifications
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherCertifications.map((cert, index) => (
                <CertificationCard key={cert.title} cert={cert} index={index} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default CertificationsPage;
