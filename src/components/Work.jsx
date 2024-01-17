import React from "react";
import jpmc from "../assets/jpmc-agile-1.png";

const Work = () => {

    // handle button click
    const handleButtonClick = () =>{
        window.location.href = "../assets/jpmc-agile-certificate.pdf"
    }

    return (
        <div name="work" className="bg-[#262626] w-full h-screen text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full px-8">
                <div className="max-w-[1000px] pb-4 w-full">
                    <div className="sm:text-left pb-4 pl-4">
                        <p className="text-4xl font-bold border-b-4 inline border-[#fcc203]">Certification</p>
                        <p className="py-4">Checkout My certification here</p>
                    </div>
                </div>
                {/* container for certificates */}
                <div className="max-w-[1000px] grid grid-cols-1">
                    <div className="relative group z-0">
                        <img className="mx-auto w-250 h-250 hover:bg-[#4d4d4d]" src={jpmc} alt="jpmc-logo" />
                        <div>
                            <button onClick={handleButtonClick} className="group text-1.5xl text-white border-2 flex items-center max-w-[200px] hover:bg-[#fcc203] hover:border-[#fcc203] py-3 px-6 my-2">
                                View Certificate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;