import React from "react";
import aboutImg from "../../assets/about.jpg";

const About2 = () => {
    return (
        <div className=" bg-transparent flex items-center justify-center p-4 rounded-2xl">

            {/* Center Card */}
            <div className="
        w-full 
        max-w-md 
        md:max-w-xl 
        bg-white
        backdrop-blur-xl 
        border border-[#0a1a4d]
        rounded-2xl 
        shadow-xl
        shadow-gray-500/50
        p-6 
        md:p-8 
        text-center
        space-y-6
      ">

                {/* Image */}
                <img
                    src={aboutImg}
                    alt="About MediCare"
                    className="w-70 h-35 md:w-100 md:h-50 mx-auto object-cover rounded-md shadow-md shadow-gray-500"
                />

                {/* Title */}
                <h1 className="text-xl md:text-2xl font-bold text-[#0a1a4d]">
                    About Black Finlab Pvt. Ltd.
                </h1>

                {/* Description */}
                <p className="text-sm md:text-base text-[#0a1a4d]/70 leading-relaxed">
                    Black Finlab Pvt. Ltd. provides certified medicines and trusted healthcare
                    solutions for families and communities. We focus on quality, transparency,
                    and expert consultation to ensure safe treatment.
                </p>

                {/* Small Feature Row */}
                <div className="flex justify-center gap-6 text-xs md:text-sm text-[#626558] font-medium">
                    <span className="bg-[#0a1a4d] text-white px-2 py-1 rounded-lg">💊 Quality</span>
                    <span className="bg-[#0a1a4d] text-white px-2 py-1 rounded-lg">🧪 Safe</span>
                    <span className="bg-[#0a1a4d] text-white px-2 py-1 rounded-lg">👨‍⚕️ Trusted</span>
                </div>



            </div>
        </div>
    );
};

export default About2;