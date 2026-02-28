import React, { useEffect, useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "Dr. Anjali Sharma",
        role: "General Physician",
        message:
            "BlackFin Labs consistently provides authentic medicines with reliable service. Their professionalism and quality standards are exceptional.",
    },
    {
        id: 2,
        name: "Rahul Mehta",
        role: "Regular Customer",
        message:
            "I trust BlackFin Labs for my family's healthcare needs. The staff is supportive, and deliveries are always timely and safe.",
    },
    {
        id: 3,
        name: "Priya Verma",
        role: "Healthcare Consultant",
        message:
            "Certified products and proper pharmaceutical handling make BlackFin Labs stand out. Highly recommended for safe and trusted care.",
    },
    {
        id: 4,
        name: "Amit Kapoor",
        role: "Orthopedic Specialist",
        message:
            "Their orthopedic range is impressive and effective. A dependable pharmacy partner for quality treatment support.",
    },
];

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    // Auto slide
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIndex((prev) => (prev + 1) % testimonials.length);
    //     }, 4000);
    //     return () => clearInterval(interval);
    // }, []);

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="bg-[#b5e9f926] py-16 px-4 md:px-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a4d]">
                    What Our Clients Say
                </h2>
                <p className="text-[#0a1a4d]/70 mt-3 max-w-2xl mx-auto">
                    Trusted by healthcare professionals and families for quality,
                    authenticity, and reliable pharmaceutical care.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Cards */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${index * 100}%)`,
                        }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-4"
                            >
                                <div className="bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-xl transition duration-300">
                                    <p className="text-[#0a1a4d]/80 mb-6 italic">
                                        “{item.message}”
                                    </p>

                                    <div>
                                        <h4 className="font-semibold text-[#0a1a4d]">
                                            {item.name}
                                        </h4>
                                        <p className="text-sm text-[#0a1a4d]/60">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0a1a4d] text-white w-10 h-10 rounded-full shadow-md hover:scale-110 transition"
                >
                    ‹
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0a1a4d] text-white w-10 h-10 rounded-full shadow-md hover:scale-110 transition"
                >
                    ›
                </button>
            </div>
        </section>
    );
};

export default Testimonial;