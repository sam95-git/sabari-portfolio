import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className="bg-[#262626] w-full h-screen">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center">
                <p className="text-[#fcc203] text-1xl md:text-2xl">Hello, My name is </p>
                <h1 className="text-4xl md:text-7xl text-white">Sabarimurugan.</h1>
                <h2 className="text-4xl md:text-6xl text-gray-300"> I'm a Full Stack Developer, </h2>
                <p className="text-gray-300 py-3 max-w-[700px]">Currently harnessing my skills to architect and develop impactful web applications. Let's bring your ideas to life with cutting-edge solutions!</p>
                <div>
                    <button className="group text-1.5xl text-white border-2 flex items-center max-w-[200px] hover:bg-[#fcc203] hover:border-[#fcc203] py-3 px-6 my-2">
                        <Link to="skills" smooth={true} duration={500} >
                            View My Skills
                        </Link>
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;