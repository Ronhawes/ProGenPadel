import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { SiTiktok, SiLinkedin } from "react-icons/si"; // better TikTok & LinkedIn icons

const Footer = () => {
  return (
    <footer className="w-full bg-black py-4">
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
        
        {/* Instagram */}
        <a
          href="https://github.com/Ronhawes"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram
            className="text-white hover:text-teal-400 transition-transform hover:-translate-y-1 cursor-pointer"
            size={35}
          />
        </a>

        {/* TikTok */}
        <a
          href="https://twitter.com/Ronhawes01"
          target="_blank"
          rel="noreferrer"
        >
          <SiTiktok
            className="text-white hover:text-teal-400 transition-transform hover:-translate-y-1 cursor-pointer"
            size={35}
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ronnie-maganga-a63b7b23a"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin
            className="text-white hover:text-teal-400 transition-transform hover:-translate-y-1 cursor-pointer"
            size={35}
          />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@ronhawes3453"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineYoutube
            className="text-white hover:text-teal-400 transition-transform hover:-translate-y-1 cursor-pointer"
            size={35}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
