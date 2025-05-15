import React from "react";

const certifications = [
  {
    title: "Blockchain Revolution Specialization (INSEAD)",
    tags: ["Blockchain", "Finance", "FinTech", "Innovation", "Strategy and Operations"],
    duration: "5 month program",
    completion: "Completed October 2024",
    link: "https://coursera.org/share/4ccfd155cf45f458ce9fd59e73b83de4"
  },
  {
    title: "Blockchain Specialization (University at Buffalo)",
    tags: ["Blockchain", "Cryptography", "Finance", "Problem Solving", "Algorithms"],
    duration: "4 month program",
    completion: "Completed April 2024",
    link: "https://coursera.org/share/94504ab64c1cddce4a30749723a4bd77"
  },
  {
    title: "Introduction to Applied Cryptography Specialization (University of Colorado System)",
    tags: ["Cryptography", "Algorithms", "Mathematics", "Security Engineering", "Mathematical Theory & Analysis"],
    duration: "5 month program",
    completion: "Completed November 2023",
    link: "https://coursera.org/share/3983338b595f8e7fd9bf73fdd5126592"
  },
  {
    title: "Entrepreneurship",
    tags: ["Startups", "Business", "Innovation"],
    completion: "Completed October 31, 2023",
    link: "https://www.linkedin.com/learning/certificates/96785e6a34a7faf978f7e12fc9a230d87c089de1a8e939703dc9af4a8b20d352?trk=share_certificate"
  },
  {
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    tags: ["AI", "Machine Learning", "Generative AI"],
    duration: "5h 43m",
    link: "#"
  }
];

const CertificationCard = ({ title, tags, duration, completion, link }) => {
  return (
    <div className="bg-blue-100 rounded-3xl hover:bg-white p-[3vh] shadow-lg w-full max-w-[90vw] md:max-w-xl">
      <h3 className="text-xl font-bold text-black">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-200 text-gray-700 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {duration && <p className="text-gray-600 mt-2">{duration}</p>}
      {completion && <p className="text-gray-600">{completion}</p>}
      <a
        href={link}
        className="text-blue-400 hover:underline mt-2 block"
        target="blank"
      >
        View Certificate
      </a>
    </div>
  );
};

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 flex flex-col items-center py-10 px-5 w-full overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container pt-[7vh] mx-auto">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
