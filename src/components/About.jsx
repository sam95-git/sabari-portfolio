import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#262626] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full px-8">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#fcb103]">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hey. I'm Sabari, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>As a Full-Stack Web Developer, I'm passionate about creating exceptional web experiences through end-to-end development. My expertise spans from resolving bugs to implementing feature additions and enhancements. With a keen eye for detail and a passion for crafting seamless digital solutions, I am dedicated to delivering engaging user interfaces and implementing robust server-side functionality. Let's transform ideas into captivating web realities together. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;