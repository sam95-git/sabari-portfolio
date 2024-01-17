import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="w-full bg-[#262626] text-gray-300 shadow-lg shadow-[#b3b3b3]">
      {/* Horizontal Line */}
      {/* <hr className="my-1 bg-gray-300 border-0 dark:bg-gray-700" /> */}

      {/* Year */}
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 gap-4 py-4">
        <p className="text-center text-lg font-bold">&copy; 2024 <i>SAM</i> ™</p>
      </div>

      {/* Icons */}
      <div className="md:hidden max-w-[1000px] mx-auto flex justify-center items-center space-x-5 py-4">
        <a href="https://www.linkedin.com/in/sabarimurugan" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" title='LinkedIn' target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/sam95-git" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" title='GitHub' target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="mailto:sabari.mathi05@gmail.com" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" title='Mail me' target="_blank" rel="noopener noreferrer">
          <HiOutlineMail size={24} />
        </a>
        <a href="../assets/sabari_cv.pdf" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" title='My Resume' target="_blank" rel="noopener noreferrer">
          <BsFillPersonLinesFill size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
