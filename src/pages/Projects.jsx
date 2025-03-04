import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const projects = [
  {
    name: "Integriguard",
    description: "A blockchain-based supply chain management system ensuring transparency and security.",
    link: "https://github.com/Prayrit9/Integriguard"
  },
  {
    name: "DocChain",
    description: "A secure, blockchain-based file-sharing application using IPFS.",
    link: "https://github.com/Prayrit9/DocChain"
  },
  {
    name: "Blockchain Voting System",
    description: "A research-backed blockchain voting system ensuring transparency and trust.",
    link: "#"
  },
  {
    name: "AI-Powered Weather Predictor",
    description: "An AI system that analyzes historical data for more accurate weather forecasts.",
    link: "#"
  },
  {
    name: "SMAPP",
    description: "An all-in-one app for college students to socialize, join events, and find friends.",
    link: "https://github.com/Prayrit9/smapp"
  },
  {
    name: "Carnival2D",
    description: "A carnival-themed 2D metaverse platform for user interaction and NFT trading.",
    link: "https://github.com/Prayrit9/Carnival2D"
  },
  {
    name: "ProjectW",
    description: "An app delivering leftover food from restaurants to NGOs, connecting stakeholders.",
    link: "https://github.com/Prayrit9/ProjectW"
  },
  {
    name: "VedyA",
    description: "A web app to identify diseases based on symptoms and suggest specialized doctors with their contact details and location for prompt medical assistance.",
    link: "https://github.com/Prayrit9/VedyA"
  }
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-black to-slate-800 min-h-screen w-screen flex justify-center items-center p-[5vh] overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4vh] pt-[7vh] w-full max-w-[80vw]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-[3vh] rounded-xl shadow-lg transform hover:scale-105 transition"
          >
            <h1 className="text-[3vh] font-bold text-white mb-[1vh]">{project.name}</h1>
            <p className="text-gray-400 mb-[2vh]">{project.description}</p>
            <Link
              to={project.link}
              className="text-blue-500 hover:text-blue-300 transition"
              target="blank"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;