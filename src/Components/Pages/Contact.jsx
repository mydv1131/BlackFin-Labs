import React from "react";
import logo from "../../assets/yash.svg";
import Whatsapp_logo from "../../assets/Whatsapp_logo.svg";
import Mail_logo from "../../assets/Mail_logo.svg";
import Call_logo from "../../assets/Call2.svg";

const Contact = () => {
    return (
        <section
            className="
                w-full
                
                bg-transparent
                pt-32 md:pt-40
                pb-20
                px-5 sm:px-10 lg:px-20
                flex justify-center
                mt-8
            "
        >
            <div
                className="
                    w-full md:w-[70%] lg:w-[55%]
                    backdrop-blur-xl
                    bg-white
                    border border-[#626558]/30
                    shadow-xl
                    rounded-3xl
                    p-8 md:p-12
                    flex flex-col items-center
                    text-center
                    
                "
            >
                {/* Logo (Mobile Only) */}
                <div className="md:hidden">
                    <img
                        src={logo}
                        alt="Pharmacy Logo"
                        className="w-40 h-auto object-contain mx-auto"
                    />
                </div>

                {/* Heading */}
                <h1 className="text-xl md:text-4xl mt-5 font-bold text-[#0a1a4d]">
                    Contact Our Pharmacy
                </h1>

                <p className="text-[#0a1a4d]/80 max-w-2xl text-sm md:text-base leading-relaxed">
                    Have questions about prescriptions, medicine availability, or dosage guidance?
                    Our licensed pharmacists are ready to assist you
                </p>

                {/* Contact Buttons */}
                <div className="w-full flex flex-row flex-wrap sm:flex-row gap-5 justify-center items-center mt-3">

                    {/* Call */}
                    <a
                        href="tel:+917415830510"
                        className="
                            flex items-center gap-3
                            px-6 py-3
                            bg-[#62655800]
                            text-[#313426]
                            rounded-full
                            shadow-md
                            hover:scale-105 hover:bg-[#0a1a4d]/50
                            hover:text-white
                            transition duration-300
                             sm:w-auto justify-center
                        "
                    >
                        <img src={Call_logo} alt="Call" className="w-6 h-6" />
                        <span className="font-medium text-sm text-[#0a1a4d]">Call Us</span>
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:blackfinlabspvtltd@gmail.com"
                        className="
                            flex items-center gap-3
                            px-6 py-3
                           
                            backdrop-blur-sm
                            border border-transparent
                            text-[#3d4131]
                            rounded-full
                            shadow-md
                            hover:scale-105 hover:bg-[#0a1a4d]/50
                            hover:text-white
                            transition duration-300
                             sm:w-auto justify-center
                        "
                    >
                        <img src={Mail_logo} alt="Mail" className="w-6 h-6" />
                        <span className="font-medium text-sm text-[#0a1a4d]">Email Us</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/+919876543210?text=Hello%20I%20have%20a%20medicine%20inquiry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex items-center gap-3
                            px-6 py-3
                            
                            backdrop-blur-sm
                            border border-transparent
                            text-[#3d412f]
                            rounded-full
                            shadow-md
                            hover:scale-105 hover:bg-[#0a1a4d]/50
                            hover:text-white
                            transition duration-300
                            sm:w-auto justify-center
                        "
                    >
                        <img src={Whatsapp_logo} alt="Whatsapp" className="w-6 h-6" />
                        <span className="font-medium text-[#0a1a4d]">WhatsApp</span>
                    </a>

                </div>
                <div className="hidden md:block md:mt-2">
                    <img src={logo} alt="Logo" className="w-70 h-auto object-contain mx-auto" />
                </div>
                {/* address */}
                <div className="mt-2">
                    <h2 className="text-2xl font-bold text-[#626558]">Address:</h2>
                    <p className="text-black/80 text-sm md:text-base">Unit No.12, Bhutani Cyber park, 4th Floor Tower Industrial Phase-2, C-Block, Goutam Budh, Nagar Noida (UP) pin-201301</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;