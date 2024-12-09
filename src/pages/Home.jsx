import React from 'react';
import github from '../assets/github.svg';
import { Link } from 'react-router-dom';
import linkedin from '../assets/LinkedIn.svg';
import mail from '../assets/mail.svg';
import instagram from '../assets/instagram.svg';
import '../App.css';
import sample from '../assets/Gradient Loop Background.mp4'

const Home = () => {
  return (
    <div className="flex bg-black h-screen w-screen text-white p-[1vw] gap-[3vw] justify-center">
      <div className='h-[80vh] w-[45vw] p-[1vw]'>
      <div className="bg-gradient-to-r bg-clip-text animate-pulse text-transparent to-blue-500 from-pink-500">
      <h1 className="text-[9vh] text-center">Connect with me</h1>
        </div>
        <div className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text'>
        <Link to="https://github.com/Prayrit9" className="flex p-[2vh] text-white items-center gap-[2vw]">
          <img src={github} className="h-[9vh]" alt="GitHub" />
          <h1 className="text-[4vh] hover:bg-clip-text hover:text-transparent">Prayrit9</h1>
        </Link>
        <Link to="https://www.linkedin.com/in/prayrit-dhingra-05a703229/" className="flex p-[2vh] text-white items-center gap-[2vw]">
          <img src={linkedin} className="h-[9vh]" alt="LinkedIn" />
          <h1 className="text-[4vh] hover:bg-clip-text hover:text-transparent">Prayrit Dhingra</h1>
        </Link>
        <Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgCbGdJkXRXrMdntwvVcSMJkzxQwvrmsHpgbqnmLqGTtPwMrMDzRBKMxpFCmnpcPrZPFL" className="flex p-[2vh] text-white items-center gap-[2vw]">
          <img src={mail} className="h-[9vh]" alt="Mail" />
          <h1 className="text-[4vh] hover:bg-clip-text hover:text-transparent">dprayrit@gmail.com</h1>
        </Link>
        <Link to="https://www.instagram.com/prayrit_9/" className="flex p-[2vh] text-white items-center gap-[2vw]">
          <img src={instagram} className="h-[9vh]" alt="Instagram" />
          <h1 className="text-[4vh] hover:bg-clip-text hover:text-transparent">Prayrit_9</h1>
        </Link>
      </div>
      </div>
      <div className="flex flex-col gap-[4vh]">
        <div className="h-[38vh] w-[45vw] bg-gradient-to-br to-blue-500 from-pink-500 rounded-[2vw] p-[2vw]">hello</div>
        <div className="h-[38vh] w-[45vw] bg-gradient-to-br to-blue-500 from-pink-500 rounded-[2vw] p-[2vw]"></div>
      </div>
    </div>
  );
};

export default Home;
