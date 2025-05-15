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
    <div className="bg-gradient-to-r from-purple-300 to-blue-400 min-h-screen w-screen overflow-hidden">
      {/* Hero Section with Fade Effect */}
      <div className="h-screen flex items-center justify-center w-full">
        <div
          className="flex-col bg-gradient-to-r bg-clip-text text-transparent  font-thin from-blue-950 to-slate-900 transition-opacity duration-300"
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <h1 className="text-[20vw] sm:text-[8vw] md:text-[10vw] lg:text-[9vw] tracking-[0.4vw] text-center">PRAYRIT DHINGRA</h1>
          <h2 className="text-[3vh] sm:text-[2vh] md:text-[2vw] lg:text-[2vw] mt-[4vh] tracking-[0.3vw] text-center">
            FULL STACK DEVELOPER | WEB3 ENTHUSIAST
          </h2>
        <div className="text-center pt-[4vh]">
          <button className="bg-purple-100 rounded-lg py-[1vh] px-[2vw] tracking-[0.3vw] transition-all duration-400 ease-out hover:tracking-[0.6vw]">
          <Link
            to="https://drive.google.com/file/d/11YeoYjRU3YtjBwiMxV3iqD2qa8xg-u54/view?usp=sharing"
            target="blank"
            className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text rounded-lg text-[2vh] sm:text-[2vh] md:text-[2.5vh] lg:text-[2.5vh] font-light "
            >
            RESUME
          </Link>
          </button>
        </div>
        </div>
      </div>
        
      <div className="grid grid-cols-2 md:grid-cols-2 gap-[5vh] font-thin px-[5vw] py-[5vh]">
        <Link
          to="https://github.com/Prayrit9"
          className="flex flex-col justify-center items-center gap-6 p-[2vh] backdrop-blur-md bg-opacity-[30%] shadow-xl bg-blue-100 rounded-3xl hover:bg-blue-200 transition h-[30vh] w-[40vw]"
          target="blank"
        >
          <img src={github} className="h-[8vh]" alt="GitHub" />
          <h1 className="sm:text-[2.2vw] text-black">Prayrit9</h1>
        </Link>
        <Link
          to="https://www.linkedin.com/in/prayrit-dhingra-05a703229/"
          className="flex flex-col justify-center items-center gap-6 p-10 backdrop-blur-md bg-opacity-[30%] shadow-xl bg-blue-100 rounded-3xl hover:bg-blue-200 transition h-[30vh] w-[40vw]"
          target="blank"
        >
          <img src={linkedin} className="h-[7vh]" alt="LinkedIn" />
          <h1 className="sm:text-[2.2vw] text-black text-center">Prayrit Dhingra</h1>
        </Link>
        <Link
          to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgCbGdJkXRXrMdntwvVcSMJkzxQwvrmsHpgbqnmLqGTtPwMrMDzRBKMxpFCmnpcPrZPFL"
          className="flex flex-col justify-center items-center gap-6 p-10 backdrop-blur-md bg-opacity-[30%] shadow-xl bg-blue-100 rounded-3xl hover:bg-blue-200 transition h-[30vh] w-[40vw]"
          target="blank"
        >
          <img src={mail} className="h-[7vh]" alt="Mail" />
          <h1 className="sm:text-[2.2vw] text-black">dprayrit@gmail.com</h1>
        </Link>
        <Link
          to="https://www.instagram.com/prayrit_9/"
          className="flex flex-col justify-center items-center gap-6 p-10 backdrop-blur-md bg-opacity-[30%] shadow-xl bg-blue-100 rounded-3xl hover:bg-blue-200 transition h-[30vh] w-[40vw]"
          target="blank"
        >
          <img src={instagram} className="h-[7vh]" alt="Instagram" />
          <h1 className="sm:text-[2.2vw] text-black">Prayrit_9</h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
