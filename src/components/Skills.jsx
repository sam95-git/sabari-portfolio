import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import php from "../assets/php-c.png";
import mysql from "../assets/mysql-c.png";
import laravel from "../assets/laravel-c.png";
import github from "../assets/github.png";


const Skills = () =>{
    return(
        <div name="skills" className="bg-[#262626] w-full h-full text-gray-300">
            {/* container */}
            <div className="max-w-[1000px] mx-auto py-4 flex flex-col justify-center w-full h-full px-8">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#fcc203]">Experience</p>
                    <p className="py-4">These are the technologies I've worked with</p>
                </div>
                {/* icons container */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#4d4d4d] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={html} alt="HTML icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#4d4d4d] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={css} alt="css icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#4d4d4d] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={js} alt="js icon" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#4d4d4d] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={react} alt="react icon" />
                        <p className="my-4">React Js</p>
                    </div>
                    <div className="shadow-md shadow-[#4d4d4d] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={php} alt="php icon" />
                        <p className="my-4">PHP</p>
                    </div>
                    <div className="shadow-md shadow-[#4d4d4d] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={mysql} alt="mysql icon" />
                        <p className="my-4">MySQL</p>
                    </div>
                    <div className="shadow-md shadow-[#4d4d4d] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={laravel} alt="laravel icon" />
                        <p className="my-4">Laravel</p>
                    </div>
                    <div className="shadow-md shadow-[#4d4d4d] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={github} alt="github icon" />
                        <p className="my-4">Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;