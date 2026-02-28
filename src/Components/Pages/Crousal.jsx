import React, { useState, useEffect, useRef } from "react";

import p1 from "../../assets/Products/FINFIN.jpeg";
import p2 from "../../assets/Products/FINIF_SOAP.jpeg";

import p3 from "../../assets/Products/OSYN_GEL.jpeg";
import p4 from "../../assets/Products/OSYN_GOLD.jpeg";
import p5 from "../../assets/Products/OSYN_SPRAY.jpeg";
import p6 from "../../assets/Products/OSYN_HD.png";
import p7 from "../../assets/Products/BIL_GOLD.jpeg"
import p8 from "../../assets/Products/BIL_SYRUP.jpeg"

import logo from "../../assets/yash.svg";

const Crousal = () => {
    const slides = [p4, p2, p6, p1, p5, p3, p7, p8];

    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null);

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 3000);
    };

    const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    return (
        <div className="w-full flex flex-col items-center mt-20 md:mt-0 relative">

            {/* Logo - Mobile */}
            <div className="md:hidden mb-6 flex justify-center p-3 rounded-xl bg-transparent">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-60 h-24 object-contain"
                />
            </div>

            {/* Carousel Container */}
            <div
                className="relative w-[90%] md:w-[70%] lg:w-[60%] 
                           h-64 sm:h-80 md:h-[450px] 
                           overflow-hidden rounded-3xl 
                           bg-[#B9BAA3]
                           shadow-lg"
                onMouseEnter={stopAutoSlide}
                onMouseLeave={startAutoSlide}
            >

                {/* Slides */}
                <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#626558]/30 via-transparent to-transparent"></div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-1 -translate-y-1/2 
                               bg-[#626558]/0
                               md:hover:bg-[#626558]
                               text-black text-xl
                               w-10 h-10 flex items-center justify-center
                               rounded-full transition duration-300"
                >
                    ❮
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-1 -translate-y-1/2 
                               bg-[#626558]/0
                               md:hover:bg-[#626558]
                               text-black text-xl
                               w-10 h-10 flex items-center justify-center
                               rounded-full transition duration-300"
                >
                    ❯
                </button>

                {/* Dots */}
                {/* <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${current === index
                                ? "bg-[#626558] scale-125"
                                : "bg-black/40"
                                }`}
                        />
                    ))}
                </div> */}

            </div>
        </div>
    );
};

export default Crousal;