import React from "react";
import agileCertificate from "../assets/agile-certificate.pdf";

const CertificateViewer = ({ handleClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#262626] p-4 rounded-lg">
                <iframe
                    title="Certificate"
                    className="w-[300px] h-[215px]"
                    src={agileCertificate}
                >
                </iframe>
                <button
                    className="bg-[#fcc203] text-white px-4 py-2 mt-4 rounded-sm"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default CertificateViewer;