import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 left-0 w-full h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white sm:px-20 bg-gray-800 font-mono">
      <section className="text-lg">
        &copy; {year} CodeJudge | Empowering Coders Worldwide
      </section>

      <section className="flex items-center justify-center gap-5 text-2xl">
        <a href="#" className="hover:text-[#1ca6fb] transition-all ease-in-out">
          <BsFacebook />
        </a>
        <a href="#" className="hover:text-[#0a66c2] transition-all ease-in-out">
          <BsLinkedin />
        </a>
        <a href="#" className="hover:text-[#1ca6fb] transition-all ease-in-out">
          <BsTwitter />
        </a>
        <a href="#" className="hover:text-[#fe5287] transition-all ease-in-out">
          <BsInstagram />
        </a>
        <a href="#" className="hover:text-[#ff0000] transition-all ease-in-out">
          <BsYoutube />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
