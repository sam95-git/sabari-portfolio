import React, { useState } from "react";
import logo from "../assets/portfolio-logo.png";
import { FaBars, FaTimesCircle, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import ResumeViewer from "./ResumeViewer";

const Navbar = () => {
    // define state for navbar
    const [nav, setNav] = useState(false);
    const clickHandler = () => {
        setNav(!nav);
    }
    //define state for resume
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const openResume = () => {
        setNav(!nav);
        setIsResumeOpen(true);
    }
    const closeResume = () => {
        setNav(!nav);
        setIsResumeOpen(false);
    }
    return (
        <div className="fixed h-[80px] w-full bg-[#262626] px-4 flex justify-between content-center text-white shadow-sm shadow-[#b3b3b3] z-50">
            <div>
                <img src={logo} alt="logo" style={{ width: '5em', height: '5em' }} />
            </div>
            {/* menu */}
            <ul className="hidden md:flex py-6">
                <li className="hover:border-4 inline border-[#fcc203] rounded-md">
                    <Link to='home' smooth={true} duration={500} >Home</Link>
                </li>
                <li className="hover:border-4 inline border-[#fcc203] rounded-md">
                    <Link to='about' smooth={true} duration={500} >About</Link>
                </li>
                <li className="hover:border-4 inline border-[#fcc203] rounded-md">
                    <Link to='skills' smooth={true} duration={500} >Skills</Link>
                </li>
                <li className="hover:border-4 inline border-[#fcc203] rounded-md" onClick={openResume}>Resume</li>
            </ul>

            {/* mobile menu btn */}
            <div onClick={clickHandler} className="md:hidden z-10 py-5">
                {!nav ? <FaBars size={'2em'} /> : <FaTimesCircle size={'2em'} />}
            </div>

            {/*  mobile menu */}
            <div className={!nav ? "hidden" : "absolute bg-[#262626] top-0 left-0 h-screen w-full flex flex-col justify-center items-center"}>
                <ul>
                    <li className="text-4xl py-6">
                        <Link onClick={clickHandler} to='home' smooth={true} duration={500} >Home</Link>
                    </li>
                    <li className="text-4xl py-6">
                        <Link onClick={clickHandler} to='about' smooth={true} duration={500} >About</Link>
                    </li>
                    <li className="text-4xl py-6">
                        <Link onClick={clickHandler} to='skills' smooth={true} duration={500} >Skills</Link>
                    </li>
                    <li className="text-4xl py-6" onClick={openResume}>Resume</li>
                </ul>
            </div>
            {/* social media */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800">
                        <a className="flex justify-between items-center w-full text-white" href="https://www.linkedin.com/in/sabarimurugan" target="_blank" rel="noopener noreferrer">LinkedIn<FaLinkedin size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
                        <a className="flex justify-between items-center w-full text-white" href="https://github.com/sam95-git" target="_blank" rel="noopener noreferrer">GitHub<FaGithub size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700">
                        <a className="flex justify-between items-center w-full text-white" href="mailto:sabari.mathi05@gmail.com" target="_blank" rel="noopener noreferrer">Mail<HiOutlineMail size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500">
                        <a className="flex justify-between items-center w-full text-white" onClick={openResume} target="_blank" rel="noopener noreferrer">Resume<BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>
            {/* resume popup */}
            {isResumeOpen && (
                // passing props(state values) to resume viewer components
                <ResumeViewer handleClose={closeResume}>
                </ResumeViewer>
            )}
        </div>
    );
}

export default Navbar;
