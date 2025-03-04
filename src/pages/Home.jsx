import React, { useEffect, useState } from "react";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
import linkedin from "../assets/LinkedIn.svg";
import mail from "../assets/mail.svg";
import instagram from "../assets/instagram.svg";
import "../App.css";

const Home = () => {
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);
  const [connectOpacity, setConnectOpacity] = useState(0);
  const [connectScale, setConnectScale] = useState(2);
  const [connectTranslateY, setConnectTranslateY] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hero section fade-out effect
      const fadeStart = 0;
      const fadeEnd = 300;
      const fadeProgress = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      setOpacity(1 - fadeProgress);
      setTranslateY(scrollY * 0.5);

      // "Connect with me" animation effect
      const connectStart = 100;
      const connectEnd = 500;
      const connectProgress = Math.min(Math.max((scrollY - connectStart) / (connectEnd - connectStart), 0), 1);
      
      setConnectOpacity(connectProgress);
      setConnectScale(2 - connectProgress);
      setConnectTranslateY(100 - connectProgress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-r from-black to-slate-800 min-h-screen w-screen overflow-hidden">
      {/* Hero Section with Fade Effect */}
      <div className="h-screen flex items-center justify-center w-full">
        <div
          className="flex-col bg-gradient-to-r bg-clip-text text-transparent from-blue-700 to-pink-500 transition-opacity duration-300"
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <h1 className="text-[10vw] text-center">PRAYRIT DHINGRA</h1>
          <h2 className="text-[2vw] text-center">
            FULL STACK DEVELOPER | WEB3 ENTHUSIAST
          </h2>
          
        </div>
      </div>

      {/* "Connect with me" with Animation */}
      <div
        className="bg-gradient-to-r bg-clip-text text-transparent to-blue-700 from-red-500 transition-all duration-500 ease-out w-full flex z-40 justify-center"
        style={{
          opacity: connectOpacity,
          transform: `scale(${connectScale}) translateY(${connectTranslateY}px)`,
        }}
      >
        <h1 className="text-[11vh] text-center">Connect with me</h1>
      </div>

      {/* Social Links Full-Screen Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-[5vh] px-[5vw] py-[3vh]">
        <Link
          to="https://github.com/Prayrit9"
          className="flex flex-col justify-center items-center gap-6 p-10 bg-gray-900 rounded-3xl hover:bg-gray-800 transition h-[33vh] w-[40vw]"
          target="blank"
        >
          <img src={github} className="h-20" alt="GitHub" />
          <h1 className="text-4xl text-white">Prayrit9</h1>
        </Link>
        <Link
          to="https://www.linkedin.com/in/prayrit-dhingra-05a703229/"
          className="flex flex-col justify-center items-center gap-6 p-10 bg-gray-900 rounded-3xl hover:bg-gray-800 transition h-[33vh] w-[40vw]"
          target="blank"
        >
          <img src={linkedin} className="h-20" alt="LinkedIn" />
          <h1 className="text-4xl text-white">Prayrit Dhingra</h1>
        </Link>
        <Link
          to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgCbGdJkXRXrMdntwvVcSMJkzxQwvrmsHpgbqnmLqGTtPwMrMDzRBKMxpFCmnpcPrZPFL"
          className="flex flex-col justify-center items-center gap-6 p-10 bg-gray-900 rounded-3xl hover:bg-gray-800 transition h-[33vh] w-[40vw]"
          target="blank"
        >
          <img src={mail} className="h-20" alt="Mail" />
          <h1 className="text-4xl text-white">dprayrit@gmail.com</h1>
        </Link>
        <Link
          to="https://www.instagram.com/prayrit_9/"
          className="flex flex-col justify-center items-center gap-6 p-10 bg-gray-900 rounded-3xl hover:bg-gray-800 transition h-[33vh] w-[40vw]"
          target="blank"
        >
          <img src={instagram} className="h-20" alt="Instagram" />
          <h1 className="text-4xl text-white">Prayrit_9</h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
